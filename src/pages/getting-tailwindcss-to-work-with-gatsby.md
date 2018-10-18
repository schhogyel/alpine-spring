---
title: 'Getting TailwindCSS to work with Gatsby'
date: '2018-09-27'
---

If you are familiar with [React](https://reactjs.org), it makes great sense to write your own blog/portfolio site with [Gatsby](https://www.gatsbyjs.org) and that provided me with an initial inertia to explore Gatsby. After trialing a bit, it proved to be an awesome way to build static sites.

Here we want to integrate TailwindCSS with Gatsby. TailwindCSS provides yet another way to rapidly add styles to your website with its nifty utility classes.

To add support for Gatsby, we are going to add plugins and so we run:

```
npm i gatsby-plugin-postcss precss tailwindcss autoprefixer
```

This will add TailwindCSS and Gatsby plugin to our project.

Now we run tailwind init to initialize tailwind.

```
./node_modules/.bin/tailwind init
```

In postcss.config.js, add the following lines,

```javascript
//In postcss.config.js
module.exports = {
  plugins: [
    require(`precss`),
    require(`tailwindcss`)(`./tailwind.js`),
    require(`autoprefixer`)(),
  ],
}
```

And for the Gatsby config, add the postcss plugin.

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

And in styles.css file add these lines.

```css
//styles.css
@tailwind preflight;
@tailwind component;
@tailwind utilities;
```

This should give us a basic setup to run TailwindCSS with Gatsby. To use it, we just add its utility classes in the className attribute.
