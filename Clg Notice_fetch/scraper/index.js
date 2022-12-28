const {log} = require('console');
const fs = require('fs');
const puppeteer = require('puppeteer');

async function run(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.heritageit.edu/Notice.aspx');

    // await page.screenshot({path: '../ss/'})

    const links = await page.evaluate(() => Array.from(document.querySelectorAll('tbody'), (e) => e.href)
    );

    const notices = await page.$$eval('table tbody tr', (elements) =>
    elements.map((e) => ({
        // title: e.querySelector('.card-body h3').innerText,
        url: e.querySelector('td div a').href,
        // date: e.querySelector() 
    }))
    );
    
    console.log(notices);

    await browser.close();

}

run();