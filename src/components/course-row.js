import React ,{useState}from "react";
import {Link} from "react-router-dom";

const CourseRow = ({deleteCourse,
                       course,
                        updateCourse,
                        get_course_title,
                        title

}) =>{
    const [editing,setEditing]=useState(false)
    const [newTitle,setNewTitle]=useState(course.title)
    const saveTitle = () =>{
        setEditing(false)
        const newCourse ={
            ...course,
            title:newTitle
        }
        updateCourse(newCourse)
    }
    return (
    <tr>
            <td>
                {!editing && <Link to={`/courses/table/edit/${course._id}`}
                onClick={()=> {
                    get_course_title(title)
                }}
                >
                    {course.title}
                </Link>}

                {editing && <input
                    onChange={(event)=>setNewTitle(event.target.value)}
                    value={newTitle}
                    className='form-control'/>}


            </td>
            <td className='d-none d-md-table-cell'>{course.owner}</td>
            <td className='d-none d-lg-table-cell'>{course.lastModified}</td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td>
                {!editing && <i onClick={() => setEditing(true)} className='fas fa-edit'></i>}


                {editing && <span style={{color: 'green'}}>
                    <i onClick={() => {
                    saveTitle(); setEditing(false)
                }} className='fas fa-check'></i>
                </span>}
                {editing && <span style={{color: 'red'}}>
                    <i onClick={() => {deleteCourse(course);setEditing(false)}} className='fas fa-times'></i>
                </span>}

            </td>
    </tr>)
}

export default CourseRow