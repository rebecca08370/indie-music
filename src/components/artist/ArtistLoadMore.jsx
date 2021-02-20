import React, { useState } from 'react'
import { List, Skeleton } from 'antd'
import ArtistCard from '../artist/ArtistCard'
import Styled from 'styled-components'

const SyledButton = Styled.button`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: white;
  border-color: #ff7a64;
`

const ArtistLoadMore = ({ props, border }) => {
  const [count, setCount] = useState(4)
  const [uiState, setUiState] = useState({
    initLoading: false,
    loading: false,
    data: props.slice(0, 4),
    list: props.slice(0, 4),
  })

  const initLoading = uiState.initLoading
  const loading = uiState.loading
  const list = uiState.list

  const onLoadMore = () => {
    if (props.length - 4 < count) {
      setUiState({
        list: uiState.data.concat(props.slice(count, props.length)),
        loading: true,
        data: list,
      })
    } else {
      setUiState({
        list: uiState.data.concat(props.slice(count, count + 4)),
        loading: false,
        data: uiState.data.concat(props.slice(count, count + 4)),
      })
    }
    setCount(count + 4)
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
        grid={{ gutter: 16, column: 4 }}
        loading={initLoading}
        itemLayout="vertical"
        loadMore={loadMore}
        dataSource={list && list}
        renderItem={(item) => (
          <List.Item>
            <Skeleton loading={item.loading} active>
              <ArtistCard props={item} key={item.id} border={border}></ArtistCard>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ArtistLoadMore
