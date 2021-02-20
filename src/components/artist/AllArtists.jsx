import React from 'react'
import { List } from 'antd'
import ArtistCard from './ArtistCard'

const AllArtists = ({ artistList }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 4,
        xl: 5,
        xxl: 5,
      }}
      itemLayout="vertical"
      size="large"
      pagination={{}}
      dataSource={artistList && artistList}
      renderItem={(item) => (
        <List.Item>
          <ArtistCard props={item} key={item.id}></ArtistCard>
        </List.Item>
      )}
    />
  )
}

export default AllArtists
