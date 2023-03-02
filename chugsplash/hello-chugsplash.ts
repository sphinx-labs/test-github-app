import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'Hello ChugSplash Pate',
  },
  contracts: {
    MyFirstContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 11,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
  },
}

export default config
