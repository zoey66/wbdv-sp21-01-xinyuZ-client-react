import React from "react";
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>




                <nav className="navbar navbar-expand-lg wbdv-sticky-nav-bar bg-secondary ">
                    <div className="container-fluid ">
                        <div className="col-4">
                            <div className="navbar-header">
                                {/*<Link to ='/courses/table'>*/}
                                {/*    <i className='fas fa-arrow-left'></i>*/}
                                {/*</Link>*/}
                                <i className='fas fa-arrow-left'
                                   onClick={() => history.goBack()}></i>
                                <i className="far fa-times fa-1.5x"></i>
                                CS5610 - WebDev
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="collapse navbar-collapse">
                            <ul className="nav nav-pills p-3">
                                <li className="nav-item ">
                                    <a className="nav-link btn-secondary " aria-current="page" href="#">Build</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active btn-secondary " href="#">Pages</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link btn-secondary" href="#">Theme</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link btn-secondary" href="#">Store</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link btn-secondary" href="#">Apps</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link btn-secondary" href="#">Settings</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link btn-secondary" href="#">
                                        <i className="far fa-plus-square 1.5"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
            </div>
        </nav>

        <div class="row">
            <div class="col-4 side_bar">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark ">
                        Module 1-jQuery
                        <i class="far fa-times"></i>
                    </li>
                    <li class="list-group-item active list-group-item ">
                        Module 2-React
                        <i class="far fa-times"></i>
                    </li>
                    <li class="list-group-item list-group-item-dark">
                        Module 3-Redux
                        <i class="far fa-times"></i>
                    </li>
                    <li class="list-group-item list-group-item-dark">
                        Module 4-Native
                        <i class="far fa-times"></i>
                    </li>
                    <li class="list-group-item list-group-item-dark">
                        Module 5-Angular
                        <i class="far fa-times"></i>
                    </li>
                    <li class="list-group-item list-group-item-dark">
                        Module 6-Node
                        <i class="far fa-times"></i>
                    </li>
                    <li class="list-group-item list-group-item-dark">
                        Module 7-Mongo
                        <i class="far fa-times"></i>
                    </li>
                </ul>
            </div>

            <div class="col-8">
                <br/>
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <a class="nav-link btn-secondary" href="#">Topic1</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link active btn-secondary" href="#">Topic2</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link btn-secondary" href="#">Topic3</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn-secondary" href="#">Topic4</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link btn-secondary" href="#">
                            <i class="far fa-plus-square fa-1.2x"></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </div>


export default  CourseEditor