import '../index.css'

import { TabPane, Tabs } from '@douyinfe/semi-ui'
import React from 'react'
import styled from 'styled-components/macro'
export default function StandBox() {
  const StandBox = styled.div`
    margin: auto;
    width: 100%;
    padding-top: 39px;
  `
  return (
    <StandBox>
      <Tabs type="button">
        <TabPane tab="文档" itemKey="1">
          文档
        </TabPane>
      </Tabs>
    </StandBox>
  )
}
