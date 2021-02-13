import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import EventInfoCard from '../components/event/EventInfoCard'
import TicketCard from '../components/ticket/TicketCard'
import { getEventInfo } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'

const StyledPage = Styled.div`
  margin:4em;
  padding-bottom:4em
`

const transferJson = (resTicket) => {
  const final = { sold: [], unsold: [] }
  for (let step = 0; step < resTicket['ticketType'].length; step++) {
    if (resTicket.left[step] === 0) {
      final.sold.push({
        ticket_id: resTicket.ticket_id[step],
        ticketType: resTicket.ticketType[step],
        sellPrice: resTicket.sellPrice[step],
        quantity: resTicket.quantity[step],
        seller: resTicket.seller[step],
        sold: resTicket.sold[step],
        left: resTicket.left[step],
      })
    } else {
      final.unsold.push({
        ticket_id: resTicket.ticket_id[step],
        ticketType: resTicket.ticketType[step],
        sellPrice: resTicket.sellPrice[step],
        quantity: resTicket.quantity[step],
        seller: resTicket.seller[step],
        sold: resTicket.sold[step],
        left: resTicket.left[step],
      })
    }
  }
  return final
}

function EventPage() {
  const { eventId } = useParams()
  const [eventInfo, setEventInfo] = useState()
  const [ticketInfo, setTicketInfo] = useState()
  const [eventInfoState, setEventInfoState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setEventInfoState({
      error: null,
      data: null,
      loading: true,
    })
    getEventInfo(eventId)
      .then((res) => {
        setEventInfoState({
          error: null,
          data: res,
          loading: false,
        })
        if (res.fields.ticket_id) {
          setEventInfo(res)
          const resTicket = {
            ticket_id: res.fields.ticket_id,
            ticketType: res.fields.ticketType,
            sellPrice: res.fields.sellPrice,
            quantity: res.fields.quantity,
            seller: res.fields.seller,
            sold: res.fields.sold,
            left: res.fields.left,
          }
          const final = transferJson(resTicket)
          setTicketInfo(final)
        } else {
          res['fields']['username'] = []
          setEventInfo(res)
        }
      })
      .catch((err) => {
        setEventInfoState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [eventId])

  if (eventInfoState.error) {
    return <h1>Not found</h1>
  }
  if (eventInfoState.loading || !eventInfoState.data) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  return (
    <StyledPage>
      <div>
        <h1>EventPage</h1>
        <div>
          <p>{ticketInfo && ticketInfo.unsold.length > 0 ? ticketInfo.unsold.length : 0}張票銷售中</p>
          <p>{ticketInfo && ticketInfo.sold.length ? ticketInfo.sold.length : 0}張票已售出</p>
          <p>{eventInfo ? eventInfo.fields.username.length : 0}人想要購買票</p>
        </div>
        {eventInfo && <EventInfoCard props={eventInfo} key={eventInfo.id} />}
        <div>
          <h2>可購買票券：</h2>
          {ticketInfo ? (
            ticketInfo.unsold.map((props) => {
              if (props) {
                return <TicketCard props={props} key={props.ticket_id}></TicketCard>
              }
              return null
            })
          ) : (
            <h3>目前沒有可購買的票券</h3>
          )}
        </div>
        <div>
          <h2>已售出票券：</h2>
          {ticketInfo ? (
            ticketInfo.sold.map((props) => {
              if (props) {
                return <TicketCard props={props} key={props.ticket_id}></TicketCard>
              }
              return null
            })
          ) : (
            <h3>目前沒有已售出票券的票券</h3>
          )}
        </div>
      </div>
    </StyledPage>
  )
}

export default EventPage
