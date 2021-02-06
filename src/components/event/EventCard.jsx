import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventCard = ({ props }) => {
  const eventInfo = props.fields
  const eventId = props.id
  return (
    <div className="p-2">
      <Card style={{ width: '28rem' }} border="danger">
        <Card.Body>
          <Link to={`/events/${eventId}`}>
            <Card.Title>{eventInfo.event}</Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            {eventInfo.datetime} , {eventInfo.venue}
          </Card.Subtitle>
          <Card.Text>
            演出者：
            {eventInfo.show_attendees.reduce((prev, curr) => [prev, ', ', curr])}
          </Card.Text>
          <Card.Text>
            Like：
            {eventInfo.like}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default EventCard
