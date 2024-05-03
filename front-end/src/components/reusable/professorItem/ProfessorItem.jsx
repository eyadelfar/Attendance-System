import React from 'react';
// import '../../pages/admin/professor/professorList/professorList.css';
 import './ProfessorItem.css'
 import icon from '../../../pics/icon.png'
 import dashboard from '../../../pics/dashboard.png'
 import Edit from '../../../pics/edit.png'
 import Delete from '../../../pics/delete.png'


const ProfessorItem = (prop) => {
  const { name, id } = prop.item
  return (
    <div className="professor-item">
      <div className="professor-name"><img src={icon} alt="profile image" />{name}</div>
      <div className="professor-id">{id}</div>
      <div className="professor-dashboard">
        {/* Dashboard icon placeholder */}<a href={'icon'}>
               <img src={dashboard} alt={'image'} />
                 </a>
      </div>
      <div className="professor-actions">
        {/* Action icons placeholders */}
        <img src={Edit}  />
        <img src={Delete}  />
      </div>
    </div>
  );
};

export default ProfessorItem;


// const SingleCard = (props) => {
//     const{title, totalnumber, icon}= props.item
//   return (
//     <div className="single_card">
//       <div className="card_content">
//         <h4>{title}</h4>
//         <span>{totalnumber}</span>
//       </div>
//       <span className="card_icon">
//       <i class={icon}></i>
//       </span>
//     </div>
//   )
// }

// export default SingleCard