import wd from "wd";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;

// const common = {
//   hostname: APPIUM_HOST,
//   port: APPIUM_PORT,
//   logLevel: APPIUM_LOG_LEVEL,
//   user: APPIUM_USER,
//   pwd: APPIUM_PASSWORD,
//   capabilities: {
//     appiumVersion,
//     waitforTimeout: DEVICE_TIMEOUT,
//     commandTimeout: DEVICE_TIMEOUT,
//     newCommandTimeout: DEVICE_TIMEOUT,
//   },
// };

const ios_config = {
  platformName: "iOS",
  automationName: "XCUITest",
  deviceName: "iPhone SE (2nd generation)",
  app: "/Users/iradkotton/Library/Developer/Xcode/DerivedData/loginE2EDemo-gjfcjjkrklzdthgbkzvaaexwbqnd/Build/Products/Debug-iphonesimulator/loginE2EDemo.app",
};

const android_config = {
  platformName: "Android",
  automationName: "UiAutomator2",
  deviceName: "Pixel_3a_API_30_x86",
  app: "Users/iradkotton/projects/side-projects/loginE2EDemo/android/app/build/outputs/apk/debug/app-debug.apk",
};

const config = {
  platformName: "Android",
  deviceName: "Pixel_3a_API_30_x86",
  app: "Users/iradkotton/projects/side-projects/loginE2EDemo/android/app/build/outputs/apk/debug/app-debug.apk",
};
const driver = wd.promiseChainRemote("localhost", PORT);
beforeAll(async () => {
  await driver.init(android_config);
  await driver.sleep(4000);
});
test("should have myContainer", async () => {
  expect(await driver.hasElementByAccessibilityId("myContainer")).toBe(true);
  // expect(await driver.hasElementByAccessibilityId(‘alertButton’)).toBe(true);
  // const element = await driver.elementByAccessibilityId(‘alertButton’)
  // await element.click()
  // expect(await driver.hasElementByAccessibilityId(‘notHere’)).toBe(false);
});
test("should be able to fill input", async () => {
  const element = await driver.elementByAccessibilityId("myInput");
  await element.click();
  // expect(await driver.hasElementByAccessibilityId(‘notHere’)).toBe(false);
});
