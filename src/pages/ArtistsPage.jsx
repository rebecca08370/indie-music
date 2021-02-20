import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { getArtistsInfo } from '../utils/api'
import AllArtists from '../components/artist/AllArtists'
import banner from '../assets/banner.png'

const StyledSection = Styled.div`
  padding:70px 160px;
`

const StyleBg = Styled.div`
  background-image: url(${banner});
`

const StyledSearch = Styled.div`
  text-align: center;
  padding:100px 0px;
  height: 400px;
  margin: 0px 0px 40px 0px;
`
const StyledP = Styled.p`
  text-align: center;
  margin:30px 0px;
  font-size: 26px;
  color: white;
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
      placeholder={'搜尋樂團'}
      onChange={(e) => setKeyword(e.target.value)}
    />
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
    <div>
      <div>
        <StyleBg>
          <StyledSearch>
            <StyledP>
              總共有 {artistListDefault && artistListDefault.length} 個樂團，搜尋結果有{' '}
              {artistList && artistList.length} 個樂團
            </StyledP>
            <SearchBar input={input} onChange={updateInput} />
          </StyledSearch>
        </StyleBg>
        <StyledSection>
          <AllArtists artistList={artistList} />
        </StyledSection>
      </div>
    </div>
  )
}

export default ArtistsPage
