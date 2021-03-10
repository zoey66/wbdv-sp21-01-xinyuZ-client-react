import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../services/lesson-service';

const LessonTabs = (
    {
        lessons=[
        ],
        findLessonsForModule,
        createLessonForModule,
        updateLessonForModule,
        deleteLessonForModule
    }) => {
    const {layout,courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" || typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [moduleId])
    return(
        <div>
            <h2>Lessons</h2>
            <ul className="nav nav-pills">
                {
                    lessons.map(lesson =>
                        <li className="nav-item">
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                item={lesson}
                                updateItem={updateLessonForModule}
                                deleteItem={deleteLessonForModule}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return{
    lessons: state.lessonReducer.lessons
}}
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSON",
                lessons
            }))
    },
    createLessonForModule: (moduleId) => {
        lessonService
            .createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },

    updateLessonForModule: (lesson) =>{
        lessonService.updateLessonForModule(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            }))
    },


    deleteLessonForModule: (lesson) =>{
        lessonService.deleteLessonForModule(lesson._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lesson
            }))
    },

})

export default connect(stpm, dtpm)(LessonTabs)