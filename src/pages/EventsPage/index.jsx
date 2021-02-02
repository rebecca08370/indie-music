import React, { useState, useEffect } from "react";
import EventCard from "../../components/event/EventCard";
import Styled from "styled-components";
import { eventData } from "../../utils/event";
import "antd/dist/antd.css";
import { Skeleton } from "antd";

const StyledPage = Styled.div`
  margin:4em;
`;

const StyledSearch = Styled.div`
  padding-bottom:40px;
`;

const StyledEventCard = Styled.div`
`;

const SearchBar = ({ input: keyword, onChange: setKeyword }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search event name"}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

const EventList = ({ eventList = [] }) => {
  return (
    <>
      {eventList.map((props) => {
        if (props) {
          return <EventCard props={props}></EventCard>;
        }
        return null;
      })}
    </>
  );
};

const EventsPage = () => {
  const [input, setInput] = useState("");
  const [eventListDefault, setEventListDefault] = useState();
  const [eventList, setEventList] = useState();

  const updateInput = async (input) => {
    const filtered = eventListDefault.filter((user) => {
      return user.event.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setEventList(filtered);
  };

  const [allEventState, setAllEventState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    setAllEventState({
      error: null,
      data: null,
      loading: true,
    });
    fetch("../../utils/event.json")
      .then((res) => {
        setAllEventState({
          error: null,
          data: res,
          loading: false,
        });
        setEventList(eventData);
        setEventListDefault(eventData);
      })
      .catch((err) => {
        setAllEventState({
          error: err,
          data: null,
          loading: false,
        });
        console.error(err);
      });
  }, []);

  if (allEventState.error) {
    return <h1>Not found</h1>;
  }
  if (allEventState.loading || !allEventState.data) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }
  console.log(eventList);
  return (
    <StyledPage>
      <div>
        <h1>EventsPage</h1>
      </div>
      <div>
        <h2>共有 {eventListDefault && eventListDefault.length} 個events</h2>
        <h4>搜尋結果有 {eventList && eventList.length} 個events</h4>
        <StyledSearch>
          <SearchBar input={input} onChange={updateInput} />
        </StyledSearch>
        <StyledEventCard>
          <EventList eventList={eventList} />
        </StyledEventCard>
      </div>
    </StyledPage>
  );
};

export default EventsPage;
