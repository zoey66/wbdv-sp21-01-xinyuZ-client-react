import React, {useState} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const EditableWidget =(
    {
        deletewidget,
        updatewidget,
        widget_item,

    })=>{
    const [widget, setWidget] = useState({})
    const [editing,setEditing]=useState(false)

    return (
        <>

            {
                widget_item.type === "HEADING" &&
                <HeadingWidget
                    setWidget={setWidget}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}
                />
            }
            {
                widget_item.type === "PARAGRAPH" &&
                <ParagraphWidget
                    setWidget={setWidget}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}/>
            }
            {
                widget_item.type === "LIST" &&
                <ListWidget
                    setWidget={setWidget}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}/>
            }
            {
                widget_item.type === "IMAGE" &&
                <ImageWidget
                    setWidget={setWidget}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}/>
            }

        </>
    )
}

export default EditableWidget