import {Builder, By, until, promise, WebElementPromise, WebElement} from 'selenium-webdriver';
import 'selenium-webdriver/chrome';

const driver = new Builder()
    .forBrowser('chrome')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

const foreverMillis = 5 * 60000;

let find = driver.findElement;

(async function() {
  await driver.get('https://foo.com');
  await driver.wait(until.titleIs('Bar'), foreverMillis);

  const pwd = await (await find(By.id('password')));
  await pwd.sendKeys('blah');
  await pwd.submit(); // Or: await (await find(By.id('submit'))).click();

  const homeLink = By.linkText('Home'); // Or: partialLinkText
  await driver.wait(until.elementLocated(homeLink), foreverMillis);
  await (await find(homeLink)).click();

  await driver.quit();
})();
