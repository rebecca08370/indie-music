import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { getEventsInfo } from '../utils/api'
import AllEvents from '../components/event/AllEvents'
import banner from '../assets/banner.png'

const StyledSection = Styled.div`
  padding:70px 160px;
`

const StyleBg = Styled.div`
  background-image: url(${banner});
`

const StyledSearch = Styled.div`
text-align: center;
padding:100px 0px;
height: 400px;
margin: 0px 0px 40px 0px;
`

const StyledP = Styled.p`
  text-align: center;
  margin:30px 0px;
  font-size: 26px;
  color: white;
`

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
  }
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={'搜尋活動名稱'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

const EventsPage = () => {
  const [input, setInput] = useState('')
  const [eventListDefault, setEventListDefault] = useState()
  const [eventList, setEventList] = useState()

  const updateInput = async (input) => {
    const filtered = eventListDefault.filter((user) => {
      return user.fields.event.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setEventList(filtered)
  }

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
        setEventListDefault(res.records)
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
    <div>
      <div>
        <StyleBg>
          <StyledSearch>
            <StyledP>
              總共有 {eventListDefault && eventListDefault.length} 個活動，搜尋結果有 {eventList && eventList.length}{' '}
              個活動
            </StyledP>
            <SearchBar input={input} onChange={updateInput} />
          </StyledSearch>
        </StyleBg>
        <StyledSection>
          <AllEvents eventList={eventList} border="info" />
        </StyledSection>
      </div>
    </div>
  )
}

export default EventsPage
