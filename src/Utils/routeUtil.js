import { HomePage, LeaderBoardPage, LoginPage, NewPage } from 'Layout';

export const routes = [
    {
        id: 1,
        path: "/",
        element: <HomePage />,
        title: "Home Page",
        nav: "Home",
        isShow: true
    },
    {
        id: 2,
        path: "/leaderboard",
        element: <LeaderBoardPage />,
        title: "LeaderBoard Page",
        nav: "LeaderBoard",
        isShow: true
    },
    {
        id: 3,
        path: "/add",
        element: <NewPage />,
        title: "Add Poll Page",
        nav: "New",
        isShow: true
    },
    {
        id: 4,
        path: "/login",
        element: <LoginPage />,
        title: "Login Page",
        nav: "Login",
        isShow: false
    }
]