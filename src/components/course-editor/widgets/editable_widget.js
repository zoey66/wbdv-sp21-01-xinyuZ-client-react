import React, {useState} from 'react'
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
                <div>
                    {widget_item.size === 1 && <h1>{widget_item.text}</h1>}
                    {widget_item.size === 2 && <h2>{widget_item.text}</h2>}
                    {widget_item.size === 3 && <h3>{widget_item.text}</h3>}
                    {widget_item.size === 4 && <h4>{widget_item.text}</h4>}
                    {widget_item.size === 5 && <h5>{widget_item.text}</h5>}
                    {widget_item.size === 6 && <h6>{widget_item.text}</h6>}
                    <i onClick={() => setWidget(widget_item)} className="fas fa-cog float-right"></i>
                </div>

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
                    widget={widget}/>
            }
        </>
    )
}

export default EditableWidget