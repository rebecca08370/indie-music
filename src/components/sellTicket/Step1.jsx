import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import { getEventsInfo } from '../../utils/api'
import { Skeleton } from 'antd'

const { Option } = Select

const Step1 = ({ props, onLogin }) => {
  const [authData, setAuthData] = useState({
    eventId: null,
    event: null,
    datetime: null,
  })
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

  useEffect(() => {
    onLogin({
      authData,
    })
  }, [authData])
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
    <div className="p-3">
      <h4 className="p-1">搜尋欲販售票券的活動名稱</h4>

      <Select
        required
        showSearch
        style={{ width: 400 }}
        placeholder="選擇活動 or 搜尋活動"
        optionFilterProp="children"
        onChange={(value, { props }) => {
          setAuthData({ ...authData, eventId: value, event: props.event, datetime: props.datetime })
        }}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {eventList &&
          eventList.map((props) => {
            if (props) {
              return (
                <Option value={props.fields.event_id} props={props.fields} key={props.id}>
                  {props.fields.event}
                </Option>
              )
            }
            return null
          })}
      </Select>
    </div>
  )
}

export default Step1
