import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'Pixel_3a_API_30_x86',
    app: 'C:/Users/kirill.DM/projects/react-native-e2e/android/app/build/outputs/apk/debug/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(3000);
})
test('my first appium test', async () => {
    // expect(await driver.hasElementByAccessibilityId(‘alertButton’)).toBe(true);
    // const element = await driver.elementByAccessibilityId(‘alertButton’)
    // await element.click()
    // expect(await driver.hasElementByAccessibilityId(‘notHere’)).toBe(false);
    expect(await driver.element('testId', 'myContainer')).toBe(true);
});
