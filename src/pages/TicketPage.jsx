import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import TicketInfoCard from '../components/ticket/TicketInfoCard'
import { getTicketInfo, updateTicketInfo } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { Modal } from 'antd'
import { Button } from 'antd'
import { message } from 'antd'

const StyledSection = Styled.div`
  padding:70px 300px;
`

const StyledButtonSection = Styled.div`
  padding:40px 0px;
`
const StyleH1 = Styled.h1`
  font-size: 34px;
  padding: 0px 0px 20px 0px;
`
const TicketPage = () => {
  const { ticketId } = useParams()
  const history = useHistory()
  const [artistInfo, setArtistInfo] = useState()
  const [artistInfoState, setArtistInfoState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  const [isModalVisible, setIsModalVisible] = useState(false)

  const handleOk = () => {
    const username = localStorage && localStorage.getItem('username')
    setIsModalVisible(false)
    updateTicketInfo(artistInfo.id, artistInfo.fields.quantity, username)
      .then((res) => {
        message.success('購買成功！')
        history.push('/')
      })
      .catch((err) => {
        console.error(err)
        message.error('購買失敗請稍後再嘗試！')
      })
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  useEffect(() => {
    setArtistInfoState({
      error: null,
      data: null,
      loading: true,
    })
    getTicketInfo(ticketId)
      .then((res) => {
        setArtistInfoState({
          error: null,
          data: res,
          loading: false,
        })
        setArtistInfo(res)
      })
      .catch((err) => {
        setArtistInfoState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [ticketId])

  if (artistInfoState.error) {
    return <h1>Not found</h1>
  }
  if (artistInfoState.loading || !artistInfoState.data) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  const onClickButton = () => {
    const username = localStorage && localStorage.getItem('username')
    if (username) {
      setIsModalVisible(true)
    } else {
      message.warning('需要先登入才能購票')
      history.push('/login')
    }
  }

  return (
    <StyledSection>
      <div>
        <StyleH1>票券資訊</StyleH1>
        {artistInfo && <TicketInfoCard props={artistInfo} key={artistInfo.id} />}
        <StyledButtonSection>
          <Button
            className="m-2"
            onClick={() => {
              history.goBack()
            }}
          >
            回上一頁
          </Button>
          <Button
            type="danger"
            onClick={() => {
              onClickButton()
            }}
          >
            購買
          </Button>
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={() => {
              handleOk()
            }}
            onCancel={handleCancel}
          >
            <p>確定購買此票券嗎？</p>
          </Modal>
        </StyledButtonSection>
      </div>
    </StyledSection>
  )
}

export default TicketPage
