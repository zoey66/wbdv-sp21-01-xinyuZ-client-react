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
        // widget,
        // setWidget

    })=>{
    const [widget, setWidget] = useState({})

    return (
        <>

            {/*{*/}
            {/*    widget_item.id === widget.id &&*/}
            {/*    <>*/}
            {/*        <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>*/}
            {/*        <i onClick={() => {*/}
            {/*            updatewidget(widget_item.id,widget)*/}
            {/*        }} className="fas fa-check float-right"></i>*/}
            {/*        */}
            {/*    </>*/}
            {/*}*/}
            {/*{*/}
            {/*    widget_item.id !== widget.id &&*/}
            {/*    <div>*/}
            {/*        <h2>{widget_item.type} Widget</h2>*/}
            {/*        {widget_item.text}*/}
            {/*        <i onClick={() => setWidget(widget_item)} className="fas fa-cog float-right"></i>*/}
            {/*    </div>*/}

            {/*}*/}

            {
                widget_item.type === "HEADING" &&
                <HeadingWidget
                    setWidget={setWidget}
                    editing={widget_item.id === widget.id}
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
                    editing={widget_item.id === widget.id}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}/>
            }
            {
                widget_item.type === "LIST" &&
                <ListWidget
                    setWidget={setWidget}
                    editing={widget_item.id === widget.id}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}/>
            }
            {
                widget_item.type === "IMAGE" &&
                <ImageWidget
                    setWidget={setWidget}
                    editing={widget_item.id === widget.id}
                    widget={widget}
                    widget_item={widget_item}
                    deletewidget={deletewidget}
                    updatewidget={updatewidget}/>
            }

        </>
    )
}

export default EditableWidget