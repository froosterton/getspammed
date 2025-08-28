const puppeteer = require('puppeteer');

const POWERSHELL_TEXT = `$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36"
$session.Cookies.Add((New-Object System.Net.Cookie("__stripe_mid", "461625b7-210a-4fe6-8c69-f0edc8fee7393485d8", "/", ".www.roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("_t", "vp5Vjh9jR64bKD%2BU%2BpziZ5WX4LVm%2F2bVzZosspFaQHNs91Imu4U3vOG9O8%2BLYQUsBX7go6wY3kJed59PA3OXvusCPumAIcCntZAee1XYYdVIFXo1cDO4PqCXw8%2BOxm611EUd0jCA7qttE%2BTllLJPNyCY8pEq0ozUlg00LmDHiaHnVhY76mJqr2PAm56hxyll%2FY3qymH5MkkaMRCZDJxko0Rk%2Biq1PKa8AZbAmfaFg4Uuil7vDKRkTrr8tWU%2FtvovMguovXFCgndtu2SMis8Dmw2Rweu2Ulep8rxEtEVCKwCKQNCC%2Fx5i86%2Fd6txriD%2BRiWLTlQ%3D%3D--n1FdrVVJn%2BP9vbWH--z8FEFtzR4bWP%2Fa4u3VWwqA%3D%3D", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie(".RBXIDCHECK", "07ac01e4-7655-4dac-ab56-725908182948,f11937ed-59db-4efc-9395-0108e5933e30,a512395b-98f4-4bc3-a4df-d396bb92d86e,58478db1-fa7e-4531-a12d-f54e369f3105", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("RBXSessionTracker", "sessionid=c9d334e1-2260-4e64-9f15-903a84c8770b", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("RBXcb", "RBXViralAcquisition=false&RBXSource=false&GoogleAnalytics=false", "/", "www.roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("rbxas", "7f454f43ca82775aa5c2c4a4382bdbca95231290a028e73a6dd44706e83e0af0", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie(".ROBLOSECURITY", "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_CAEaAhAB.A727F621C3DED05DB65150544CEF8B902E038893D40F2775BD45DB4BEEC9BF9C0C9C751ACA1724E93C33CBF5B98029ED49507A35ED92B7F7B532B707652F88B5796DC0E9C88E6D8F4371C796533E82355F25CC79C5C4AF6755EF0F90078DE38D661C8C66A93485A329F39600A13EA7F6727E9BC83EC6379B2B3D1D50551941DC45D174E21CE98A704720D9BF0B2CD2210CA007C6790CC50E1EC0A778EA82EC1F75CCE82FE86A60E08F55DE656F314ECF35103C7B9EC9CF11264E993D542DA29BC9E3BF47EA305D21163DFF1811396D73A5AD7A346E1E010BDDD91A913F066992AC228BF6DD087C3FAC27FA9EA67CD6E832C32078E3BA94093C23390B7CDE991A7977812B93BF10148F787D94AE2CC8AC7EF22286598B0F8DAD4CFC09F090D7AF32B0D62A34EC6EC7E9E203EAD011753E2827F2AF0A21E3FF3477DE6F9AEDE9FF7CBF243F54546068B5CD66678FAF68C604A1507D092D2C9E873E9F1DF5024AE1A86FF59FFCDFDE451A3BF6A42368A5F765EF32E38E7E82093035142B4F4D242989FA1395211E1D32CBC6FB5387F5AC716779AB7CDB8DA2796C1B3FAA5231F787E3729C0FA325AEB9396848FBEFCDDBB05F0B63F6B95C95C70C15F4267955BA0EA414897465C2F89A924E3F9358D42D1F5C9B0592A1EDF0132DB580AE1352B5BAFD81114BD38A4737EFD2FAFF484F9775F85D5C67F1F772C51CAF66495EA76235C66CD4434B71A7A77A5F1AEADA48397EB5E9E8BFD98E2C16C46C7FA733E39C5A2062BF9BA508359FFEFDCEC299EFB81A6496E5AFC4A2F9DF72F4ECB4AD94FA1548E64136F420A0FD8D43A6DA21E6AFB4BEDA8AE71053CBA4F993C0E1E6A143426D1D984F60185BD9EE0CC898B2B2521D1C08E5E664CB40440D902D4E426222DFCBA57DD560D8210500EB55E8CC3065F15BE79DE29ED9B09BACABBF3F1F798E997A41B88F83B644A43AD8CF12B7B37E5416C1845D7126C52346660987A166A87947F6A87B629E4C98A9D4F8659AA91E911AB71B9B4D1B4D7D27BA929091AD370849184853307BBE841C532C3656751C872D576555CE53526491DEC0FA6DC120BEFF4FC95501E6E20D8F5D436DC80E94E5E77E7F289B6B2198C347FE50F3164A4D694915B91B8E5340561A25EEB32F98E355B97487C7997E50DBD17B12F104E666A9C61017F35FD79B095485FF722145E47A5C1BAB2245E2F23F6E86DE6250648BD9121EFD675C1C560719E07DFF23605E4716F724", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("RBXEventTrackerV2", "CreateDate=08/28/2025 15:08:59&rbxid=9293509916&browserid=1750374321558001", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("__stripe_sid", "0f2347ab-477c-418e-9f0d-4b8c26d5b76dbcca26", "/", ".www.roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("RBXPaymentsFlowContext", "cf89ba43-04bc-4f54-aa39-0bf1c90e5bbd,", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("rbx-ip2", "1", "/", ".roblox.com")))
$session.Cookies.Add((New-Object System.Net.Cookie("GuestData", "UserID=-69516664", "/", ".roblox.com")))
Invoke-WebRequest -UseBasicParsing -Uri "https://www.roblox.com/catalog/1365767/Valkyrie-Helm" \`
-WebSession $session \`
-Headers @{
"authority"="www.roblox.com"
  "method"="GET"
  "path"="/catalog/1365767/Valkyrie-Helm"
  "scheme"="https"
  "accept"="text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8"
  "accept-encoding"="gzip, deflate, br, zstd"
  "accept-language"="en-US,en;q=0.5"
  "cache-control"="max-age=0"
  "dnt"="1"
  "priority"="u=0, i"
  "referer"="https://www.roblox.com/discover/?Keyword=Valkyrie%20helm"
  "sec-ch-ua"="\`"Not;A=Brand\`";v=\`"99\`", \`"Brave\`";v=\`"139\`", \`"Chromium\`";v=\`"139\`""
  "sec-ch-ua-mobile"="?0"
  "sec-ch-ua-platform"="\`"Windows\`""
  "sec-fetch-dest"="document"
  "sec-fetch-mode"="navigate"
  "sec-fetch-site"="same-origin"
  "sec-fetch-user"="?1"
  "sec-gpc"="1"
  "upgrade-insecure-requests"="1"
}`;

async function runBot() {
  console.log('🚀 Starting RBX Checker Bot...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ]
  });

  const page = await browser.newPage();
  
  // Set viewport and user agent
  await page.setViewport({ width: 1920, height: 1080 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36');

  let cycleCount = 0;

  while (true) {
    try {
      cycleCount++;
      console.log(`\n🔄 Starting cycle ${cycleCount}...`);
      
      // Navigate to the website
      console.log('📱 Navigating to rbxchecking.com...');
      await page.goto('https://rbxchecking.com/', { 
        waitUntil: 'networkidle2',
        timeout: 30000 
      });

      // Wait for and click the "Compile Item" button
      console.log('🔘 Looking for Compile Item button...');
      await page.waitForSelector('#enterButton', { timeout: 10000 });
      await page.click('#enterButton');
      console.log('✅ Clicked Compile Item button');

      // Wait for the PowerShell textarea to appear
      console.log('📝 Waiting for PowerShell textarea...');
      await page.waitForSelector('#powershellInput', { timeout: 10000 });

      // Clear and paste the PowerShell text
      console.log('📋 Pasting PowerShell code...');
      await page.click('#powershellInput');
      await page.keyboard.down('Control');
      await page.keyboard.press('a');
      await page.keyboard.up('Control');
      await page.type('#powershellInput', POWERSHELL_TEXT);
      console.log('✅ PowerShell code pasted');

      // Click the Enter button
      console.log('🔘 Looking for Enter button...');
      await page.waitForSelector('#submitButton', { timeout: 10000 });
      await page.click('#submitButton');
      console.log('✅ Clicked Enter button');

      // Wait 2 seconds before reloading
      console.log('⏱️ Waiting 2 seconds...');
      await page.waitForTimeout(2000);

      console.log(`✅ Cycle ${cycleCount} completed successfully`);

    } catch (error) {
      console.error(`❌ Error in cycle ${cycleCount}:`, error.message);
      console.log('🔄 Continuing to next cycle...');
    }

    // Small delay between cycles to avoid overwhelming the server
    await page.waitForTimeout(1000);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n👋 Bot stopped by user');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n👋 Bot stopped by system');
  process.exit(0);
});

// Start the bot
runBot().catch(error => {
  console.error('💥 Fatal error:', error);
  process.exit(1);
});
