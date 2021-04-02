import React, {useState, useEffect} from 'react'


const ImageWidget = ({widget, setWidget,widget_item,deletewidget,updatewidget}) => {
    const[editing,setEditing]=useState(widget_item.id === widget.id)

    return (

        <div>
            {
                editing &&

                <div>

                    <i onClick={() => deletewidget(widget_item)} className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updatewidget(widget_item.id,widget);setEditing(false)
                    }} className="fas fa-check float-right"></i>

                    URL
                    <input onChange={(e) =>
                        setWidget(widget => ({...widget, src: e.target.value}))}
                           value={widget.src} className="form-control"/>
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
                        <h2>{widget_item.type} Widget</h2>
                        <img src={widget_item.src}  className='img-responsive' alt=''
                            width={widget_item.width} height={widget_item.height}/>
                        <i onClick={() => {
                            setWidget(widget_item);
                            setEditing(true)
                        }} className="fas fa-cog float-right"></i>
                    </div>

            }

        </div>
    )
}

export default ImageWidget