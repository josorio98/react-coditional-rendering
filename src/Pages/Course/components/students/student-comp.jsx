import React from 'react';
import './student-style.css';
import Mujer from './mujer.jpg';
import Hombre from './hombre.png';
 const Students = (props) =>{

    return (
      <div className ='student-container'>
        {props.student.name}
        {'-----------'}

        {
          props.student.score <3
          ?
            <span className ='students-reprobate'>
              {props.student.score} 
            </span>
          :
          <span>{props.student.score}</span>
        }
 {'-----------'}
{
          props.student.gender == 'Female'
          ?
          <img src={Mujer} width="25" height="25"/>
              
          :
          <img src={Hombre} width="25" height="25"/>
        }

      </div>  
    );
}

export default Students;