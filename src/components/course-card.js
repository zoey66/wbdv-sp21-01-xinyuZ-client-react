import React,{useState} from "react";
import {Link} from "react-router-dom";

const CourseCard =({
                       deleteCourse,
                       course,
                       updateCourse,
         get_course_title
                   }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(course.title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle,

        }
        updateCourse(newCourse)
    }


    return (
            <div className='card' style={{width: '18rem', margin: '15px'}}>
                <img src='https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png'
                     className='card-img=top' alt='...'/>
                <div className='card-body'>
                    <h5 className='card-title'>
                        {!editing && <Link to={`/courses/grid/edit/${course._id}`}
                                           onClick={()=> {
                                               get_course_title(course.title)
                                           }}>
                            {course.title}
                        </Link>}

                        {editing && <input
                            onChange={(event)=>setNewTitle(event.target.value)}
                            value={newTitle}
                            className='form-control'/>}
                    </h5>
                    <p className='card-text'>Some description</p>
                    <img src={``}/>
                    <Link to={`/courses/grid/edit/${course._id}`} className='btn btn-primary'
                          onClick={()=> {
                              get_course_title(course.title)
                          }}>
                        {course.title}
                    </Link>
                    {!editing && <i onClick={() => setEditing(true)} className='fas fa-edit'></i>}


                    {editing && <span style={{color: 'green'}}>
                    <i onClick={() => {
                        saveTitle(); setEditing(false)
                    }} className='fas fa-check'></i>
                </span>}
                    {editing && <span style={{color: 'red'}}>
                    <i onClick={() => {deleteCourse(course);setEditing(false)}} className='fas fa-times'></i>
                </span>}
                </div>

            </div>

    )
}
export default CourseCard