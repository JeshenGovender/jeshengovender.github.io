# Jeshen Govender website

A static one-page personal brand website prepared for GitHub Pages.

## Files

- `index.html` — full site markup
- `styles.css` — styling and responsive layout
- `script.js` — reveal animations, mobile nav, config wiring
- `config.js` — contact details and optional Google Form links
- `assets/placeholders/` — placeholder images to replace with approved photography
- `assets/icons/favicon.svg` — simple favicon

## Quick deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload all files to the repository root.
3. Commit and push.
4. In GitHub, go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/root` folder.
7. Save.
8. GitHub Pages will publish the site.

## Update contact details

Open `config.js` and replace the placeholder values:

- `email`
- `phoneDisplay`
- `phoneHref`
- `instagramHandle`
- `instagramUrl`

## Activate the enquiry form

Recommended for GitHub Pages: use a published Google Form.

1. Create the form in Google Forms.
2. Click **Send**.
3. Copy:
   - the public form URL, and
   - the embed URL.
4. Paste them into `config.js`:

```js
window.JESHEN_SITE_CONFIG = {
  ...,
  googleFormEmbedUrl: 'https://docs.google.com/forms/d/e/.../viewform?embedded=true',
  googleFormPublicUrl: 'https://docs.google.com/forms/d/e/.../viewform'
};
```

If you prefer a custom HTML form that posts into Google Forms, you can add that later once the Google Form field IDs are known.

## Replace images

Recommended files to supply:

- `assets/hero-portrait.jpg` — hero portrait, portrait orientation, ideally 1600px wide
- `assets/gallery-01.jpg` — plated hero dish
- `assets/gallery-02.jpg` — portrait or media shot
- `assets/gallery-03.jpg` — in-kitchen process image
- `assets/gallery-04.jpg` — event / hosting image
- `assets/gallery-05.jpg` — brand / editorial visual
- `assets/gallery-06.jpg` — food close-up

Then update the image paths in `index.html`.

## Optional next improvements

- Add a real custom domain
- Add verified social links
- Add approved biography edits from Jeshen
- Replace placeholders with licensed photography
- Add analytics once the domain is live
