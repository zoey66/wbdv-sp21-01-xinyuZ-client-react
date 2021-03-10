import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../services/topic-service'
import lessonService from "../services/lesson-service";

const LessonTopics = (
    {
        topics=[
        ],
        findTopicForLesson,
        createTopicForLesson,
        updateTopicForLesson,
        deleteTopicForLesson,
        findLessonsForModule
    }) => {
    const {layout,courseId,moduleId,lessonId,topicId} = useParams();
    useEffect(() => {
        if(lessonId !== "undefined" || typeof lessonId !== "undefined") {
            findTopicForLesson(lessonId)
        }
    }, [lessonId])

    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        <li className="nav-item">
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                item={topic}
                                updateItem={updateTopicForLesson}
                                deleteItem={deleteTopicForLesson}
                            />
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => {
    return{
        topics:state.topicReducer.topics
    }}
const dtpm = (dispatch) => ({
    findTopicForLesson: (lessonId) => {
        topicService.findTopicForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPIC",
                topics
            }))
    },
    createTopicForLesson: (lessonId) => {
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    },

    updateTopicForLesson: (topic) =>{
        topicService.updateTopicForLesson(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            }))
    },


    deleteTopicForLesson: (topic) =>{
        topicService.deleteTopicForLesson(topic._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topic
            }))
    },

    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSON",
                lessons
            }))
    },

})

export default connect(stpm, dtpm)(LessonTopics)