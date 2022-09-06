import './App.css'

import { Layout } from '@douyinfe/semi-ui'
import { initializeAnalytics } from 'components/AmplitudeAnalytics'
import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { Route, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

import { useAnalyticsReporter } from '../components/analytics'
import ErrorBoundary from '../components/ErrorBoundary'
import routes from '../router'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;

  width: 100%;
  padding: 20px 20px 20px 30px;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 4rem 8px 16px 8px;
    @media screen and (max-width: 720px) {
      padding: 4rem 24px 16px 24px;
    }
  `};
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

const Marginer = styled.div`
  margin-top: 5rem;
`
const { Header, Footer, Sider, Content } = Layout
export default function App() {
  const history = useHistory()
  useAnalyticsReporter(useLocation())
  initializeAnalytics()

  useEffect(() => {
    console.log(routes)

    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })
    return () => {
      unlisten()
    }
  }, [history])

  return (
    <ErrorBoundary>
      <Route component={DarkModeQueryParamReader} />
      <Route component={ApeModeQueryParamReader} />
      {renderRoutes(routes)}
    </ErrorBoundary>
  )
}
