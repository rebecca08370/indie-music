import React, { useState, useEffect } from 'react'
import { getTicketInfo } from '../utils/api'
import { useParams, useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { Button } from 'react-bootstrap'
import Styled from 'styled-components'
import BuyTicketEdit from '../components/userTicket/BuyTicketEdit'

const StyledSection = Styled.div`
  padding:70px 200px;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
`

const EditTicketPage2 = () => {
  const history = useHistory()
  const { ticketId } = useParams()
  const [ticketInfo, setTicketInfo] = useState()
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
    getTicketInfo(ticketId)
      .then((res) => {
        setUiState({
          error: null,
          data: res,
          loading: false,
        })
        setTicketInfo(res)
      })
      .catch((err) => {
        setUiState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [ticketId])

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
      <StyleH1>購買票券編輯頁</StyleH1>
      {ticketInfo && <BuyTicketEdit props={ticketInfo} key={ticketInfo.id} />}
      <Button
        size="sm"
        variant="light"
        onClick={() => {
          history.goBack()
        }}
      >
        回上一頁
      </Button>
    </StyledSection>
  )
}

export default EditTicketPage2
