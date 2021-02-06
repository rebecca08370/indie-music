import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import EventInfo from '../../components/event/EventInfo'
import { getEventInfo } from '../../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'

const StyledPage = Styled.div`
  margin:4em;
`

const EventPage = () => {
  const { eventId } = useParams()
  const [input, setInput] = useState('')
  const [eventListDefault, setEventListDefault] = useState()
  const [eventList, setEventList] = useState()

  const [allEventState, setAllEventState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setAllEventState({
      error: null,
      data: null,
      loading: true,
    })
    getEventInfo(eventId)
      .then((res) => {
        setAllEventState({
          error: null,
          data: res,
          loading: false,
        })
        console.log(res)
        setEventList(res)
        setEventListDefault(res)
      })
      .catch((err) => {
        setAllEventState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [eventId])

  if (allEventState.error) {
    return <h1>Not found</h1>
  }
  if (allEventState.loading || !allEventState.data) {
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
        {eventList && <EventInfo props={eventList} key={eventList.id} />}
      </div>
    </StyledPage>
  )
}

export default EventPage
