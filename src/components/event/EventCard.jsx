import React from 'react'
import { Link } from 'react-router-dom'
import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'

const { Meta } = Card

const EventCard = ({ props, border }) => {
  const eventInfo = props.fields
  const eventId = props.id
  return (
    <div>
      <Link to={`/events/${eventId}`}>
        <Card hoverable style={{ width: 280, hidth: 260 }} cover={<img alt="example" src={eventInfo.img} />}>
          <Meta
            title={eventInfo.event}
            description={[
              <div>
                <p>
                  {eventInfo.datetime}．{eventInfo.weekday}．{eventInfo.time}
                </p>
                <p>
                  {eventInfo.city}．{eventInfo.venue}
                </p>
                <p>
                  <StarOutlined className="p-2" />
                  {eventInfo.like}
                </p>
              </div>,
            ]}
          />
        </Card>
      </Link>
    </div>
  )
}

export default EventCard
