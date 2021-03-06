import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { getTodayEvent } from '../utils/api'
import EventLoadMore from '../components/event/EventLoadMore'

const StyledCenter = Styled.div`
  text-align: center;
  margin:20px 0px;
`

const WeekEventPage = () => {
  const [eventList, setEventList] = useState()

  const addDays = (now, add) => {
    now.setDate(now.getDate() + add)
    return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
  }

  const date = new Date()
  const dateShow = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
  const before = addDays(date, -1)
  const after = addDays(date, 8)

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
    getTodayEvent(before, after)
      .then((res) => {
        setAllEventState({
          error: null,
          data: res,
          loading: false,
        })
        setEventList(res.records)
      })
      .catch((err) => {
        setAllEventState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [after, before])

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
    <div>
      <div>
        <StyledCenter>
          {dateShow} ~ {after}：本週活動有{eventList && eventList.length}個
        </StyledCenter>

        {eventList && <EventLoadMore props={eventList} border="danger" />}

        {/* {eventList &&
          eventList.map((props) => {
            if (props) {
              return <EventCard props={props} key={props.id}></EventCard>
            }
            return null
          })} */}
      </div>
    </div>
  )
}

export default WeekEventPage
