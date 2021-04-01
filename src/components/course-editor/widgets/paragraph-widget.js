import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing,widget_item,deletewidget,updatewidget}) => {
    return (
        <div>

            {
                editing &&
                <div>
                    <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updatewidget(widget_item.id,widget)
                    }} className="fas fa-check float-right"></i>
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        className="form-control"></textarea>

                    <select onChange={(e) =>
                        setWidget(widget => ({...widget, type: (e.target.value)}))}
                            value={widget.type}
                            className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option>Video</option>
                        <option value={'IMAGE'}>Image</option>
                        <option>link</option>
                        <option value={'LIST'}>List</option>
                        <option>HTML</option>
                    </select>
                </div>
            }
            {
                !editing &&
                <div>
                    <i onClick={() => setWidget(widget_item)} className="fas fa-cog float-right"></i>
                    <h2>{widget_item.type} Widget</h2>
                    <p>
                        {widget.text}
                    </p>
                </div>
            }
        </div>
    )
}

export default ParagraphWidget