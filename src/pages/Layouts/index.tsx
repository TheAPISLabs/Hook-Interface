import './index.css'

import { Layout } from '@douyinfe/semi-ui'
import { initializeAnalytics } from 'components/AmplitudeAnalytics'
import Polling from 'components/Header/Polling'
import Loader from 'components/Loader'
import Popups from 'components/Popups'
import TopLevelModals from 'components/TopLevelModals'
import ApeModeQueryParamReader from 'hooks/useApeModeQueryParamReader'
import { Suspense, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { Route, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'

import { useAnalyticsReporter } from '../../components/analytics'
import ErrorBoundary from '../../components/ErrorBoundary'
import Headers from '../../components/Header'
import NavigationBar from '../../components/NavigationBar'
import DarkModeQueryParamReader from '../../theme/DarkModeQueryParamReader'
import Foot from '../Footer'
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
export default function Layouts(props: any) {
  const history = useHistory()
  useAnalyticsReporter(useLocation())
  initializeAnalytics()

  useEffect(() => {
    console.log(props.route.routes)

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
            <Headers />
          </Header>
          <Content>
            <AppWrapper>
              {/* <HeaderWrapper>
       
        </HeaderWrapper> */}
              <BodyWrapper>
                <Popups />
                <Polling />
                <TopLevelModals />
                <Suspense fallback={<Loader />}>{renderRoutes(props.route.routes)}</Suspense>
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
