
describe("Sample APK", () => {
  it("Open the app", async () => {
    await new Promise(resolve => setTimeout(resolve, 15000));  // Here you can interact with the application first time and replace these element ids with your actual element of your app
    const element = await $('//*[@text="Authenticator"]');
    await element.waitForDisplayed({ timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 5000));
    await element.click();
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    await driver.startActivity("com.android.chrome", "com.google.android.apps.chrome.Main");      // this will open up a chrome browser and you can intreact after this
    const browser_serarch = await $('//*[@resource-id="com.android.chrome:id/search_box_text"]'); // Here you can interact with your web application and perform actions. Replace 'yourElementId' with the actual ID of the element you want to click.
    await browser_serarch.setValue('https://www.lambdatest.com/capabilities-generator/');
    await new Promise(resolve => setTimeout(resolve, 15000));
    
    await driver.activateApp("com.lambdatest.proverbial","com.lambdatest.proverbial.MainActivity");  // This is our sample application's bundle id and Main activity id, instead of this put your application's bundle id and Main activity id and also it will open your application from the point where you left of while interacting first time.
    await driver.setOrientation("portrait");                                                          // This will keep your device in portrait mode
    await new Promise(resolve => setTimeout(resolve, 15000));
    const element1 = await $('//*[@class="android.widget.Button" and ./preceding-sibling::*[@resource-id="uds_button_title"]]'); // Here you can interact with the application second time and replace these element ids with your actual element of your app
    await element1.waitForDisplayed({ timeout: 30000 });
    await element1.click();

    await new Promise(resolve => setTimeout(resolve, 15000));
  });
});
