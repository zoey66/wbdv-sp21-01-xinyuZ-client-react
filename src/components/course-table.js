import React from "react";
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import CourseCard from "./course-card";
import {deleteCourse} from "../services/course-service";

export default class CourseTable
    extends React.Component{
    constructor(props){
        super(props)

    }


    render() {


        return(
            <div>
                <table className='table table-striped'
                       style={{width:'100%',overflow:'auto'}}>
                    <thead>
                        <tr>
                            <th scope='col'><h2>Title</h2></th>
                            <th className='d-none d-md-table-cell' scope='col'><h2>Owned by</h2></th>
                            <th className='d-none d-lg-table-cell' scope='col'>
                                <h2>Last Modified</h2></th>
                            <th scope='col'>
                                <i className="fas fa-2x fa-file"></i>
                                <i className="fas fa-2x fa-sort"></i>
                                <Link to='/courses/grid'>
                                    <i className='fas fa-2x fa-th'></i>
                                </Link>

                            </th>
                        </tr>

                    </thead>
                    <tbody>
                    {
                        this.props.courses.map(course =>
                            <CourseRow
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={course._id}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                                get_course_title={this.props.get_course_title}

                            />
                        )
                    }
                    </tbody>

                </table>





            </div>

        )
    }
}

