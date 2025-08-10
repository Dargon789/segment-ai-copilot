import { Analytics } from '@segment/analytics-node'

const analyticsSingleton = () => {
  return new Analytics({ writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY as string})
}

declare global {
  var analyticsGlobal: undefined | ReturnType<typeof analyticsSingleton>
}

const analytics = globalThis.analyticsGlobal ?? analyticsSingleton()

export default analytics

if (process.env.NODE_ENV !== 'production') globalThis.analyticsGlobal = analytics