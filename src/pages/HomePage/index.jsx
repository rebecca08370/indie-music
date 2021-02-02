import React from "react";
import Styled from "styled-components";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const StyledPage = Styled.div`
  margin:4em;
`;

const StyledButtonGroup = Styled.div`
  padding:20px 0px
`;

const StyledRecommend = Styled.div`
padding:20px 0px
`;

const toPage = (history, url) => {
  history.push(url);
};

const HomePage = () => {
  const history = useHistory();
  return (
    <StyledPage>
      <h1>HomePage</h1>
      <StyledButtonGroup>
        <Button
          variant="primary"
          className="mx-1"
          onClick={() => toPage(history, "/")}
        >
          Home
        </Button>
        <Button
          variant="primary"
          className="mx-1"
          onClick={() => toPage(history, "/events")}
        >
          所有活動
        </Button>
        <Button
          variant="primary"
          className="mx-1"
          onClick={() => toPage(history, "/artists")}
        >
          所有演出者
        </Button>
        <Button
          variant="primary"
          className="mx-1"
          onClick={() => toPage(history, "/todayevent")}
        >
          今日活動
        </Button>
        <Button
          variant="primary"
          className="mx-1"
          onClick={() => toPage(history, "/weekevent")}
        >
          本週活動
        </Button>
      </StyledButtonGroup>
      <StyledRecommend>
      <h2>RecommendEvent</h2>
        </StyledRecommend>
    </StyledPage>
  );
};

export default HomePage;
