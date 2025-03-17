import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const SESSION_FILE_PATH = path.resolve('whatsapp_session.json');

async function sendWhatsAppMessages(phoneNumber, message, count) {
    const browser = await puppeteer.launch({
        executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', // Adjust this path as needed
        headless: false, // Set to true if you prefer headless mode
        userDataDir: './user_data', // Directory to store user data
    });

    const page = await browser.newPage();

    // Load session data if it exists
    if (fs.existsSync(SESSION_FILE_PATH)) {
        const sessionData = JSON.parse(fs.readFileSync(SESSION_FILE_PATH, 'utf8'));
        await page.setCookie(...sessionData);
    }

    await page.goto(`https://web.whatsapp.com`);

    // Wait for WhatsApp Web to load
    await page.waitForSelector('div[data-testid="conversation-compose-box-input"]', { timeout: 60000 });

    // Save session data
    const cookies = await page.cookies();
    fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(cookies, null, 2));

    // Navigate to the chat and send messages
    await page.goto(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`);
    await page.waitForSelector('button[data-testid="compose-btn-send"]', { timeout: 60000 });

    for (let i = 0; i < count; i++) {
        // Click the send button
        await page.click('button[data-testid="compose-btn-send"]');
        // Wait a bit before sending the next message
        await page.waitForTimeout(1000);
    }

    await browser.close();
}

// Example usage:
sendWhatsAppMessages('8237052380', 'Hello! This is an automated message.', 10);
