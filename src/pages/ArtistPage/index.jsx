import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'
import ArtistInfo from '../../components/artist/ArtistInfo'
import { getArtistInfo } from '../../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'

const StyledPage = Styled.div`
  margin:4em;
`

const ArtistPage = () => {
  const { artistId } = useParams()
  const [input, setInput] = useState('')
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
    getArtistInfo(artistId)
      .then((res) => {
        setAllArtistState({
          error: null,
          data: res,
          loading: false,
        })
        console.log(res)
        setArtistList(res)
      })
      .catch((err) => {
        setAllArtistState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [artistId])

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
    <StyledPage>
      <div>
        <h1>ArtistPage</h1>
        {artistList && <ArtistInfo props={artistList} key={artistList.id} />}
      </div>
    </StyledPage>
  )
}

export default ArtistPage
