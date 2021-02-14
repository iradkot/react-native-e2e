import wd from 'wd';
jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
    platformName: 'Android',
    deviceName: 'Pixel_3a_API_30_x86',
    app: 'C:/Users/kirill.DM/projects/react-native-e2e/android/app/build/outputs/apk/debug/app-debug.apk'
};
const driver = wd.promiseChainRemote('localhost', PORT);
beforeAll(async () => {
    await driver.init(config);
    await driver.sleep(4000);
})
test('should have myContainer', async () => {
    expect(await driver.hasElementByAccessibilityId('myContainer')).toBe(true)
    // expect(await driver.hasElementByAccessibilityId(‘alertButton’)).toBe(true);
    // const element = await driver.elementByAccessibilityId(‘alertButton’)
    // await element.click()
    // expect(await driver.hasElementByAccessibilityId(‘notHere’)).toBe(false);
});
test('should be able to fill input', async () => {
    const element = await driver.elementByAccessibilityId('myInput');
    await element.click();
    // expect(await driver.hasElementByAccessibilityId(‘notHere’)).toBe(false);
});
