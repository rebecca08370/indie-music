import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import ArtistsPage from "./pages/ArtistsPage";
import EventsPage from "./pages/EventsPage";
import ArtistPage from "./pages/ArtistPage";
import EventPage from "./pages/EventPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TodayEventPage from "./pages/TodayEventPage";
import WeekEventPage from "./pages/WeekEventPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/events">
          <EventsPage />
        </Route>
        <Route exact path="/events/:eventId">
          <EventPage />
        </Route>
        <Route exact path="/artists">
          <ArtistsPage />
        </Route>
        <Route exact path="/artists/:artistId">
          <ArtistPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/todayevent">
          <TodayEventPage />
        </Route>
        <Route exact path="/weekevent">
          <WeekEventPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
