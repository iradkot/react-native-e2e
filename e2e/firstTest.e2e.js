describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have myContainer', async () => {
    await expect(element(by.id('myContainer'))).toBeVisible();
  });

  it('should be able to fill input', async () => {
    await element(by.id('myInput')).tap();
    await element(by.id('myInput')).typeText('Hey there');
    await expect(element(by.id('myInput'))).toHaveText('Hey there');
  });

  it('should be able to press button which clears the input', async () => {
    await element(by.id('myInput')).tap();
    await element(by.id('myInput')).typeText('Hey there');
    await element(by.id('myButton')).tap();
    await expect(element(by.id('myInput'))).toHaveText('');
  });

  it('should fail', async () => {
    await element(by.id('myInput')).tap();
    await element(by.id('myInput')).typeText('Hey there');
    await element(by.id('myButton')).tap();
    await expect(element(by.id('myInput'))).toHaveText('Hey there');
  });
});
