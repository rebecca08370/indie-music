import React, { useState, useEffect } from 'react'
import { Comment, List } from 'antd'
import { getComments } from '../..//utils/api'
import { Skeleton } from 'antd'
import Styled from 'styled-components'

const StyledSection = Styled.div`
  padding:20px 0px;
`

const Comments = () => {
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
    getComments()
      .then((res) => {
        setUiState({
          error: null,
          data: res,
          loading: false,
        })
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
  }, [])

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
      <List
        className="comment-list"
        header={`${eventList && eventList.length} replies`}
        itemLayout="horizontal"
        dataSource={eventList}
        renderItem={(item) => (
          <li>
            <Comment
              author={item.fields.username}
              avatar="https://www.pinclipart.com/picdir/middle/148-1486972_mystery-man-avatar-circle-clipart.png"
              content={item.fields.comments}
              datetime={item.fields.created_time}
            />
          </li>
        )}
      />
    </StyledSection>
  )
}

export default Comments
