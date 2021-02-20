import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import AllEvents from '../components/event/AllEvents'
import { Skeleton } from 'antd'
import { getSearchResult } from '../utils/api'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'

const StyledSection = Styled.div`
  padding:40px 160px;
`
const StyledContentSection = Styled.div`
  padding:20px 0px;
`
const StyleH1 = Styled.h1`
  font-size: 34px;
`

const StyleH2 = Styled.h2`
  font-size: 26px;
`

const SearchResult = (props) => {
  const history = useHistory()
  const location = useLocation()
  const query = location.state.query
  const searchData = location.state.searchData
  const [eventList, setEventList] = useState()
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
    getSearchResult(query)
      .then((res) => {
        setUiState({
          error: null,
          data: res,
          loading: false,
        })
        // console.log(res)
        setEventList(res.records)
      })
      .catch((err) => {
        setUiState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [query])
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
    <StyledSection>
      <StyleH1>搜尋結果</StyleH1>
      <StyleH2>共有 {eventList && eventList.length} 個搜尋結果</StyleH2>
      <StyledContentSection className="container">
        <div className="row">
          <div className="col-10">
            <p>
              活動期間：{searchData.before}～{searchData.after}
            </p>
            <p>活動縣市：{searchData.place}</p>
            <p>活動名稱：{searchData.event}</p>
          </div>
          <div className="col-2">
            <Button
              type="primary"
              onClick={() => {
                history.goBack()
              }}
            >
              回上一頁
            </Button>
          </div>
        </div>
      </StyledContentSection>
      <div>
        <AllEvents eventList={eventList} />
      </div>
    </StyledSection>
  )
}

export default SearchResult
