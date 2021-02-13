import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import EventInfoCard from '../components/event/EventInfoCard'
import TicketCard from '../components/ticket/TicketCard'
import { getEventInfo, getTicketInfo2 } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'

const StyledPage = Styled.div`
  margin:4em;
  padding-bottom:4em
`

const transferJson = (resTicket) => {
  const len = resTicket.length
  const final = { sold: [], unsold: [] }
  for (let step = 0; step < len; step++) {
    if (resTicket[step].fields.sold === 0) {
      final.unsold.push(resTicket[step])
    } else {
      final.sold.push(resTicket[step])
    }
  }
  return final
}

const EventPage = () => {
  const { eventId } = useParams()
  const [eventInfo, setEventInfo] = useState()
  const [ticketInfo, setTicketInfo] = useState()
  const [uiState, setUiState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setUiState({
      error: null,
      data: null,
      loading: true,
    })
    getEventInfo(eventId)
      .then((res) => {
        setEventInfo(res)
        getTicketInfo2(res.fields.event_id)
          .then((res) => {
            setUiState({
              error: null,
              data: res,
              loading: false,
            })
            const final = transferJson(res.records)
            setTicketInfo(final)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        setUiState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [eventId])

  if (uiState.error) {
    return <h1>Not found</h1>
  }
  if (uiState.loading || !uiState.data) {
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
          <p>{eventInfo.fields.username ? eventInfo.fields.username.length : 0}人想要購買票</p>
        </div>
        {eventInfo && <EventInfoCard props={eventInfo} key={eventInfo.id} />}
        <div>
          <h2>可購買票券：</h2>
          {ticketInfo && ticketInfo['unsold'].length !== 0 ? (
            ticketInfo.unsold.map((props) => {
              if (props) {
                return <TicketCard props={props} key={props.ticket_id}></TicketCard>
              }
              return null
            })
          ) : (
            <h4>目前沒有可購買的票券</h4>
          )}
        </div>
        <div>
          <h2>已售出票券：</h2>
          {ticketInfo && ticketInfo['sold'].length !== 0 ? (
            ticketInfo.sold.map((props) => {
              if (props) {
                return <TicketCard props={props} key={props.ticket_id}></TicketCard>
              }
              return null
            })
          ) : (
            <h4>目前沒有已售出票券的票券</h4>
          )}
        </div>
      </div>
    </StyledPage>
  )
}

export default EventPage
