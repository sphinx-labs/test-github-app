import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    organizationID: '0x5a72d86ce90b1bc7afdd472ec7bb0182431949e55a0b8185252d276c67cd7c46',
    projectName: 'Hello ChugSplash',
  },
  contracts: {
    MyFirstContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 1,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
        testInt: 1
      },
    },
  },
}

export default config
