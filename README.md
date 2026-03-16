# CV

My online CV. Hosted at [rupertmckay.com/cv](https://rupertmckay.com/cv).

## Generate PDF

The HTML is the source of truth. To generate a PDF version:

```sh
npm install
npm run generate-pdf
```

This outputs `assets/rupertmckay.pdf` using Puppeteer to render the HTML with print-optimised styles.
