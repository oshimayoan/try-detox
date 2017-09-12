import {reloadApp} from 'detox-expo-helpers';

describe('Main', () => {
  beforeEach(async () => {
    await reloadApp();
  });
  // before(async () => {
  //   await device.relaunchApp({url: 'exp://localhost:19000'});
  // });
  it('should have welcome heading', async () => {
    await expect(element(by.id('welcomeID'))).toBeVisible();
  });
});
