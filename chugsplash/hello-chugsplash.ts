import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'Hello ChugSplash Ryan',
  },
  contracts: {
    MyFirstContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 8,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
    MySecondContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 12,
        stored: true,
        storageName: 'First',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
  },
}

export default config
