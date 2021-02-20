import React, { useState } from 'react'
import Styled from 'styled-components'
import { Card } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { message } from 'antd'
import { addNotify, getNotify, deleteNotify } from '../../utils/api'

const { Meta } = Card
const StyledSection = Styled.div`
  padding:40px 160px;
`

const StyledContentSection = Styled.div`
  padding:20px;
`

const StyledCard = Styled.div`
  text-align:center;
`

const StyledImgSection = Styled.div`
  text-align:center;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
`

const StyledImg = Styled.img`
  width: auto;
  max-height: 300px;
`

const SyledButton = Styled.button`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: white;
  border-color: #ff7a64;
  color:#ff7a64
`

const SyledButton2 = Styled.button`
  width: 140px;
  height: 40px;
  border-radius: 30px;
  background-color: #ff7a64;
  border-color: #ff7a64;
  color:white
`

const get_ = ({ eventInfo, username }) => {
  if (eventInfo.username && eventInfo.username.includes(username)) {
    return true
  } else {
    return false
  }
}

const EventInfoCard = ({ props, ticketInfo }) => {
  const [eventInfo, setEventInfo] = useState(props.fields)
  const username = localStorage && localStorage.getItem('username')
  const [notify, setNotify] = useState(get_({ eventInfo, username }))

  const notifyOn = () => {
    if (username) {
      addNotify({ username: username, events_id: [props.id] })
        .then((res) => {
          message.success('開啟通知成功！')
          setEventInfo({ ...eventInfo, username: [...eventInfo.username, username] })
          setNotify(!notify)
        })
        .catch((err) => {
          message.error('開啟通知失敗，請稍後再試')
        })
    } else {
      message.error('請先登入 才能開啟票券通知！')
    }
  }

  const notifyOff = () => {
    if (username) {
      getNotify({ username: username, event_id: eventInfo.event_id })
        .then((res) => {
          deleteNotify({ id: res.records[0].id })
            .then((res) => {
              message.success('關閉通知成功！')
              setNotify(!notify)
              setEventInfo({ ...eventInfo, username: eventInfo.username.filter((item) => item !== username) })
            })
            .catch((err) => {
              message.error('關閉通知失敗，請稍後再試')
            })
        })
        .catch((err) => {
          message.error('關閉通知失敗，請稍後再試')
        })
    } else {
      message.error('請先登入 才能開啟票券通知！')
    }
  }

  return (
    <div>
      <StyledImgSection>
        <StyledImg src={eventInfo.img} />
      </StyledImgSection>
      <StyledSection>
        <StyleH1>{eventInfo.event}</StyleH1>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <p>
                {eventInfo.datetime}．{eventInfo.weekday}．{eventInfo.time}
              </p>
              <p>
                {eventInfo.city}．{eventInfo.venue}
              </p>
              <p>{eventInfo.event_fb}</p>
              <p>{eventInfo.link_attendees}</p>
            </div>
            <div className="col-4">
              <StyledCard>
                <Card style={{ width: 240, hidth: 200 }}>
                  <Meta
                    title="票券銷售狀態"
                    description={[
                      <div>
                        <hr />
                        <p>{ticketInfo && ticketInfo.unsold.length > 0 ? ticketInfo.unsold.length : 0} 張票銷售中</p>
                        <p>{ticketInfo && ticketInfo.sold.length ? ticketInfo.sold.length : 0} 張票已售出</p>
                        <p>{eventInfo.username ? eventInfo.username.length : 0} 人想要購買票</p>
                        {notify ? (
                          <SyledButton2 onClick={notifyOff}>
                            <StarOutlined className="p-1" />
                            關閉票券通知
                          </SyledButton2>
                        ) : (
                          <SyledButton onClick={notifyOn}>
                            <StarOutlined className="p-1" />
                            開啟票券通知
                          </SyledButton>
                        )}
                      </div>,
                    ]}
                  />
                </Card>
              </StyledCard>
            </div>
          </div>
        </div>
        <hr />
        <StyledContentSection>
          <StyleH1>活動介紹</StyleH1>
          <div
            dangerouslySetInnerHTML={{
              __html: eventInfo.content,
            }}
          ></div>
        </StyledContentSection>
      </StyledSection>
    </div>
  )
}

export default EventInfoCard
