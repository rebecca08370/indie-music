import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { getEventsInfo } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import RecommendEvent from '../components/event/RecommendEvent'

const StyledPage = Styled.div`
  margin:4em;
`

const StyledButtonGroup = Styled.div`
  padding:20px 0px
`

const StyledRecommend = Styled.div`
padding:20px 0px
`

const toPage = (history, url) => {
  history.push(url)
}

const HomePage = () => {
  const history = useHistory()
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
    getEventsInfo()
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
  }, [])

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
      <h1>HomePage</h1>
      <StyledButtonGroup>
        <Button variant="primary" className="mx-1" onClick={() => toPage(history, '/')}>
          Home
        </Button>
        <Button variant="primary" className="mx-1" onClick={() => toPage(history, '/events')}>
          所有活動
        </Button>
        <Button variant="primary" className="mx-1" onClick={() => toPage(history, '/artists')}>
          所有演出者
        </Button>
        <Button variant="primary" className="mx-1" onClick={() => toPage(history, '/todayevent')}>
          今日活動
        </Button>
        <Button variant="primary" className="mx-1" onClick={() => toPage(history, '/weekevent')}>
          本週活動
        </Button>
      </StyledButtonGroup>
      <StyledRecommend>
        <h2>推薦活動</h2>
        {eventList &&
          eventList.slice(0, 3).map((props) => {
            return <RecommendEvent props={props} key={props.id}></RecommendEvent>
          })}
      </StyledRecommend>
    </StyledPage>
  )
}

export default HomePage
