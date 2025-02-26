# Yadong Hou - Personal Homepage

This repository contains my personal homepage, built as part of the CS5356 HW3 assignment. The site is deployed on GitHub Pages at:
[https://meridah7.github.io/cs5356-hw3/](https://meridah7.github.io/cs5356-hw3/)

## Features and Implementation Details

### GitHub Repository & Version Control (1pt)
- I created a repository named `cs5356-hw3` on GitHub.
- I used Git locally and committed multiple times during development to track progress.
- The project is continuously pushed to the GitHub repository.

### GitHub Pages Deployment (2pts)
- GitHub Pages is enabled and configured to serve the site from the repository.
- I included a `.nojekyll` file to bypass GitHub Pages' default Jekyll build, allowing direct serving of my hand-written HTML files.
- The site is accessible at `https://meridah7.github.io/cs5356-hw3/`.

### Content: Image & Bio (1pt)
- The homepage includes a personal photo (stored in the repository under `images`) and a brief biography/introduction.
- Additional images are used in the Travel Logs and Pets sections.

### Semantic HTML (1pt)
- The webpage uses semantic HTML elements such as `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- These elements help improve accessibility and SEO.

### CSS Layout with Grid & Flexbox (2pts)
- The main layout uses CSS Grid (`display: grid;`) to create a responsive two-column design that adjusts for various screen sizes (375px to 1512px).
- Flexbox is used for elements like the tab navigation and photo galleries to ensure flexible, responsive layouts.
- Media queries are implemented to adjust the layout on smaller screens.

### Unfamiliar HTML Element: `<details>` (1pt)
- I added a `<details>` element in the "About Me" section to display additional information about my interests (camping, hiking, airsoft, and learning new technologies).
- I learned that `<details>` provides an accessible disclosure widget that allows users to expand or collapse content without JavaScript. The `<summary>` element serves as the visible label for this expandable section.

### Unfamiliar CSS Property: `scroll-snap-type` (1pt)
- The image slider uses the CSS property `scroll-snap-type` to create a smooth, snapping scroll effect.
- I discovered that `scroll-snap-type` enables the container to snap to specific positions, making the user experience more engaging and consistent, especially in galleries or sliders.

### Fetching Data from an API (2.5pts)
- The website includes a "Tech News" section that fetches data from the Hacker News API using JavaScript's `fetch` method.
- The returned JSON data is filtered using regular expressions (based on topics like AI, AR/VR, and technology) and then dynamically rendered as news cards on the page.

## Extra Credit (Up to +3pts)
- **Additional Interactivity (1pt EC):**  
  I implemented interactive mouse effects on preview cards using the `mousemove` event. Cards rotate slightly and display dynamic shadows based on the mouse position, adding an extra layer of interactivity beyond basic CSS hover effects.
  
- **Rich Link Preview with `<meta>` Tags (1pt EC):**  
  I added Open Graph and Twitter Card meta tags in the `<head>` section to ensure that the site generates a rich preview (including title, description, and image) when shared on social platforms.
  

## How to Run
- Simply clone the repository and open the `index.html` file in a browser.
- Ensure you have an internet connection to load external resources such as the Google Fonts and the Google Maps API.

## Resources
- [MDN Web Docs](https://developer.mozilla.org/) for HTML, CSS, and JavaScript documentation.
- [GitHub Pages Documentation](https://pages.github.com/) for deploying the website.
- [Hacker News API](https://hn.algolia.com/api) for fetching news data.
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial) for embedding the map.

