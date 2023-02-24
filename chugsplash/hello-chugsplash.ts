import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'Hello ChugSplash 2',
  },
  contracts: {
    MyFirstContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 9,
        stored: false,
        storageName: 'First',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
    AnotherContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 1,
        stored: false,
        storageName: 'First',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
    ERC20ButNotActually: {
      contract: 'HelloChugSplash',
      variables: {
        number: 1,
        stored: false,
        storageName: 'First',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
    ERC20ButNotActually2: {
      contract: 'HelloChugSplash',
      variables: {
        number: 1,
        stored: false,
        storageName: 'First',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
  },
}

export default config
