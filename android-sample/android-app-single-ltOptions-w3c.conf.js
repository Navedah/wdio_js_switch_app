exports.config = {
    user: process.env.LT_USERNAME || "ritamg",
    key: process.env.LT_ACCESS_KEY || "acess_key",
  
    updateJob: false,
    specs: ["./../specs/android-test.js"],
    exclude: [],
  
    commonCapabilities: {
      build: "LT_Appium_NodeJS_WebDriverIO_ltoptions_w3_App_Automation",
      devicelog: true,
      visual: true,  
    },
  
    capabilities: [
      {
        "lt:options": {
          deviceName: "Galaxy.*",
          platformVersion: 12,
          name: "android_ltOptions",
          isRealMobile: true,
          visual: true,
          app: process.env.LT_APP_ID||"lt://XXXXXXXXXXXX",    // You need to give your application id
          platformName: "Android",
          enableCustomTranslation: true,
        }
      },
    ],
  
    logLevel: "info",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    // baseUrl: "https://mobile-hub.lambdatest.com",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
    port: 80,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 9000000000,
    },
  };
  
  exports.config.capabilities.forEach(function (caps) {
    for (var i in exports.config.commonCapabilities)
      caps[i] = caps[i] || exports.config.commonCapabilities[i];
  });
  
