const URL=process.env.REACT_APP_URL


export const findWidgetForTopic= (topicId) =>
    fetch(`${URL}/topics/${topicId}/widgets`)
        .then(response => response.json())


export const createWidget = (topicId) =>
    fetch(`${URL}/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())


export const deleteWidget = (WidgetId) =>
    fetch(`${URL}/widgets/${WidgetId}`, {
        method: "DELETE"
    }).then(response =>response.json())

export const updateWidget = (WidgetId, widget) =>
    fetch(`${URL}/widgets/${WidgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response=>response.json())

const api={
    findWidgetForTopic,createWidget,deleteWidget,updateWidget
}
export default api;