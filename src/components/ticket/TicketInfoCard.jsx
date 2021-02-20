import React from 'react'
import { Card } from 'antd'
const { Meta } = Card

const TicketInfoCard = ({ props }) => {
  const ticketInfo = props.fields
  return (
    <Card style={{ width: 240, hidth: 200 }}>
      <Meta
        title={ticketInfo.event}
        description={[
          <div>
            <p>票種：{ticketInfo.ticketType}</p>
            <p>票價：{ticketInfo.sellPrice}</p>
            <p>數量： {ticketInfo.quantity}</p>
            <p>賣家：{ticketInfo.seller}</p>
          </div>,
        ]}
      />
    </Card>
  )
}

export default TicketInfoCard
