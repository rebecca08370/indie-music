import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { getEventsInfo } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import Comments from '../components/comments/Comments'
import WeekEventPage from './WeekEventPage'
import TodayEventPage from './TodayEventPage'
import SearchBar from '../components/search/SearchBar'
import EventLoadMore from '../components/event/EventLoadMore'
import banner from '../assets/banner.png'
import recommend_bg from '../assets/recommend_bg.png'

const StyledPage = Styled.div`
`

const SyledButton = Styled.button`
  width: 160px;
  height: 40px;
  border-radius: 30px;
  background-color: #ff7a64;
  border-color:transparent;
  color: white;
`

const StyledSearchSection = Styled.div`
  height: 400px;
  padding:60px 0px;
  text-align: center;
  background-image: url(${banner});
`

const StyledSearchSectionH1 = Styled.h1`
  text-align: center;
  margin:30px 0px;
  color: white;
  font-size: 40px;
`

const StyledSection = Styled.div`
  padding:40px 0px;
  margin:40px 160px;
`

const StyledCommentBg = Styled.div`
  background-image: url(${recommend_bg});
`

const StyledH1 = Styled.h1`
  text-align: center;
  margin:30px 0px;
  font-size: 32px;
`

const StyledButtonGroup = Styled.div`
  text-align: center;
  padding:0px 10px;
`

const HomePage = () => {
  const [eventList, setEventList] = useState()
  const [status, setStatus] = useState('today')
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
      <StyledSearchSection>
        <StyledSearchSectionH1>讓您與喜愛的樂團不再錯過！</StyledSearchSectionH1>
        <SearchBar />
      </StyledSearchSection>
      <StyledSection>
        <StyledH1>活動列表</StyledH1>
        <StyledButtonGroup>
          <SyledButton
            variant="success"
            className="mx-1"
            onClick={() => {
              setStatus('today')
            }}
          >
            今日活動
          </SyledButton>
          <SyledButton
            variant="success"
            className="mx-1"
            onClick={() => {
              setStatus('thisweek')
            }}
          >
            本週活動
          </SyledButton>
        </StyledButtonGroup>
        {status === 'today' ? <TodayEventPage /> : <WeekEventPage />}
      </StyledSection>

      <StyledSection>
        <StyledH1>推薦活動</StyledH1>
        {eventList && <EventLoadMore props={eventList.slice(0, 9)} border="warning" />}
      </StyledSection>
      <StyledCommentBg>
        <StyledSection>
          <StyledH1>使用者推薦</StyledH1>
          <Comments />
        </StyledSection>
      </StyledCommentBg>
    </StyledPage>
  )
}

export default HomePage
