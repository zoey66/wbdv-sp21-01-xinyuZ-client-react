


export const findWidgetForTopic= (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
        .then(response => response.json())


export const createWidget = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())


export const deleteWidget = (WidgetId) =>
    fetch(`http://localhost:8080/api/widgets/${WidgetId}`, {
        method: "DELETE"
    }).then(response =>response.json())

export const updateWidget = (WidgetId, widget) =>
    fetch(`http://localhost:8080/api/widgets/${WidgetId}`, {
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