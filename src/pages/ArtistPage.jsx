import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import ArtistInfoCard from '../components/artist/ArtistInfoCard'
import { getArtistInfo, getArtistEvents } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import EventLoadMore from '../components/event/EventLoadMore'
import RecommendArtistPage from './RecommendArtistPage'

const StyledSection = Styled.div`
  padding:0px 160px 100px 160px;
`
const StyleH1 = Styled.h1`
  font-size: 34px;
  margin: 0px 0px 20px 0px;
`
const StyledContentSection = Styled.div`
  padding:0px 20px;
`

const ArtistPage = () => {
  const { artistId } = useParams()
  const [artistInfo, setArtistInfo] = useState()
  const [artistEvent, setArtistEvent] = useState()
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
    getArtistInfo(artistId)
      .then((res) => {
        setArtistInfo(res)
        getArtistEvents(res && res.fields.artist_id)
          .then((res) => {
            setUiState({
              error: null,
              data: res,
              loading: false,
            })
            setArtistEvent(res.records)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        setUiState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [artistId])

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
    <div>
      <div>{artistInfo && <ArtistInfoCard props={artistInfo} key={artistInfo.id} />}</div>
      <StyledSection>
        <StyledContentSection>
          <StyleH1>近期活動</StyleH1>
          {artistEvent && <EventLoadMore props={artistEvent} border="warning" key={artistEvent.event_id} />}
        </StyledContentSection>
      </StyledSection>
      <RecommendArtistPage />
    </div>
  )
}

export default ArtistPage
