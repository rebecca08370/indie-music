import React from 'react'

const EventInfoCard = ({ props }) => {
  const eventInfo = props.fields
  const eventId = props.id
  return (
    <div>
      <h2>活動id：{eventId}</h2>
      <p>活動id：{eventInfo.event_id}</p>
      <p>event：{eventInfo.event}</p>
      <p>datetime：{eventInfo.datetime}</p>
      <p>weekday：{eventInfo.weekday}</p>
      <p>like：{eventInfo.like}</p>
      <p>event_url：{eventInfo.event_url}</p>
      <p>content：{eventInfo.content}</p>
    </div>
  )
}

export default EventInfoCard
