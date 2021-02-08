import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import EventInfoCard from '../../components/event/EventInfoCard'
import { getEventInfo } from '../../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'

const StyledPage = Styled.div`
  margin:4em;
`

const EventPage = () => {
  const { eventId } = useParams()
  const [eventInfo, setEventInfo] = useState()

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
        setEventInfo(res)
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
        {eventInfo && <EventInfoCard props={eventInfo} key={eventInfo.id} />}
      </div>
    </StyledPage>
  )
}

export default EventPage
