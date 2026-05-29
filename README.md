# 🧊 Transparent Teardown UI

> **A zero-dependency UI effect that exposes your website's raw source code as a dynamic, glowing background.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-Click_Here-blue?style=for-the-badge)](https://CoffeeUnderFlow.github.io/transparent-teardown/)

Instead of hiding the invisible CSS box model and HTML structure that makes up your website, this effect physically exposes the "motherboard." It reads the live DOM, applies a custom single-pass syntax highlighter, and places it beneath a frosted glass shell. 

## ✨ Features
* **True Transparency:** It doesn't use static background images. It uses JavaScript to grab `document.documentElement.outerHTML` and renders the actual code running the site.
* **Auto-Syntax Highlighting:** A lightweight, single-pass Regex tokenizer color-codes tags, strings, functions, and attributes without heavy libraries.
* **Dynamic Theming:** Seamlessly toggles between "Polycarbonate Light Mode" and "Neon IDE Dark Mode" (Dark Mode by default).
* **Readability Glow:** Uses dynamic `text-shadow` layers so your foreground content remains perfectly legible over the colorful background code.

## 🚀 Quick Start

You can use this exactly as it is for your portfolio, or extract the effect for an existing site.

**1. Link the CSS**
Drop the stylesheet into your `<head>` to pull in the glassmorphism effects and theme colors.
```html
<link rel="stylesheet" href="teardown.css">
