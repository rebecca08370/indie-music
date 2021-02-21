import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import EventInfoCard from '../components/event/EventInfoCard'
import TicketCard from '../components/ticket/TicketCard'
import { getEventInfo, getTicketInfo2 } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const StyledSection = Styled.div`
  padding:0px 160px;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
`

const StyleH2 = Styled.h2`
  font-size: 26px;
`

const StyledContentSection = Styled.div`
  padding:30px;
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
  const history = useHistory()
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
    <div>
      {eventInfo && <EventInfoCard props={eventInfo} key={eventInfo.id} ticketInfo={ticketInfo} />}

      <StyledSection className="container">
        <Button
          size="sm"
          onClick={() => {
            history.goBack()
          }}
        >
          回上一頁
        </Button>
      </StyledSection>
      <StyledSection>
        <hr />
        <StyledContentSection>
          <StyleH1>可購買票券：</StyleH1>
          {ticketInfo && ticketInfo['unsold'].length !== 0 ? (
            ticketInfo.unsold.map((props) => {
              if (props) {
                return <TicketCard props={props} key={props.ticket_id}></TicketCard>
              }
              return null
            })
          ) : (
            <StyleH2>目前沒有可購買的票券</StyleH2>
          )}
        </StyledContentSection>
        <hr />
      </StyledSection>
      <StyledSection>
        <StyledContentSection>
          <StyleH1>已售出票券：</StyleH1>
          {ticketInfo && ticketInfo['sold'].length !== 0 ? (
            ticketInfo.sold.map((props) => {
              if (props) {
                return <TicketCard props={props} key={props.id}></TicketCard>
              }
              return null
            })
          ) : (
            <StyleH2>目前沒有已售出票券的票券</StyleH2>
          )}
        </StyledContentSection>
        <hr />
        <StyledContentSection></StyledContentSection>
      </StyledSection>
    </div>
  )
}

export default EventPage
