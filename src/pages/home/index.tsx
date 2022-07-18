import { PageName } from 'components/AmplitudeAnalytics/constants'
import { Trace } from 'components/AmplitudeAnalytics/Trace'
import { RouteComponentProps } from 'react-router-dom'

export default function Swap({ history }: RouteComponentProps) {
  return <Trace page={PageName.SWAP_PAGE} shouldLogImpression></Trace>
}
