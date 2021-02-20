import React, { useState } from 'react'
import { List, Skeleton } from 'antd'
import EventCard from './EventCard'
import Styled from 'styled-components'

const SyledButton = Styled.button`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: white;
  border-color: #ff7a64;
`

const EventLoadMore = ({ props, border }) => {
  const [count, setCount] = useState(3)
  const [uiState, setUiState] = useState({
    initLoading: false,
    loading: false,
    data: props.slice(0, 3),
    list: props.slice(0, 3),
  })

  const initLoading = uiState.initLoading
  const loading = uiState.loading
  const list = uiState.list

  const onLoadMore = () => {
    if (props.length - 3 < count) {
      setUiState({
        list: uiState.data.concat(props.slice(count, props.length)),
        loading: true,
        data: list,
      })
    } else {
      setUiState({
        list: uiState.data.concat(props.slice(count, count + 3)),
        loading: false,
        data: uiState.data.concat(props.slice(count, count + 3)),
      })
    }
    setCount(count + 3)
  }

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <SyledButton
          onClick={() => {
            onLoadMore()
          }}
        >
          查看更多
        </SyledButton>
      </div>
    ) : null
  return (
    <div>
      <List
        grid={{ gutter: 16, column: 3 }}
        loading={initLoading}
        itemLayout="vertical"
        loadMore={loadMore}
        dataSource={list && list}
        renderItem={(item) => (
          <List.Item>
            <Skeleton loading={item.loading} active>
              <EventCard props={item} key={item.id} border={border}></EventCard>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
}

export default EventLoadMore
