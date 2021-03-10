import React ,{useState}from "react";
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import {Link,Route} from 'react-router-dom'
import CourseService, {findAllCourses} from "../services/course-service";
import './course-manager.css'



export default class CourseManager
    extends React.Component {


    state = {
        courses:[],
        course_title:''

    }


    componentDidMount() {
        CourseService.findAllCourses()
            .then(actualCourses => this.setState(
                {
                    courses: actualCourses
                }
            ))
    }


    addCourse = () => {

        const newCourse = {
            title: 'new title',
            owner: 'me',
            lastModified: '1/1/2021'
        }
        CourseService.createCourse(newCourse)
            .then(actualCourse =>{
                this.state.courses.push(actualCourse)
                this.setState(this.state)
            }
            )
    }


    updateCourse = (course) => {
        CourseService.updateCourse(course._id, course)
            .then(status => {
                this.setState((prevState) => {
                    let nextState = {...prevState}
                    nextState.courses = prevState.courses.map(c => {
                        if(c._id === course._id) {
                            return course
                        } else {
                            return c
                        }
                    })
                    return nextState
                })
            })
    }


    deleteCourse = (courseToDelete) => {
        CourseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    courses: prevState.courses.filter
                    (course => course!== courseToDelete)
                }))
            })

    }

    addnew=(title) => {
            const newCourse = {
                title: title,
                owner:'me',lastModified: '1/1/2021'
            }
            CourseService.createCourse(newCourse)
        .then(course => {
            this.state.courses.push(course)
            this.setState(this.state)
        })
        this.setState({...this.state,
            newCourse:''})

}

    get_course_title= (title)=>{
        this.setState({
            course_title:title
        })
    }


    render() {
            return (
                <div>
                    <Route path='/courses/table' exact={true}>
                        <div className="wbdv-sticky-nav-bar wbdv-padding-5px">
                            <div className="row">
                                <div className="col-1">
                                    <i className="fas fa-bars fa-1.5x"></i>
                                </div>
                                <div className="col-2 d-none d-lg-block d-print-block">
                                    <h5>Course Manager</h5>
                                </div>
                                <div className="col-8">
                                    <input type="text" className='form-control'
                                           onChange={(event) => {
                                               this.setState({
                                                   newCourse:event.target.value})

                                           }}
                                           value={this.state.newCourse}
                                           placeholder="New Course Title"/>
                                </div>
                                <div className="col-1">
                                <span style={{color: 'Tomato'}}>
                                    <i onClick={event => {
                                        this.addnew(this.state.newCourse)
                                    }
                                    }
                                       className="fas fa-plus-circle fa-2x"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                        <CourseTable
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            get_course_title={this.get_course_title}/>

                        <div className="row ">
                            <div className="col-12 my-plus-stuck-at-bottom-right">
                            <span style={{color: 'Tomato'}}>
                            <i onClick={event => {
                                this.addnew(this.state.newCourse)
                            }
                            }
                               className="fas fa-plus-circle fa-3x float-right">

                            </i>
                            </span>

                            </div>
                        </div>
                    </Route>

                    <Route path='/courses/grid' exact={true}>
                        <div className="wbdv-sticky-nav-bar wbdv-padding-5px">
                            <div className="row">
                                <div className="col-1">
                                    <i className="fas fa-bars fa-1.5x"></i>
                                </div>
                                <div className="col-2 d-none d-lg-block d-print-block">
                                    <h5>Course Manager</h5>
                                </div>
                                <div className="col-8">
                                    <input type="text" className='form-control'
                                           onChange={(event) => {
                                               this.setState({
                                                   newCourse:event.target.value})

                                           }}
                                           value={this.state.newCourse}
                                           placeholder="New Course Title"/>
                                </div>
                                <div className="col-1">
                                <span style={{color: 'Tomato'}}>
                                    <i onClick={event => {
                                        this.addnew(this.state.newCourse)
                                    }
                                    }
                                       className="fas fa-plus-circle fa-2x"></i>
                                </span>
                                </div>
                            </div>
                        </div>
                        <CourseGrid
                            updateCourse={this.updateCourse}
                            deleteCourse={this.deleteCourse}
                            courses={this.state.courses}
                            get_course_title={this.get_course_title}/>


                        <div className="row ">
                            <div className="col-12 my-plus-stuck-at-bottom-right">
                            <span style={{color: 'Tomato'}}>
                            <i onClick={event => {
                                this.addnew(this.state.newCourse)
                            }
                            }
                               className="fas fa-plus-circle fa-3x float-right">

                            </i>
                            </span>

                            </div>
                        </div>
                    </Route>

                    {/*<Route path='/courses/editor' render={(props) =>*/}
                    {/*    <CourseEditor {...props} history={props.history}/>}>*/}
                    {/*</Route>*/}
                    <Route path={[
                        "/courses/:layout/edit/:courseId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                        "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                    ]}
                           exact={true}
                           render={(props) =>
                               <CourseEditor course_title={this.state.course_title}/>
                           }
                            >
                    </Route>



                </div>
            )
        }
    }


