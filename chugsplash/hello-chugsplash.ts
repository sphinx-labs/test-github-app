import { UserChugSplashConfig } from '@chugsplash/core'

const config: UserChugSplashConfig = {
  options: {
    projectName: 'Ryan Test',
  },
  contracts: {
    MyFirstContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 3,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
        testInt: 1
      },
    },
    MySecondContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 3,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
        testInt: 1
      },
    },
    MyThirdContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 3,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
        testInt: 1
      },
    },
    MyForthContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 3,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
      },
    },
    MyFiveContract: {
      contract: 'HelloChugSplash',
      variables: {
        number: 3,
        stored: false,
        storageName: 'false',
        otherStorage: '0x1111111111111111111111111111111111111111',
        testInt: 1
      },
    },
  },
}

export default config
