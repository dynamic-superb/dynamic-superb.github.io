import "./App.css";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {
    useTheme,
    ThemeProvider,
    makeStyles,
    createMuiTheme,
} from "@material-ui/core/styles";

import Landing from "./Landing";
import News from "./News";
import Tasks from "./Tasks";
import Rules from "./Rules";
import Compare from "./Compare";
import Leaderboard from "./Leaderboard";
import Challenge from './Challenge';
import CallForTask from './CallForTask';
import ReviewProcess from "./review_process";
import NavigationBar from "./components/NavigationBar";
import LeaderBoard from "./Leaderboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import SubmitForm from "./components/SubmitForm";
import Profile from "./Profile";
import { mainTheme } from "./components/Theme";
import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/auth-hook";
import { useContext } from "react";
import TaskSubmission from "./task_submission";
import ScoreSubmission from "./score_submission";
import TaskDetails from "./TaskDetails";
import TaskProposal from "./task_proposal";

const useStyles = makeStyles((theme) => ({
    narrowViewport: {
        width: "85%",
        maxWidth: 900,
        margin: "auto",
    },
    LoginButton: {
        height: "30vh",
        paddingTop: "10vh",
    },
}));

function App() {
    const [width, setWidth] = React.useState(0);
    const [height, setHeight] = React.useState(0);
    const [navbarHeight, setNavbarHeight] = React.useState(0);
    const tableControlRef = React.useRef(null);

    const setViewPort = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        setNavbarHeight(document.getElementById("navbar").offsetHeight);
    };
    React.useEffect(setViewPort);
    window.addEventListener("resize", setViewPort);

    const classes = useStyles();
    let routes = (
        <Switch>
            <Route path="/" exact>
                <div className={`${classes.narrowViewport}`}>
                    <Landing />
                </div>
            </Route>
            <Route path="/tasks">
                <div className={`${classes.narrowViewport}`}>
                    <Tasks />
                </div>
            </Route>
            <Redirect from='/task/' to='/tasks' exact />
            <Route path="/task/:name">
                <div className={`${classes.narrowViewport}`}>
                    <TaskDetails />
                </div>
            </Route>
            <Route path="/call-for-task">
                <div className={`${classes.narrowViewport}`}>
                    <CallForTask />
                </div>
            </Route>
            <Route path="/task-submission">
                <div className={`${classes.narrowViewport}`}>
                    <TaskSubmission />
                </div>
            </Route>
            <Route path="/score-submission">
                <div className={`${classes.narrowViewport}`}>
                    <ScoreSubmission />
                </div>
            </Route>
            <Route path="/review-process">
                <div className={`${classes.narrowViewport}`}>
                    <ReviewProcess />
                </div>
            </Route>
            <Route path="/task-proposal">
                <div className={`${classes.narrowViewport}`}>
                    <TaskProposal />
                </div>
            </Route>
            <Route path="/leaderboard">
                <div>
                    <LeaderBoard />
                </div>
            </Route>
            {/*<Route path="/leaderboard">
                <Leaderboard
                    height={`${height - navbarHeight}px`}
                    tableControlRef={tableControlRef}
                />
            </Route>*/}
        </Switch>
    );
    return (
        <div className="App">
            <Router>
                <div id="top"></div>
                <div id="navbar">
                    <NavigationBar tableControlRef={tableControlRef} />
                </div>
                {routes}
            </Router>
        </div>
    );
}

export default () => {
    const { token, isAdmin, email, login, logout } = useAuth();
    return (
        <ThemeProvider theme={createMuiTheme(mainTheme)}>
            <App />
        </ThemeProvider>
    );
};
