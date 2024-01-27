import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import CollegeProfile from "./CollegeProfile";
import Applicants from "./Applicants";
import StudentApplication from "./components/StudentApplication";
import ReactedApplication from "./components/ReactedApplication";
import GoDash from "./components/GoDash";
import Financial from "./Financial";
import FeedBackForm from "./FeedBackForm";
import Team from "./Team";
// import TeamMember from "./components/TeamMember";
import Inbox from "./Inbox";
import Demo from "./Demo";
import Error404 from "./components/404";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              fontSize: "1.3rem",
              background: "#212121",
              color: "#fff",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<GoDash />} />
          <Route path="/signin" element={<SignIn />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/college-profile" element={<CollegeProfile />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/applicants/:id" element={<StudentApplication />} />
            <Route
              path="/reacted-application"
              element={<ReactedApplication />}
            />
            <Route path="/financial" element={<Financial />} />
            <Route path="/feedback-form" element={<FeedBackForm />} />
            <Route path="/query" element={<Inbox />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/team" element={<Team />} />
            {/* <Route path="/team/:id" element={<TeamMember />} /> */}
          </Route>
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
