import React from 'react';
import Course from '../course/course-comp';
import Students from '../students/student-comp';
import './table-course-style.css';
 const TableCourse = () =>{

    return (
       <div>
        <h1>Courses</h1> 

          <div className ='table-course-container'>
          <Course CourseName = 'programming basics '/>
          <Students student = {{
            name : 'Carlos',
            score : 4.5,
            gender :'Male'
          }}/>
          <Students student = {{
            name : 'Maria',
            score : 3.2,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Ricardo',
            score : 3.5,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Fernando',
            score : 2.5,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Ana',
            score : 4.8,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Carolina',
            score : 2,
            gender :'Female',
          }}/>

          <Course CourseName = 'Data Structure '/>
          <Students student = {{
          name : 'Juan',
            score : 3.5,
            gender :'Male'
          }}/>
          <Students student = {{
            name : 'Julian',
            score : 1.2,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Andres',
            score : 2.5,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Francisco',
            score : 2.8,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Lina',
            score : 1.8,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Karol',
            score : 5,
            gender :'Female',
          }}/>
          <Course CourseName = 'Programming 4 '/>
          <Students student = {{
          name : 'Alejandro',
            score : 3.5,
            gender :'Male'
          }}/>
          <Students student = {{
            name : 'Federico',
            score : 3.8,
            gender :'Male',
          }}/>
          <Students student = {{
            name : 'Maria',
            score : 4.6,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Daniela',
            score : 2.8,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Jessica',
            score : 4.5,
            gender :'Female',
          }}/>
          <Students student = {{
            name : 'Natalia',
            score : 4.8,
            gender :'Female',
          }}/>
      </div>
       </div> 
        
    );
}

export default TableCourse;