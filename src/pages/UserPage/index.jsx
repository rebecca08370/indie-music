import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { userLogin } from '../../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const StyledPage = Styled.div`
  margin:4em;
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
    <StyledPage>
      <h1>UserPage</h1>
      <p>username：{eventList && eventList.username}</p>
      <p>email：{eventList && eventList.email}</p>
      <p>description：{eventList && eventList.description}</p>
      <Button
        variant="danger"
        className="mx-1"
        onClick={() => {
          localStorage && localStorage.clear()
          alert('登出成功！')
          toPage(history, '/login')
        }}
      >
        登出
      </Button>
    </StyledPage>
  )
}

export default UserPage
