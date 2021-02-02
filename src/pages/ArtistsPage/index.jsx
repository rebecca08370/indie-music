import React from "react";
import Styled from "styled-components";
import ArtistCard from "../../components/artist/ArtistCard";
import { artistData } from "../../utils/artist";

const StyledPage = Styled.div`
  margin:4em;
`;

const StyledArtist = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center
`;
const ArtistsPage = () => {
  return (
    <StyledPage>
      <div>
        <h1>ArtistsPage</h1>
      </div>
      <h2>所有演出者</h2>
      <h3>目前共有：{artistData && artistData.length} 個演出者</h3>
      <StyledArtist>
        {artistData.map((props) => {
          return <ArtistCard props={props} key={props.artists} />;
        })}
      </StyledArtist>
    </StyledPage>
  );
};

export default ArtistsPage;
