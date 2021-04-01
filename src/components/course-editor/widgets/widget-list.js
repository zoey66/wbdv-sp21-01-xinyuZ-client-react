import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetService from '../../../services/widget-service'
import EditableWidget from '../widgets/editable_widget'


const WidgetList = (
    {
        widgets=[],
        findWidgetForTopic,
        createWidgetForTopic,
        updateWidgetForTopic,
        deleteWidgetForTopic,
    }
) => {
    const {layout,courseId,moduleId,lessonId,topicId} = useParams()
    // const [widgets, setWidgets] = useState([])

    useEffect(() => {
            findWidgetForTopic(topicId)
    }, [topicId])


    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus float-right fa-2x"></i>
            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            <EditableWidget deletewidget={deleteWidgetForTopic}
                                            updatewidget={updateWidgetForTopic}
                                            widget_item={_widget}
                                            // widget={widget}
                                            // setWidget={setWidget}
                            />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm =(state)=>{
    return {
        widgets:state.widgetReducer.widgets
    }
}

const dtpm =(dispatch)=>({
    findWidgetForTopic:(topicId)=>{
        widgetService.findWidgetForTopic(topicId)
            .then(widgets=> dispatch({
                type:'FIND_WIDGET',
                widgets
            }))
    },

    createWidgetForTopic:(topicId)=>{
        widgetService.createWidget(topicId)
            .then(widget => dispatch({
                type:'CREATE_WIDGET',
                widget
            }))
    },

    updateWidgetForTopic: (id,widget) =>{
        widgetService.updateWidget(id,widget)
            .then(status =>dispatch({
                type:'UPDATE_WIDGET',
                widget
            }))
    },

    deleteWidgetForTopic: (widget) =>{
        widgetService.deleteWidget(widget.id)
            .then(status=>dispatch({
                type:'DELETE_WIDGET',
                widgetToDelete:widget
            }))
    }

})

export default connect(stpm,dtpm)(WidgetList)
