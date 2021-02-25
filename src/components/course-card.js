import React,{useState} from "react";
import {Link} from "react-router-dom";

const CourseCard =({course,deleteCourse,updateCourse,lastModified,title,owner}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }


    return (
            <div className='card' style={{width: '18rem', margin: '15px'}}>
                <img src='https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png'
                     className='card-img=top' alt='...'/>
                <div className='card-body'>
                    <h5 className='card-title'>
                        {!editing && <Link to='/editor'>
                            {course.title}
                        </Link>}

                        {editing && <input
                            onChange={(event)=>setNewTitle(event.target.value)}
                            value={newTitle}
                            className='form-control'/>}
                    </h5>
                    <p className='card-text'>Some description</p>
                    <img src={``}/>
                    <Link to='/editor' className='btn btn-primary'>
                        {course.title}
                    </Link>
                    {!editing && <i onClick={() => setEditing(true)} className='fas fa-edit'></i>}
                    {editing && <span style={{color: 'red'}}>
                    <i onClick={() => {deleteCourse(course); setEditing(false)}} className='fas fa-times'></i>
                </span>}
                    {editing && <span style={{color: 'green'}}>
                    <i onClick={() => {
                        saveTitle(); setEditing(false)
                    }} className='fas fa-check'></i>
                </span>}
                </div>

            </div>

    )
}
export default CourseCard