import React, { useState, useEffect } from 'react';
import './CourseCreate.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
// import { render } from 'react-dom';
// import { setError } from './error';

const CourseCreate = () => {
  const [course_code, setCourseCode] = useState('');
  const [course_title, setCourseTitle] = useState('');
  const [term, setTerm] = useState('');
  const [year, setYear] = useState('');
  const [error, setError] = useState(null);
  const [token] = useState(localStorage.getItem('token'));
  const decodedToken = jwtDecode(token);
  const [professorData, setProfessorData] = useState([]);
  const [courseData, setCourseData] = useState([]);

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
    axios.get('http://localhost:4000/courses', {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setCourseData(res.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  const [selectedProfessor, setSelectedProfessor] = useState({});
  const [selectedCourse, setSelectedCourse] = useState({});

  const handleSaveChanges = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/semester', {
        course_id: selectedCourse.value,
        faculty_id: selectedProfessor.value,
        term,
        year
      },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    }
    );
    if (response.data ) {   
        window.location.href = '/CourseList';
      } else  {
        console.log('FAILD');
      }   
    } catch (error) {
      setError(error.message);
    }
  };
  
     const professorOptions = professorData.map((professor) => ({
     key: professor.faculty_id,
     value: professor.faculty_id,
    label: professor.fullname
  }));

  const courseOptions =  courseData.map((courses) => ({
    key: courses.course_id,
    value: courses.course_id,
   label: courses.code + "  :  " + courses.title
 }));
//   professorData.map((professor) => console.log(professor));
  return (
    <div className="">
      <h1 id='course-create-header'>Semester</h1>
      <div id="course-create-form">
        <form id='course-create-forms-parent'>
          <div id='course-create-form-child'>
            <div id="course-create-form-header">
              <h1>Create Semester </h1>
            </div>

            <div className="course-create-form-field">
              <label >Semester Name <span className='mandatory'>*</span></label>  
              <select className="course-select" value={selectedCourse.value} onChange={(event) => setSelectedCourse(event.target)}>
                <option value="">Select A Semester</option>
                {courseOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </select>
            </div>


            <div className="course-create-form-field">
              <label >Professor Name <span className='mandatory'>*</span></label>  
              <select className="course-select" value={selectedProfessor.value} onChange={(event) => setSelectedProfessor(event.target)}>
                <option value="">Select A Professor</option>
                {professorOptions.map((option) => <option value={option.value}>{option.label}</option>)}
              </select>
              
            </div>

            <div id="term-year-form-create">
              <label >Term <span className='mandatory'>*</span></label>
              <label id='term-year-form-position-create'>Year <span className='mandatory'>*</span></label>
              
            </div>

            <div id='term-year-form-create'>
              <select id="term-year-form-create" value={term}
              onChange={(e) => setTerm(e.target.value)} >
                <option value="text">Select a term</option>
                <option value="fall">fall</option>
                <option value="spring">spring</option>
                <option value="winter">winter</option>
                <option value="summer">summer</option>
              </select>
              <select id="term-year-form-create" value={year}
              onChange={(e) => setYear(e.target.value)}>
                <option value="string">Select a year</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>

            <div>
                <button id='course-create-button' onClick={handleSaveChanges}>
                  <div className='create-button-text'>
                    Create
                  </div>
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseCreate;