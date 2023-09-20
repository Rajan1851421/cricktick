import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Aboutus from './Aboutus';
import Livescore from './Livescore';
import Ranking from './Ranking';
import Upcoming_events from './Upcoming_events';
import WomenTeamRanking from './WomenTeamRanking';
import Register from './Register';
import Profile from './Profile';
import ManualNewsGet from './ManualNewsGet';
import Scorecard from './Scorecard'
import Newssubscibe from './Newssubscibe';
import TradingTweet from './TradingTweet';
import Login from "./Login"
import UserRegister from "./UserRegister"
import ResetPassword from "./passwordreset"
import Privacy from "./PrivacyPolicy"
import MenTeamRanking from "./MenTeamsRanking"
import New from "./New"
import ContactUs from "./ContactUs"


function Router() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutUs" element={<Aboutus />} />
      <Route path="/livescore" element={<Livescore />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/upcoming_events" element={<Upcoming_events />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/womenteamRanking" element={<WomenTeamRanking />} />
      <Route path="/manualNewsGet" element={<ManualNewsGet />} />
      <Route path='/Newssubscibe' element={<Newssubscibe />} />
      <Route path='/trandingTweet' element={<TradingTweet />} />
      <Route path='/login' element={<Login />} />
      <Route path='/scorecard' element={<Scorecard />} />
      <Route path='/userRegister' element={<UserRegister />} />
      <Route path='/resetPassword' element={<ResetPassword />} />
      <Route path='/privacyPolicy' element={<Privacy />} />
      <Route path='/menteamrank' element={<MenTeamRanking />} />
      <Route path='/new' element={<New/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
    </Routes>


  )

}

export default Router