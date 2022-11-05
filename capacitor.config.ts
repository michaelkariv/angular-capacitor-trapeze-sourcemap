import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tests.debugtest',
  appName: 'debugtest',
  webDir: 'dist/debugtest',
  bundledWebRuntime: false,
  loggingBehavior: 'debug',

//   server: {
//     cleartext: true
//   },

  server: {
    androidScheme: 'http',
    hostname: '127.0.0.1',
    cleartext: true
  },


//   server: {
//     androidScheme: 'http',
//     hostname: 'localhost',
//     cleartext: true
//   },

//   android: {
//     webContentsDebuggingEnabled: true,
//     allowMixedContent: true
//   }

};

export default config;
