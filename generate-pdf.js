const puppeteer = require("puppeteer");
const path = require("path");

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, "index.html");
  await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

  await page.pdf({
    path: path.resolve(__dirname, "assets", "rupertmckay.pdf"),
    format: "A4",
    printBackground: true,
    margin: { top: "0.5cm", bottom: "0.5cm", left: "0.7cm", right: "0.7cm" },
  });

  await browser.close();
  console.log("PDF generated: assets/rupertmckay.pdf");
}

generatePDF();
