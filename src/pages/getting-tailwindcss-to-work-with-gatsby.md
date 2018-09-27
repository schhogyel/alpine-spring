---
title: 'Getting Tailwindcss to work with Gatsby'
date: '2018-09-27'
---

```
npm i gatsby-plugin-postcss precss tailwindcss autoprefixer
```

```
./node_modules/.bin/tailwind init
```

```javascript
//In postcss.config.css
module.exports = {
  plugins: [
    require(`precss`),
    require(`tailwindcss`)(`./tailwind.js`),
    require(`autoprefixer`)(),
  ],
}
```

```javascript
//In gatsby-config.js
module.exports = {
...
  plugins: [
    `gatsby-plugin-postcss`
    ...
  ],
}
```

```css
@tailwind preflight;
@tailwind component;
@tailwind utilities;
```
