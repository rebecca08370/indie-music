import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { getArtistsInfo } from '../utils/api'
import ArtistLoadMore from '../components/artist/ArtistLoadMore'

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

const RecommendArtistPage = () => {
  const [artistList, setArtistList] = useState()

  const [allArtistState, setAllArtistState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setAllArtistState({
      error: null,
      data: null,
      loading: true,
    })
    getArtistsInfo()
      .then((res) => {
        setAllArtistState({
          error: null,
          data: res,
          loading: false,
        })
        setArtistList(res.records.sort(() => Math.random() - 0.5))
      })
      .catch((err) => {
        setAllArtistState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [])

  if (allArtistState.error) {
    return <h1>Not found</h1>
  }
  if (allArtistState.loading || !allArtistState.data) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  return (
    <StyledSection>
      <StyledContentSection>
        <StyleH1>推薦樂團</StyleH1>
        {artistList && <ArtistLoadMore props={artistList.slice(0, 8)} border="warning" />}
      </StyledContentSection>
    </StyledSection>
  )
}

export default RecommendArtistPage
