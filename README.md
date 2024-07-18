# Foxi - Astro Theme

Open-source Astro website template with fully responsive, customizable TailwindCSS components.

[![View live Demo](https://oxygenna-themes.b-cdn.net/foxi-astro/demo-button.svg)](https://foxi-astro-theme.vercel.app/)
[![Page Speed Insights (100%)](https://oxygenna-themes.b-cdn.net/foxi-astro/insights-button.svg)](https://pagespeed.web.dev/analysis/https-foxi-astro-theme-vercel-app/n6wcy1dso0?form_factor=mobile)

![just-the-basics](https://oxygenna-themes.b-cdn.net/foxi-astro/foxi.png)

## Introduction

### About

Foxi is a free, highly customizable, and production-ready template for Astro, utilizing Tailwind CSS components. Designed with developers in mind, Foxi offers a solid foundation for building modern, high-performance websites quickly and efficiently.

![just-the-basics](https://oxygenna-themes.b-cdn.net/foxi-astro/pagespeedscore.svg)

### Features

- **Perfect Scores in PageSpeed Insights:** Achieve perfect 100s for both desktop and mobile performance.
- **Built with Tailwind CSS:** Powered by Tailwind CSS for rapid UI development and responsive design.
- **Light & Dark Mode Support:** Seamlessly switch between light and dark themes to suit user preferences.
- **Modular Design:** Mix and match content blocks effortlessly to create custom pages tailored to your needs.
- **Fully Responsive & Customizable:** Ensure your site looks great on any device, with easy customization to match your brand’s identity.
- **SEO-friendly:** Optimized for search engines to improve visibility and organic traffic.
- **Pre-designed Pages:** Includes a variety of pages such as Home, Pricing, Features, Contact, and more, to get you started quickly.
- **Blog with MDX Support & Tags:** Create dynamic blog content with Markdown and JSX, complete with tagging for better organization.
- **Easy Updates with JSON Files:** Simplify content management and updates using structured JSON files.
- **Page Loading & Transition Animations:** Enhance user experience with smooth loading and transition effects.
- **Clean Code & Folder Structure:** Maintain a well-organized codebase that’s easy to navigate and extend.
- **Heroicons by Tailwind:** Access a wide range of high-quality icons to use across your site.
- **Built-in Contact Form:** Ready-to-use contact form included.
- **Utilizes WindUI Components:** Integrates optional WindUI TailwindCSS components.
- **Modular Design:** The template is organized into reusable blocks enabling easy customization and expansion.

## Getting Started

### Commands

After downloading the template, you'll need to install some dependencies. Once that's done, you can run it on your local server. Check out the package.json file to see what scripts are available.

| Command           | Action                                                                                                   |
| :---------------- | :------------------------------------------------------------------------------------------------------- |
| `nvm use ...`     | [Install node js](https://nodejs.org/en/download/) You will need to use Node.js version 20.3.0 or later. |
| `npm install`     | Installs dependencies                                                                                    |
| `npm run dev`     | Starts local dev server at `localhost:4321`                                                              |
| `npm run build`   | Build your production site to `./dist/`                                                                  |
| `npm run preview` | Preview your build locally, before deploying                                                             |

### Folder structure

Inside Foxi Astro project, you'll see the following folders and files:

```plaintext
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── blocks/
│   │   │   └── ...
│   │   └── ui/
│   │       └── ...
│   ├── config/
│   │   └── ...
│   ├── content/
│   │   └── blog/
│   │       └── ...
│   ├── data/
│   │   └── ...
│   ├── icons/
│   │   └── ...
│   ├── layouts/
│   │   └── ...
│   ├── page-sections/
│   │   └── home/
│   │       └── ...
│   └── pages/
│       └── ...
└── package.json
```

| Directory/File           | Description                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| `public/`                | Contains static assets like images and the favicon. These files are served directly at the root URL.                               |
| `src/assets/`            | Contains all images and assets used in the project.                                                                                |
| `src/components/`        | Contains reusable components for your site. This directory is divided into `ui` for UI components and `blocks` for section blocks. |
| `src/components/blocks/` | Contains Section blocks used throughout the site.                                                                                  |
| `src/components/ui/`     | Contains individual UI components.                                                                                                 |
| `src/config/`            | Contains configuration files for the project in typescript format.                                                                 |
| `src/content/`           | Holds collection data, such as blog posts.                                                                                         |
| `src/content/blog/`      | Contains individual blog posts in markdown.                                                                                        |
| `src/data/`              | Contains JSON and md files with content data (like features, testimonials etc).                                                    |
| `src/icons/`             | Contains all icons used in the project, sourced from [Heroicons](https://heroicons.com/).                                          |
| `src/layouts/`           | Contains layout components that define the overall structure of your pages.                                                        |
| `src/pages/`             | Contains `.astro` files for each page. Each file here is exposed as a route based on its file name.                                |
| `package.json`           | Lists dependencies and scripts for your project, including metadata and various package requirements.                              |

### Contributing

## How to

### Customize the Colors

The theme uses two main colors: primary and neutral. These colors are defined in the Tailwind CSS configuration file. To personalize the color scheme of your project, you can easily modify these color values.

To customize the colors, follow these steps:

1. Open the `tailwind.config.js` file.
2. Find the `theme` section within the file.
3. Under `theme`, locate the `extend` property and then the `colors` object.
4. Modify the color values for `primary` and `neutral` to suit your preferred color palette.

You can use the [tailwind CSS colors](https://nodejs.org/en/download/) or create your [own palette](https://uicolors.app/create) .

### Customize the Fonts

To customize the fonts used in your project, follow these steps:

1. **Update the Tailwind CSS Configuration**

   Open the `tailwind.config.js` file. In the `theme` section, find the `extend` property and update the `fontFamily` object.

2. **Ensure Font Packages are Installed**

   Verify that the necessary font packages are included in your `package.json` file and also imported in the `src/layouts/Layout.astro` file.

You can add your own fonts by following [this guide](https://docs.astro.build/en/guides/fonts/#using-fontsource)

### Dark/Light Mode

By default, the site uses an automatic mode switcher, allowing it users to switch between light and dark modes based on the user's system settings or by using the mode switcher in the navigation bar. This is achioeved by setting the `mode-auto` class in the `Layout.astro` file.

If you need to enforce a specific theme, you can set the class above as **`mode-light`** or **`mode-dark`**. When **`mode-light`** is applied, the site will consistently display in light mode, and the switcher will not be functional. Similarly, **`mode-dark`** will force the site to dark mode, with the switcher rendered non-functional. These settings allow you to maintain a fixed appearance across the site regardless of user preferences or system settings.

## License

Copyright © 2024 - Designed & Developed by [Oxygenna](http://www.oxygenna.com/)

Released under the MIT license.

[![Hire Us](https://oxygenna-themes.b-cdn.net/foxi-astro/hireus.png)](mailto:info@oxygenna.com,christos@oxygenna.com)
