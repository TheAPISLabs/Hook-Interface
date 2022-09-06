import ErrorPage from '../pages/ErrorPage'
import Game from '../pages/game'
import GameDetails from '../pages/GameDetails'
import GameList from '../pages/GameList'
import HookPass from '../pages/HookPass'
import Layouts from '../pages/Layouts'
import MarketData from '../pages/MarketData'
import MoreGame from '../pages/MoreGame'
import Info from '../pages/Overview'
import PortfolioTrack from '../pages/PortfolioTrack'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
const routes = [
  {
    path: '/',
    component: SignIn,
    exact: true,
  },
  {
    path: '/signup',
    component: SignUp,
    exact: true,
  },
  {
    path: '/signin',
    component: SignIn,
    exact: true,
  },

  {
    path: '/layout',
    component: Layouts,
    routes: [
      {
        path: '/layout/game',
        component: Game,
        exact: true,
      },
      {
        path: '/layout/errorpage',
        component: ErrorPage,
        exact: true,
      },
      {
        path: '/layout/gamedetails',
        component: GameDetails,
      },
      {
        path: '/layout/about',
        component: GameList,
      },
      {
        path: '/layout/marketdata',
        component: MarketData,
      },
      {
        path: '/layout/about',
        component: HookPass,
      },
      {
        path: '/layout/about',
        component: MoreGame,
      },
      {
        path: '/layout/addressinfo',
        component: Info,
      },
      {
        path: '/layout/portfolioTrack',
        component: PortfolioTrack,
      },
    ],
  },
]

export default routes
