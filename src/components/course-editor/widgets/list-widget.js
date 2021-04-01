import React from 'react'

const ListWidget = ({widget, setWidget, editing,widget_item,deletewidget,updatewidget}) => {
    return (
        <div>
            <h2>List Widget</h2>
            <i onClick={() => setWidget(widget_item)} className="fas fa-cog float-right"></i>
            {
                !editing &&
                <>
                    <h2>{widget_item.type} Widget</h2>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return(
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updatewidget(widget_item.id,widget)
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