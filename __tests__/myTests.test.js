import wd from 'wd';

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
  platformName: 'iOS',
  automationName: 'XCUITest',
  deviceName: 'iPhone SE (2nd generation)',
  app:
    '/Users/iradkotton/Library/Developer/Xcode/DerivedData/loginE2EDemo-gjfcjjkrklzdthgbkzvaaexwbqnd/Build/Products/Debug-iphonesimulator/loginE2EDemo.app',
};

const android_config = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'Pixel_3a_API_30_x86',
  app:
    'C:\\Users\\kirill.DM\\projects\\react-native-e2e\\android\\app\\build\\outputs\\apk\\debug\\app-debug.apk',
};

const driver = wd.promiseChainRemote('localhost', PORT);
beforeEach(async () => {
  await driver.init(android_config);
  await driver.sleep(4000);
});
afterEach(async () => {
  await driver.quit();
});

test('should have myContainer', async () => {
  expect(await driver.hasElementByAccessibilityId('myContainer')).toBe(true);
});

test('should be able to fill input', async () => {
  const element = await driver.elementByAccessibilityId('myInput');
  const expected_text = 'Hello world';
  await element.type(expected_text);
  expect(await element.text()).toEqual(expected_text);
});
