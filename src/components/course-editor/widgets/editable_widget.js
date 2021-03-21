import React, {useState} from 'react'
import {Link} from "react-router-dom";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

const EditableWidget =(
    {
        deletewidget,
        updatewidget,
        widget_item

    })=>{
    const [widgets, setWidgets] = useState([])
    const [widget, setWidget] = useState({})
    return (
        <>
            {
                widget_item.id === widget.id &&
                <>
                    <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updatewidget(widget)
                    }} className="fas fa-check float-right"></i>
                </>
            }
            {
                widget_item.id !== widget.id &&
                <i onClick={() => setWidget(widget_item)} className="fas fa-cog float-right"></i>
            }
            {
                widget_item.type === "HEADING" &&
                <HeadingWidget
                    setWidget={setWidget}
                    editing={widget_item.id === widget.id}
                    widget={widget}/>
            }
            {
                widget_item.type === "PARAGRAPH" &&
                <ParagraphWidget
                    setWidget={setWidget}
                    editing={widget_item.id === widget.id}
                    widget={widget_item}/>
            }
        </>
    )
}

export default EditableWidget