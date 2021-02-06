import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import ArtistCard from '../../components/artist/ArtistCard'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { getArtistsInfo } from '../../utils/api'

const StyledPage = Styled.div`
  margin:4em;
`

const StyledSearch = Styled.div`
  padding-bottom:40px;
`

const StyledArtistCard = Styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: '20rem',
    background: '#F2F1F9',
    border: 'none',
    padding: '0.5rem',
  }
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={'Search artist name'}
      onChange={(e) => setKeyword(e.target.value)}
    />
  )
}

const ArtistList = ({ artistList = [] }) => {
  return (
    <>
      {artistList.map((props) => {
        if (props) {
          return <ArtistCard props={props}></ArtistCard>
        }
        return null
      })}
    </>
  )
}

const ArtistsPage = () => {
  const [input, setInput] = useState('')
  const [artistListDefault, setArtistListDefault] = useState()
  const [artistList, setArtistList] = useState()

  const updateInput = async (input) => {
    const filtered = artistListDefault.filter((user) => {
      return user.fields.artist.toLowerCase().includes(input.toLowerCase())
    })
    setInput(input)
    setArtistList(filtered)
  }

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
        setArtistList(res.records)
        setArtistListDefault(res.records)
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
    <StyledPage>
      <div>
        <h1>ArtistsPage</h1>
      </div>
      <h2>共有 {artistListDefault && artistListDefault.length} 位users</h2>
      <h4>搜尋結果有 {artistList && artistList.length} 位users</h4>
      <StyledSearch>
        <SearchBar input={input} onChange={updateInput} />
      </StyledSearch>
      <StyledArtistCard>
        <ArtistList artistList={artistList} />
      </StyledArtistCard>
    </StyledPage>
  )
}

export default ArtistsPage
