const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("https://www.tnpds.gov.in/home.xhtml");
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("table#masterForm\\:languageSelectMenu > tbody > tr > td:nth-child(2) > label");
        await element.click();
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("aria/ABOUT PDS");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/Fair Price Shops");
        await element.click();
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const element = await frame.waitForSelector("aria/Details of fair price shops as on date (click here)");
        await element.click();
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/South Chennai");
        await element.click();
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/Mylapore");
        await element.click();
        await promise;
    }
    {
        const targetPage = page;
        const frame = targetPage.mainFrame();
        const promise = targetPage.waitForNavigation();
        const element = await frame.waitForSelector("aria/02KC006SC");
        await element.click();
        await promise;
    }
    await browser.close();
})();
