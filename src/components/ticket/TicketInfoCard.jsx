import React from 'react'
import { Button } from 'react-bootstrap'

const TicketInfoCard = ({ props }) => {
  const ticketInfo = props.fields
  const ticketId = props.id
  return (
    <div>
      <h2>id：{ticketId}</h2>
      <p>ticket_id：{ticketInfo.ticket_id}</p>
      <p>ticket_type：{ticketInfo.ticketType}</p>
      <p>price：{ticketInfo.sellPrice}</p>
      <p>
        quantity：
        <Button size="sm" disabled>
          -
        </Button>
        {ticketInfo.quantity}
        <Button size="sm" disabled>
          +
        </Button>
      </p>
      <p>seller：{ticketInfo.seller}</p>
    </div>
  )
}

export default TicketInfoCard
