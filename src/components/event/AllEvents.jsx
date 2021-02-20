import React from 'react'
import { List } from 'antd'
import EventCard from './EventCard'

const AllEvents = ({ eventList, border }) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 1,
        lg: 2,
        xl: 3,
        xxl: 3,
      }}
      itemLayout="vertical"
      size="large"
      pagination={{ defaultPageSize: 9, pageSizeOptions: [9, 18, 45] }}
      dataSource={eventList && eventList}
      renderItem={(item) => (
        <List.Item>
          <EventCard props={item} key={item.id} border={border}></EventCard>
        </List.Item>
      )}
    />
  )
}

export default AllEvents
