import React, { Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const HomeLayout = React.lazy(() => import("./components/homepagecomp/homeLayout.jsx"));
const HomePage = React.lazy(() => import("./components/homepagecomp/homeContent.jsx"));
const NewsDetails = React.lazy(() => import("./components/eventDetails.jsx"));
const Events = React.lazy(() => import("./components/events.jsx"));
const TournamentsPage = React.lazy(() => import("./components/Tournaments.jsx"));
const TournamentDetailsPage = React.lazy(() => import("./components/tournamentDetails.jsx"));
const Council = React.lazy(() => import("./components/council.jsx"));
const NsoLayout = React.lazy(() => import("./components/nsoLayout.jsx"));
const MarkAttendanceLayout = React.lazy(() => import("./components/nsocomp/markAttendanceLayout.jsx"));
const NsoAttendance = React.lazy(() => import("./components/nsocomp/markNsoAttendance.jsx"));
const InterIITAttendance = React.lazy(() => import("./components/nsocomp/markInterIITAtendance.jsx"));
const PersonalAttendanceLayout = React.lazy(() => import("./components/nsocomp/personalAttendanceLayout.jsx"));
const StatsLayout = React.lazy(() => import("./components/nsocomp/statsLayout.jsx"));
const SportAttendanceLayout = React.lazy(() => import("./components/nsocomp/groupAttendanceLayout.jsx"));
const SportAttendance = React.lazy(() => import("./components/nsocomp/groupAttendance.jsx"));
const SportStats = React.lazy(() => import("./components/nsocomp/stats.jsx"));
const Login = React.lazy(() => import("./components/login.jsx"));
const OAuthCallback = React.lazy(() => import("./components/OAuthCallback.jsx"));
const PersonalInteriitAtendance = React.lazy(() => import("./components/nsocomp/personalnteriitAttendance.jsx"));
const Nso = React.lazy(() => import("./components/nsocomp/nso.jsx"));

import { loader as newsDetailsLoader } from "./components/eventDetails.jsx";
import { loader as councilLoader } from "./components/council.jsx";
import { loader as attendanceNavLoader } from "./components/nsocomp/nsoNavBar.jsx";
import { loader as eventsLoader } from "./components/events.jsx";
import { loader as tournamentDetailsLoader } from "./components/tournamentDetails.jsx";
import { loader as tournamentsLoader } from "./components/Tournaments.jsx";
import { loader as markNsoAttendanceLoader } from "./components/nsocomp/markNsoAttendance.jsx";
import { loader as InterIITAttendanceLoader } from './components/nsocomp/markInterIITAtendance.jsx';
import { loader as PersonalAttendanceLayoutLoader } from "./components/nsocomp/personalAttendanceLayout.jsx";
import { loader as SportStatsLoader } from "./components/nsocomp/stats.jsx";
import { loader as markAttendanceLayoutLoader } from "./components/nsocomp/markAttendanceLayout.jsx";
import { loader as personalInteriitAtendanceLoader } from "./components/nsocomp/personalnteriitAttendance.jsx";
import { loader as sportAttendanceLayoutLoader } from "./components/nsocomp/groupAttendanceLayout.jsx";
import { loader as sportAttendanceLoader } from "./components/nsocomp/groupAttendance.jsx";
import { loader as nsoLoader } from "./components/nsoLayout.jsx";
import { loader as dashboardLoader } from "./components/dashboard.jsx";
import LoadingFallback from "./components/LoadingFallbackLoader.jsx"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={LoadingFallback}>
          <HomeLayout />
        </Suspense>
      }
    >
      <Route
        index
        element={
          <Suspense fallback={LoadingFallback}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/events/:id"
        element={
          <Suspense fallback={LoadingFallback}>
            <NewsDetails />
          </Suspense>
        }
        loader={newsDetailsLoader}
      />
      <Route
        path="/events"
        loader={eventsLoader}
        element={
          <Suspense fallback={LoadingFallback}>
            <Events />
          </Suspense>
        }
      />
      <Route
        path="/tournaments"
        loader={tournamentsLoader}
        element={
          <Suspense fallback={LoadingFallback}>
            <TournamentsPage />
          </Suspense>
        }
      />
      <Route
        path="/tournaments/:id"
        loader={tournamentDetailsLoader}
        element={
          <Suspense fallback={LoadingFallback}>
            <TournamentDetailsPage />
          </Suspense>
        }
      />
      <Route
        path="/council"
        loader={councilLoader}
        element={
          <Suspense fallback={LoadingFallback}>
            <Council />
          </Suspense>
        }
      />
      <Route
        path="/nso"
        loader={nsoLoader}
        element={
          <Suspense fallback={LoadingFallback}>
            <NsoLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={LoadingFallback}>
              <Nso />
            </Suspense>
          }
        />
        <Route
          path="/nso/mark-attendance"
          loader={markAttendanceLayoutLoader}
          element={
            <Suspense fallback={LoadingFallback}>
              <MarkAttendanceLayout />
            </Suspense>
          }
        >
          <Route
            path="/nso/mark-attendance/nso-attendance"
            loader={markNsoAttendanceLoader}
            element={
              <Suspense fallback={LoadingFallback}>
                <NsoAttendance />
              </Suspense>
            }
          />
          <Route
            path="/nso/mark-attendance/interiit-attendance/:sport"
            loader={InterIITAttendanceLoader}
            element={
              <Suspense fallback={LoadingFallback}>
                <InterIITAttendance />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/nso/personal-attendance"
          loader={PersonalAttendanceLayoutLoader}
          element={
            <Suspense fallback={LoadingFallback}>
              <PersonalAttendanceLayout />
            </Suspense>
          }
        >
          <Route
            path="/nso/personal-attendance/interiit-attendance/:sport"
            loader={personalInteriitAtendanceLoader}
            element={
              <Suspense fallback={LoadingFallback}>
                <PersonalInteriitAtendance />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/nso/stats"
          element={
            <Suspense fallback={LoadingFallback}>
              <StatsLayout />
            </Suspense>
          }
        >
          <Route
            path="/nso/stats/:groupType/:sport"
            loader={SportStatsLoader}
            element={
              <Suspense fallback={LoadingFallback}>
                <SportStats />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/nso/group"
          loader={sportAttendanceLayoutLoader}
          element={
            <Suspense fallback={LoadingFallback}>
              <SportAttendanceLayout />
            </Suspense>
          }
        >
          <Route
            path="/nso/group/:sport"
            loader={sportAttendanceLoader}
            element={
              <Suspense fallback={LoadingFallback}>
                <SportAttendance />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Route>
  )
);

export default router;
