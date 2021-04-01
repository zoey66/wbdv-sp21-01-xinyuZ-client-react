import React, {useState, useEffect} from 'react'

const ListWidget = ({widget, setWidget,widget_item,deletewidget,updatewidget}) => {
    const[editing,setEditing]=useState(widget_item.id === widget.id)
    return (
        <div>

            {
                !editing &&
                <div>
                    <i onClick={() => {
                        setWidget(widget_item);
                        setEditing(true)
                    }} className="fas fa-cog float-right"></i>
                    <h2>{widget_item.type} Widget</h2>
                    {
                        widget_item.ordered &&
                        <ol>
                            {
                                widget_item && widget_item.text && widget_item.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget_item.ordered &&
                        <ul>
                            {
                                widget_item && widget_item.text && widget_item.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </div>
            }
            {
                editing &&
                <div>
                    <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updatewidget(widget_item.id,widget);setEditing(false)
                    }} className="fas fa-check float-right"></i>
                    <input type="checkbox"
                           onChange={(e) =>
                               setWidget(widget => ({...widget, ordered: e.target.value=='on'}))}
                    /> Ordered

                    <br/>
                    List Items
                    <textarea onChange={(e) =>
                        setWidget(widget => ({...widget, text: e.target.value}))} value={widget.text}
                              rows={10} className="form-control">

                    </textarea>

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
            {/*<textarea></textarea>*/}





        </div>
    )
}

export default ListWidget