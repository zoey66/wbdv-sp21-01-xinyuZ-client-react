import React from "react";
import {Link} from "react-router-dom";
import CourseCard from "./course-card";

const CourseGrid = ({courses,updateCourse,deleteCourse,get_course_title}) =>
    <div>
        <div className='row'>
            <div className="col-4">
                <h2>Recent Documents</h2>
            </div>
            <div className="col-6 ">
                <h2>Owned by me
                    <i className="fa fa-sort-down"></i></h2>

            </div>

            <div className="col-2">
                <i className="fas fa-2x fa-file"></i>
                <i className="fas fa-2x fa-sort"></i>
                <Link to ='/courses/table'>
                    <i className='fas fa-2x fa-list'></i>
                </Link>
            </div>
        </div>

        <div className='row'>
            {
                courses.map(course =>
                    <CourseCard course={course}
                                key={course._id}
                                updateCourse={updateCourse}
                                deleteCourse={deleteCourse}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                                get_course_title={get_course_title}
                    />

                )
            }
        </div>
    </div>
export default CourseGrid