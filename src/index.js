import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';
import App from "./App"
import Events from "./Pages/Events"
import EventsAndUsers from "./Pages/Events+Users"
import Users from "./Pages/Users"

import { UsersProvider } from "./Providers/UsersProvider"
import { EventsProvider } from "./Providers/EventsProvider"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <UsersProvider>
        <EventsProvider>
          <Route path="/" render={() => <App />} />
          <Route path="/Events+Users" render={(props) => <EventsAndUsers />} />
          <Route path="/Users" render={(props) => <Users />} />
          <Route path="/Events" render={(props) => <Events />} />
        </EventsProvider>
      </UsersProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
