import './App.css'

import { Layout } from '@douyinfe/semi-ui'
import { initializeAnalytics } from 'components/AmplitudeAnalytics'
import Loader from 'components/Loader'
import TopLevelModals from 'components/TopLevelModals'
import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { Suspense } from 'react'
import { useEffect } from 'react'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

import { useAnalyticsReporter } from '../components/analytics'
import ErrorBoundary from '../components/ErrorBoundary'
import Headers from '../components/Header'
import Polling from '../components/Header/Polling'
import NavigationBar from '../components/NavigationBar'
import Popups from '../components/Popups'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import Foot from './Footer'
import Swap from './home'
import { RedirectPathToSwapOnly, RedirectToSwap } from './home/redirects'
import MarketData from './MarketData'
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
      <Layout className="components-layout-demo">
        <Sider>
          <NavigationBar />
        </Sider>
        <Layout>
          <Header>
            {' '}
            <Headers />
          </Header>
          <Content>
            {' '}
            <AppWrapper>
              {/* <HeaderWrapper>
       
        </HeaderWrapper> */}
              <BodyWrapper>
                <Popups />
                <Polling />
                <TopLevelModals />
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route path="/marketdata" component={MarketData} />
                    <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap} />
                    <Route exact strict path="/swap" component={Swap} />
                    <Route component={RedirectPathToSwapOnly} />
                  </Switch>
                </Suspense>
                <Marginer />
              </BodyWrapper>
            </AppWrapper>
          </Content>
          <Footer>
            <Foot />
          </Footer>
        </Layout>
      </Layout>
    </ErrorBoundary>
  )
}
