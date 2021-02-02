import React from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import ArtistInfo from "../../components/artist/ArtistInfo";

const StyledPage = Styled.div`
  margin:4em;
`;


const ArtistPage = () => {
  const { artistId } = useParams();
  return (
    <StyledPage>
      <div>
        <h1>ArtistPage</h1>
        <ArtistInfo props={{artistId}} key={artistId}/>
      </div>
    </StyledPage>
  );
};

export default ArtistPage;
