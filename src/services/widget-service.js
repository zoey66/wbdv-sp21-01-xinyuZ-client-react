const WIDGET_URL=process.env.WIDGET_URL
const TOPIC_URL=process.env.TOPIC_URL

export const findWidgetForTopic= (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const createWidget = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 2, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())


export const deleteWidget = (WidgetId) =>
    fetch(`${WIDGET_URL}/${WidgetId}`, {
        method: "DELETE"
    }).then(response =>response.json())

export const updateWidget = (WidgetId, widget) =>
    fetch(`${WIDGET_URL}/${WidgetId}`, {
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