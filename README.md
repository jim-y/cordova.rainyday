cordova.rainyday
================

A cordova based hybrid mobile weather application written in nodejs. My first hybrid application, and also my first cordova app. 

I plan to use these technologies within the app:

* browserify
* cordova
* react
* flux
* immutable
* superagent
* hammerjs

The build tool will be npm.

# Prerequisities

TBC

# Installation

**Clone the repository** 

```bash
$ git clone https://github.com/jim-y/cordova.rainyday
```

**Install the dependencies**

```bash
$ npm install
```

**Add android platform**

```bash
$ cd app/ && cordova platform add android
```

**Install geolocation plugin**

```bash
$ cordova plugin add org.apache.cordova.geolocation
```

**Build and local test**

```bash
$ cd ..
$ pwd
~/cordova.rainyday
$ npm run dist
$ npm run serve
```

**Deploy to device**

```bash
$ npm run deploy
```
