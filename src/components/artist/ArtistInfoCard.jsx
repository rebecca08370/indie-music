import React from 'react'

const ArtistInfoCard = ({ props }) => {
  const artistInfo = props.fields
  const artistId = props.id
  return (
    <div>
      <h2>id：{artistId}</h2>
      <p>演出者id：{artistInfo.artist_id}</p>
      <p>artist：{artistInfo.artist}</p>
      <p>band_img：{artistInfo.band_img}</p>
      <p>follower：{artistInfo.follower}</p>
      <p>following：{artistInfo.following}</p>
    </div>
  )
}

export default ArtistInfoCard
