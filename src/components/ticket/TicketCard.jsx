import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const TicketCard = ({ props }) => {
  const ticketInfo = props.fields
  const ticketId = props.id
  return (
    <div className="p-2">
      <Card style={{ width: '28rem' }} border="danger">
        <Card.Body>
          {ticketInfo.left === 0 ? (
            <Link to={`/tickets/${ticketId}`} disabled>
              <Card.Title>已售完 {ticketId}</Card.Title>
            </Link>
          ) : (
            <Link to={`/tickets/${ticketId}`}>
              <Card.Title>{ticketId}</Card.Title>
            </Link>
          )}
          <Card.Text>ticketType：{ticketInfo.ticketType}</Card.Text>
          <Card.Text>sellPrice：{ticketInfo.sellPrice}</Card.Text>
          <Card.Text>
            quantity：{ticketInfo.quantity} / left：{ticketInfo.left}
          </Card.Text>
          <Card.Text>seller：{ticketInfo.seller}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TicketCard
