import React from 'react'
import './styles.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './pages/Header'
import HomePage from './pages/HomePage'
import ArtistsPage from './pages/ArtistsPage'
import EventsPage from './pages/EventsPage'
import ArtistPage from './pages/ArtistPage'
import EventPage from './pages/EventPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import TodayEventPage from './pages/TodayEventPage'
import WeekEventPage from './pages/WeekEventPage'
import UserPage from './pages/UserPage'
import TicketPage from './pages/TicketPage'
import SellTicketPage from './pages/SellTicketPage'
import EditTicketPage1 from './pages/EditTicketPage1'
import EditTicketPage2 from './pages/EditTicketPage2'
import SearchResult from './pages/SearchResult'
import Footer from './pages/Footer'
import About from './pages/About'

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
        <Route exact path="/users/:userId">
          <UserPage />
        </Route>
        <Route exact path="/tickets/:ticketId">
          <TicketPage />
        </Route>
        <Route exact path="/sellticket">
          <SellTicketPage />
        </Route>
        <Route exact path="/sellticketedit/:ticketId">
          <EditTicketPage1 />
        </Route>
        <Route exact path="/buyticketedit/:ticketId">
          <EditTicketPage2 />
        </Route>
        <Route exact path="/result">
          <SearchResult />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
