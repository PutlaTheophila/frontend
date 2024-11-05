import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  useNavigation,
  Routes
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

import About from "./components/about";
import HomePage from "./components/homepagecomp/homeContent.jsx";
import  {loader as newsDetailsLoader } from "./components/eventDetails.jsx";
import NewsDetails from "./components/eventDetails.jsx";
import {loader as councilLoader} from "./components/council.jsx";
import Council from "./components/council.jsx";
import Nso from "./components/nsocomp/nso.jsx";
import {loader as attendanceNavLoader} from "./components/nsocomp/nsoNavBar.jsx";
import {loader as eventsLoader } from "./components/events.jsx";
import Events from "./components/events.jsx";
import Layout from "./components/layout.jsx";
import TournamentDetailsPage from "./components/tournamentDetails.jsx";
import {loader as tournamentDetailsLoader} from "./components/tournamentDetails.jsx"
import TournamentsPage from "./components/Tournaments.jsx";
import {loader as  tournamentsLoader } from "./components/Tournaments.jsx";
import NsoLayout from "./components/nsoLayout.jsx";
import MarkAttendanceLayout from "./components/nsocomp/markAttendanceLayout.jsx";
// import {loader as markAttendanceLayoutLoader} from "./components/nsocomp/markAttendanceLayout.jsx"
import InterIITAttendance from "./components/nsocomp/markInterIITAtendance.jsx"
import {loader as InterIITAttendanceLoader} from './components/nsocomp/markInterIITAtendance.jsx'
import PersonalAttendanceLayout from "./components/nsocomp/personalAttendanceLayout.jsx";
import {loader as PersonalAttendanceLayoutLoader} from "./components/nsocomp/personalAttendanceLayout.jsx"
import StatsLayout from "./components/nsocomp/statsLayout.jsx";
import StudentSportsDropdown from "./components/nsocomp/statsStudents.jsx";
import SportAttendance from "./components/nsocomp/groupAttendance.jsx";
import { loader as sportAttendanceLoader } from "./components/nsocomp/groupAttendance.jsx";
import SportStats from "./components/nsocomp/stats.jsx";
import {loader as SportStatsLoader} from "./components/nsocomp/stats.jsx";
import HomeLayout from "./components/homepagecomp/homeLayout.jsx";
import {loader as markNsoAttendanceLoader} from "./components/nsocomp/markNsoAttendance.jsx";
import NsoAttendance from "./components/nsocomp/markNsoAttendance.jsx";
import OAuthCallback from "./components/OAuthCallback.jsx";
import Login from "./components/login.jsx";
import {loader as nsoLoader} from "./components/nsoLayout.jsx";
import {loader as dashboardLoader} from "./components/dashboard.jsx";
import {loader as markAttendanceLayoutLoader} from "./components/nsocomp/markAttendanceLayout.jsx"
import {loader as personalInteriitAtendanceLoader} from "./components/nsocomp/personalnteriitAttendance.jsx";
import PersonalInteriitAtendance from "./components/nsocomp/personalnteriitAttendance.jsx";
import SportAttendanceLayout from "./components/nsocomp/groupAttendanceLayout.jsx";
import {loader as sportAttendanceLayoutLoader} from "./components/nsocomp/groupAttendanceLayout.jsx";
import EventDetails from "./components/eventDetails.jsx";
import {loader as eventDetailsLoader} from "./components/eventDetails.jsx";




// const LoadingSpinner = () => {
//   const navigation = useNavigation();
//   const isLoading = navigation.state === "loading";

//   if (!isLoading) return null;

//   return (
//     <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
//       <div className="bg-white rounded-lg p-4 shadow-xl flex flex-col items-center gap-2">
//         <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
//         <p className="text-gray-700 font-medium">Loading...</p>
//       </div>
//     </div>
//   );
// };



const LoadingSpinner = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 shadow-xl flex flex-col items-center gap-2">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
};




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={
      <>
        <LoadingSpinner />
        <HomeLayout />
      </>
    }>
        <Route index element={<HomePage/>}/>
        <Route 
          path='/events/:id'
          element={<NewsDetails/>}
          loader ={newsDetailsLoader}
        />
        <Route path="/events" loader = {eventsLoader} element={<Events/>}/>
        <Route path='/events/:id' loader={eventDetailsLoader} element={<EventDetails/>}/>
        <Route path="/tournaments" loader={tournamentsLoader} element={<TournamentsPage/>}/>
        <Route path="/tournaments/:id" loader ={tournamentDetailsLoader} element={<TournamentDetailsPage/>}/>      
        <Route path="/council" loader={councilLoader} element={<Council/> } />
        <Route path = '/dashboard' loader={dashboardLoader} element={<h1>hello from dash board</h1>}/>
        <Route path = '/login'  element ={<Login/>}/>
        <Route path="/auth/callback" element={<OAuthCallback/>}/>
        <Route path="/nso" loader={nsoLoader} element={<NsoLayout/>}>
            <Route index element={<Nso/>}/>
            <Route path="/nso/mark-attendance" loader={markAttendanceLayoutLoader} element={<MarkAttendanceLayout/>}>
              <Route path="/nso/mark-attendance/nso-attendance" loader = {markNsoAttendanceLoader} element={<NsoAttendance/>}/>
              <Route path="/nso/mark-attendance/interiit-attendance/:sport" loader={InterIITAttendanceLoader} element={<InterIITAttendance/>}/>
            </Route>
            <Route path="/nso/personal-attendance" loader={PersonalAttendanceLayoutLoader} element = {<PersonalAttendanceLayout/>}>
              <Route path="/nso/personal-attendance/nso-attendance/:sport"element={<h1>hello from nso attendance</h1>}/>
              <Route path="/nso/personal-attendance/interiit-attendance/:sport" loader={personalInteriitAtendanceLoader}  element={<PersonalInteriitAtendance/>}/>
            </Route>
            <Route path='/nso/stats' element={<StatsLayout/>}>
              <Route path='/nso/stats/:groupType/:sport' loader={SportStatsLoader} element={<SportStats/>}/>
            </Route>
            <Route path='/nso/group' loader={sportAttendanceLayoutLoader} element={<SportAttendanceLayout/>}>
              <Route path='/nso/group/:sport' loader={sportAttendanceLoader} element={<SportAttendance/>}/>
            </Route>
          </Route>
      </Route>

  )
);
export default router;

