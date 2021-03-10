import React from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import moduleReducer from "../reducers/module-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import LessonTopic from './lesson-topic'

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer:topicReducer
})

const store = createStore(reducer)

const CourseEditor = ({history, params,course_title}) => {
    const {layout, courseId, moduleId} = useParams();
    // console.log(course_title)
    return(
        <Provider store={store}>
            <h1>
                <Link to={`/courses/${layout}`}>
                    <i className="fas fa-arrow-left"></i>
                </Link>
                Course Editor
                {/*<i className="fas fa-arrow-left"*/}
                {/*onClick={() => history.goBack()}></i>*/}
            </h1>
            <div className="row">
                <div className="col-3">
                    <h2>{course_title}</h2>
                    <ModuleList/>
                </div>
                <div className="col-9">
                    <LessonTabs/>
                    <LessonTopic/>
                </div>

            </div>
        </Provider>)
}

export default CourseEditor