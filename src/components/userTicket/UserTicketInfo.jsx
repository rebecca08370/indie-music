import React from 'react'

const UserTicketInfo = ({ props }) => {
  const ticketInfo = props.fields
  return (
    <div>
      <h2>檢視中</h2>
      <p>票券 id：{ticketInfo.ticket_id}</p>
      <p>票券種類：{ticketInfo.ticketType}</p>
      <p>票價：{ticketInfo.sellPrice}</p>
      <p>
        數量：
        {ticketInfo.quantity}
      </p>
      <p>賣家：{ticketInfo.seller}</p>
      <p>買家：{ticketInfo.buyer}</p>
    </div>
  )
}

export default UserTicketInfo
