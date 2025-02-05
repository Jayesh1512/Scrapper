import puppeteer from "puppeteer";
const url = 'https://www.instagram.com/gdg_rbu';
const scrapper = async () => {
    const browser = await puppeteer.launch({ headless: true }); // Optional: Set headless: false to see the browser in action
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' }); // Wait for network to be idle (page fully loaded)
    await page.waitForSelector('body'); // Wait for the body element to ensure content is loaded
    
    await page.screenshot({ path: 'screenshot.png' });
    await browser.close();
}
scrapper();
