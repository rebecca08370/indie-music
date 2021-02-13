import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { StarOutlined } from '@ant-design/icons'
import Styled from 'styled-components'

const StyledPLike = Styled.div`
  display:flex
`

const RecommendEvent = ({ props }) => {
  const eventInfo = props.fields
  const eventId = props.id
  return (
    <div className="p-2">
      <Card style={{ width: '28rem' }} border="secondary">
        <Card.Body>
          <Link to={`/events/${eventId}`}>
            <Card.Title>{eventInfo.event}</Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            {eventInfo.datetime} , {eventInfo.venue}
          </Card.Subtitle>
          <StyledPLike>
            <StarOutlined className="p-1" />
            <Card.Text>
              Like：
              {eventInfo.like}
            </Card.Text>
          </StyledPLike>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RecommendEvent
