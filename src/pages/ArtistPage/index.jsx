import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import ArtistInfoCard from '../../components/artist/ArtistInfoCard'
import { getArtistInfo } from '../../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'

const StyledPage = Styled.div`
  margin:4em;
`

const ArtistPage = () => {
  const { artistId } = useParams()
  const [artistInfo, setArtistInfo] = useState()

  const [artistInfoState, setArtistInfoState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setArtistInfoState({
      error: null,
      data: null,
      loading: true,
    })
    getArtistInfo(artistId)
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
  }, [artistId])

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
  return (
    <StyledPage>
      <div>
        <h1>ArtistPage</h1>
        {artistInfo && <ArtistInfoCard props={artistInfo} key={artistInfo.id} />}
      </div>
    </StyledPage>
  )
}

export default ArtistPage
