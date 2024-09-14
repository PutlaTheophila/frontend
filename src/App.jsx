import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes
} from "react-router-dom";
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
import {loader as markAttendanceLayoutLoader} from "./components/nsocomp/markAttendanceLayout.jsx"
import InterIITAttendance from "./components/nsocomp/markInterIITAtendance.jsx"
import {loader as InterIITAttendanceLoader} from './components/nsocomp/markInterIITAtendance.jsx'
import PersonalAttendance from "./components/nsocomp/personalAttendance.jsx";
import {loader as personalAttendanceLoader} from "./components/nsocomp/personalAttendance.jsx"
import StatsLayout from "./components/nsocomp/statsLayout.jsx";
import StudentSportsDropdown from "./components/nsocomp/statsStudents.jsx";
import SportAttendance from "./components/nsocomp/sportAttendance.jsx";
import { loader as sportAttendanceLoader } from "./components/nsocomp/sportAttendance.jsx";
import SportStats from "./components/nsocomp/stats.jsx";
import {loader as SportStatsLoader} from "./components/nsocomp/stats.jsx";
import HomeLayout from "./components/homepagecomp/homeLayout.jsx";
import {loader as markNsoAttendanceLoader} from "./components/nsocomp/markNsoAttendance.jsx";
import NsoAttendance from "./components/nsocomp/markNsoAttendance.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<HomeLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route 
          path='/events/:id'
          element={<NewsDetails/>}
          loader ={newsDetailsLoader}
        />
        <Route path="/events" loader = {eventsLoader} element={<Events/>}/>
        <Route path='/events/id' element={<h1>hello from events details page</h1>}/>
        <Route path="/tournaments" loader={tournamentsLoader} element={<TournamentsPage/>}/>
        <Route path="/tournaments/:id" loader ={tournamentDetailsLoader} element={<TournamentDetailsPage/>}/>      
        <Route path="/council" loader={councilLoader} element={<Council/> } />
        <Route path="/nso" loader={attendanceNavLoader} element={<NsoLayout/>}>
          <Route index element={<Nso/>}/>
          <Route path="/nso/mark-attendance" loader ={markAttendanceLayoutLoader} element={<MarkAttendanceLayout/>}>
            <Route path="/nso/mark-attendance/nso-attendance" loader = {markNsoAttendanceLoader} element={<NsoAttendance/>}/>
            <Route path="/nso/mark-attendance/interiit-attendance" loader={InterIITAttendanceLoader} element={<InterIITAttendance/>}/>
          </Route>
          <Route path="/nso/personal-attendance" loader={personalAttendanceLoader} element = {<PersonalAttendance/>}/>
          <Route path='/nso/stats' element={<StatsLayout/>}>
            <Route path='/nso/stats/:groupType/:sport' loader={SportStatsLoader} element={<SportStats/>}/>
          </Route>
          <Route path='/nso/group' loader={sportAttendanceLoader} element={<SportAttendance/>}/>
        </Route>
      </Route>

  )
);

export default router;