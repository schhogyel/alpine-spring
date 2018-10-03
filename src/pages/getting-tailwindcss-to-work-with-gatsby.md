---
title: 'Getting TailwindCSS to work with Gatsby'
date: '2018-09-27'
---

If you are familiar with [React](https://reactjs.org), it makes great sense to write your own blog/portfolio site with Gatsby.
[Gatsby](https://www.gatsbyjs.org) is not only blazing fast as it says, it is also a great piece of technology to develop with.

The way it uses GraphQL to connect your data from any sources is simply extraordinary for a _static_ site.

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
