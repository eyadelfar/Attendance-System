import React, { useState,useEffect } from 'react';
import './CourseEdit.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'

const CourseEdit = () => {
  const [courses, setCourses] = useState({});
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [error, setError] = useState(null);
  const [semes_id] = useState(localStorage.getItem('semester_id'));
  const [professorData, setProfessorData] = useState([]);
  const [selectedProfessor, setSelectedProfessor] = useState({});
  const [course_title, setCourse_title] = useState('');
  const [course_code, setCourse_code] = useState('');
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios.get('http://localhost:4000/professors', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setProfessorData(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:4000/semester/courseDetails/semester/${semes_id}`, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setCourses(res.data);
      console.log(courses);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);
  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(`http://localhost:4000/semester/${semes_id}`, {
        course_title,
        course_code,
        faculty_id: selectedProfessor.value,
        year,
        term
      }, {
        headers: {
          'Authorization': token,
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const professorOptions = professorData.map((professor) => ({
    key: professor.faculty_id,
    value: professor.faculty_id,
    label: professor.fullname
  }));

  return (
    <div className="">
      <h1 id='course-edit-header'>Courses</h1>
      <div id="course-edit-form">
        <form id='course-edit-forms-parent'>
          <div id='course-edit-form-child'>
            <div id="course-edit-form-header">
              <h1>Edit Course </h1>
            </div>
            <div className="course-edit-form-field">
              <label >Course Title <span className='mandatory'>*</span></label>
              <input type="text" id="" placeholder={courses.title} value={course_title} onChange={(e) =>  setCourse_title(e.target.value)} />
            </div>

            <div id="course-edit-form-field-code">
              <label >Course Code <span className='mandatory'>*</span></label>
              <input type="text" id="" placeholder={courses.code} value={course_code} onChange={(e) =>  setCourse_code(e.target.value)}/>
            </div>

            <div className="course-create-form-field">
              <label >Professor Name <span className='mandatory'>*</span></label>
              <select className="course-select" value={selectedProfessor.value} onChange={(e) => setSelectedProfessor(e.target)}>
                <option value="">Select A Professor</option>
                {professorOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </select>
            </div>

            <div id="term-year-form">
              <label >Term <span className='mandatory'>*</span></label>
              <label id='xxx'>Year <span className='mandatory'>*</span></label>
              </div>

              <div id='term-year-form'>
             
               <select id="term-year-form" value={term} onChange={(e) => setTerm(e.target.value)}>
                <option value="">Select a term</option>
                <option value="fall">fall</option>
                <option value="spring">spring</option>
                <option value="winter">winter</option>
                <option value="summer">summer</option>
              </select>

              <select id="term-year-form" value={year} onChange={(e) => setYear(e.target.value)}>
                <option value="">Select a year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>

             <div>
            <a href="/CourseList">
             <button id='edit-course-button' onClick={handleSaveChanges}>
            <div className='edit-course-text'>
                    Save Change
           </div>
          </button>
            </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseEdit;