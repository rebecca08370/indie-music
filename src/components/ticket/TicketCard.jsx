import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const SyledButton = Styled.button`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background-color: #ff7a64;
  color:white;
  font-size: 18px;
`
const SyledButton2 = Styled.button`
  width: 100px;
  height: 40px;
  border-radius: 30px;
  background-color: #8e8e93;
  color:white;
  font-size: 18px;
`

const TicketCard = ({ props }) => {
  const ticketInfo = props.fields
  const ticketId = props.id
  return (
    <div className="p-2">
      <Card style={{ width: '54rem' }} border="secondary">
        <Card.Body>
          <div className="container">
            <div className="row">
              <div className="col-2">賣家：{ticketInfo.seller}</div>
              <div className="col-2">{ticketInfo.ticketType}</div>
              <div className="col-2">$ {ticketInfo.sellPrice}</div>
              <div className="col-2">{ticketInfo.quantity} 張</div>
              <div className="col-2">上架時間：{ticketInfo.created}</div>
              <div className="col-2">
                {ticketInfo.left === 0 ? (
                  <Link to={`/tickets/${ticketId}`} disabled>
                    <SyledButton2>已售完</SyledButton2>
                  </Link>
                ) : (
                  <Link to={`/tickets/${ticketId}`}>
                    <SyledButton>我要購買</SyledButton>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TicketCard
