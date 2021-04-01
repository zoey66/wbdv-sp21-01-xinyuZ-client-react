import React from 'react'

const ImageWidget = ({widget, setWidget, editing,widget_item,deletewidget,updatewidget}) => {
    return (
        <div>
            {
                editing &&

                <div>

                    <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updatewidget(widget_item.id,widget)
                    }} className="fas fa-check float-right"></i>

                    URL
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, url: e.target.value}))}
                           value={widget.url} className="form-control"/>
                    width
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, width: e.target.value}))}
                        value={widget.width} className="form-control"/>
                    height
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, height: e.target.value}))}
                        value={widget.height} className="form-control"/>


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
                    {widget.url}
                    {widget.height}
                    {widget.width}
                </p>
                    </div>

            }

        </div>
    )
}

export default ImageWidget