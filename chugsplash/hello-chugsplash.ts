import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'Hello ChugSplash',
  },
  contracts: {
    MyFirstContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 1,
        stored: false,
        storageName: 'First',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
    MySecondContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 2,
        stored: true,
        storageName: 'Second',
        otherStorage: '0x1111111111111111111111111111111111111112',
      },
    },
  },
}

export default config
