import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { userLogin } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import UserTicketPage from './UserTicketPage'
import { message } from 'antd'

const StyledSection = Styled.div`
padding:0px 160px;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
`

const StyleP = Styled.p`
  font-size: 20px;
`

const StyledContentSection = Styled.div`
  padding:0px 160px;
  padding:50px 30px 30px 30px;
`

const toPage = (history, url) => {
  history.push(url)
}

const UserPage = () => {
  const history = useHistory()
  const username = localStorage && localStorage.getItem('username')
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
    userLogin(username)
      .then((res) => {
        setAllEventState({
          error: null,
          data: res,
          loading: false,
        })
        setEventList(res.records[0].fields)
      })
      .catch((err) => {
        setAllEventState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [username])

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
      <StyledSection>
        <StyledContentSection>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <StyleH1>會員資訊</StyleH1>
                <StyleP>username：{eventList && eventList.username}</StyleP>
                <StyleP>email：{eventList && eventList.email}</StyleP>
              </div>
              <div className="col-2">
                <Button
                  type="primary"
                  onClick={() => {
                    localStorage && localStorage.clear()
                    message.success('登出成功！')
                    toPage(history, '/login')
                  }}
                >
                  登出
                </Button>
              </div>
            </div>
          </div>
        </StyledContentSection>
        <hr />
      </StyledSection>
      <UserTicketPage />
    </div>
  )
}

export default UserPage
