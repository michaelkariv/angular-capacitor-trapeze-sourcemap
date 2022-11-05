# Remote Debugging of Angular 14 + Capacitor 4 Hybrid App on Android - Fails Remote Debugging - Source Maps access

1. The goal of Capacitor is to make web apps run as hybrid apps on mobile devices.
2. My angular PWA app runs great with Capacitor, except I was unable to debug it on Android.
3. It should be possible via Chrome remote debugging. The process is described in a number of official sources (documentation and blog)
  1. [Debugging Tips For Your Ionic App - Ionic Blog](https://ionic.io/blog/debugging-tips-for-your-ionic-app)
  2. [Debugging Guide for Apps in iOS Safari and Android Chrome](https://ionicframework.com/docs/troubleshooting/debugging)
4. I followed all the described steps
  3. built the android version using Trapeze (v5) script
  4. opened in Android studio and ran in an emulator
  5. opened a Chrome remote debugging window and connected to the running emulator
5. I succeeded in seeing the screen and the console logs, but I got an error for viewing the original source code because the .map files were not loaded.
```
_DevTools failed to load source map: Could not load content for http://localhost/main.js.map: System error: net::ERR_CLEARTEXT_NOT_PERMITTED_
```
6. Angular configuration used is development - which means angular is running in debug mode
7. I looked up the problem on StackOverflow and found these topics
   1. [Ionic 5/Capacitor ERR_CLEARTEXT_NOT_PERMITTED in Android](https://stackoverflow.com/questions/60906953/ionic-5-capacitor-err-cleartext-not-permitted-in-android)
   2. [Why am I seeing net::ERR_CLEARTEXT_NOT_PERMITTED errors after upgrading to Cordova Android 8?](https://stackoverflow.com/questions/54752716/why-am-i-seeing-neterr-cleartext-not-permitted-errors-after-upgrading-to-cordo)
   3. [Android 8: Cleartext HTTP traffic not permitted](https://stackoverflow.com/questions/45940861/android-8-cleartext-http-traffic-not-permitted) - most detailed
   4. [https://stackoverflow.com/questions/60906953/ionic-5-capacitor-err-cleartext-not-permitted-in-android/68222928#68222928](https://stackoverflow.com/questions/60906953/ionic-5-capacitor-err-cleartext-not-permitted-in-android/68222928#68222928)
8. So I generated a new Angular app using the latest Angular (v14) and Capacitor(v4.4), and out of the box the problem is observable.
9. Whatever I tried failed, though the error changed to net::ERR_CONNECTION_REFUSED, for all the same files
10. I reinstalled Chrome - did not help
11. When on the same Android device I run the same app as a Web App in a chrome browser, remote debugging works just fine.

# What I tried
There are many things to try out, per the linked pages (mostly on StackOverflow).
I tried the suggestsions one by one, all in vain. 
I aggregated all the suggestions in the `config.yaml` Trapeze configuration file, which creates all the changes in Android manifest, gradle build script, networking persmissions file.
It all comes to one file, thanks to the genius Trapeze tool, which, if you use Capacitor, is (IMHO) a must have.
There is one exception - which is capacitor server - and it is in the `capacitor.config.ts` file. 

# Build and Testing Environment
- Gradle
  - minSdkVersion = 28
  - compileSdkVersion = 32
  - targetSdkVersion = 32
  - androidxActivityVersion = '1.4.0'
  - androidxAppCompatVersion = '1.4.2'
  - androidxCoordinatorLayoutVersion = '1.2.0'
  - androidxCoreVersion = '1.8.0'
  - androidxFragmentVersion = '1.4.1'
  - coreSplashScreenVersion = '1.0.0-rc01'
  - androidxWebkitVersion = '1.4.0'
  - junitVersion = '4.13.2'
  - androidxJunitVersion = '1.1.3'
  - androidxEspressoCoreVersion = '3.4.0'
   - cordovaAndroidVersion = '10.1.1'
- Device
  - Samsung Galaxy s20
  - OS: Android 12
- Packages
  - "@angular/*": "^14.2.6",
  - "@capacitor/android": "^4.4.0",
  - "@capacitor/core": "^4.4.0",
  - "@trapezedev/configure": "^5.0.7",
- Remote Debugging
  - OS: Microsoft Windows 10 Pro
  - OS Version	10.0.19044 Build 19044
  - Processor	AMD Ryzen 9 5900X 12-Core Processor, 3701 Mhz, 12 Core(s), 24 Logical Processor(s)
  - Installed Physical Memory (RAM)	64.0 GB
  - Chrome: Version 107.0.5304.88 (Official Build) (64-bit)



