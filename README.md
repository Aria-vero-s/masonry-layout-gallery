# Masonry Gallery for Photographer Portfolio

A photographer portfolio website featuring a **masonry-style gallery** with **modal image viewing** and **fullscreen functionality**. The project also includes an **About page** and a **Contact form** to provide a complete and professional showcase for photographers.

View live link: [here](https://aria-vero-s.github.io/masonry-layout-gallery/)

---

## Features

### Masonry Gallery
- **Dynamic Layout:** A masonry grid layout that dynamically arranges images for a modern and visually appealing display.
- **Responsive Design:** The gallery adapts seamlessly to different screen sizes, ensuring an excellent viewing experience on desktop and mobile devices.
- **Hover Effects:** Smooth hover effects on images to enhance interactivity and provide visual feedback.

### Modal Image Viewer
- **Fullscreen Modal:** Clicking on an image opens it in a modal for a focused, high-resolution view.
- **Close Button:** A clear and accessible close button (×) to exit the modal.
- **Keyboard Navigation:** Use the `Esc` key to close the modal quickly.

### Fullscreen Functionality
- **Fullscreen Button:** A dedicated butto inside the modal to view images in fullscreen mode.
- **Cross-Browser Support:** Works on major browsers (Chrome, Firefox, Safari, Edge, etc.) with fallback compatibility for older ones.

### About Page
- A section to introduce the photographer, showcasing their style, background, and inspirations.

### Contact Form
- A simple and effective contact form for potential clients to reach out. Fields include:
  - Name
  - Email Address
  - Message
- **Validation:** Basic validation to ensure proper form submission.

---

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/username/masonry-gallery-portfolio.git
   cd masonry-gallery-portfolio
   ```

2. **Open the Project:**
   Simply open the `index.html` file in your preferred browser.

3. **Optional:** Set up a local server for better performance:
   ```bash
   # Using Python's built-in HTTP server
   python -m http.server
   ```

4. Navigate to `http://localhost:8000` in your browser.

---

## Usage

### Gallery Interaction
1. Browse through the masonry grid to explore images.
2. Click on any image to open it in a fullscreen modal.
3. Use the **close button (×)** or press the `Esc` key to exit the modal.
4. Click the **fullscreen button (⛶)** to view the image in fullscreen mode.

### About Page
- Learn more about the photographer and their journey.

### Contact Form
- Fill in the form with your name, email, and message.
- Submit to reach out to the photographer directly.

---

## Project Structure

```
.
|-- index.html           # Main HTML file containing the gallery
|-- about.html           # About page
|-- contact.html         # Contact form
|-- styles.css           # Main stylesheet for the project
|-- scripts.js            # JavaScript for interactivity
|-- README.md            # This README file
```

---

## Technologies Used

- **HTML5** for structure
- **CSS3** for styling
  - Flexbox and Grid for responsive design
- **JavaScript** for interactivity
  - Modal image viewer
  - Fullscreen API

---

## Future Enhancements

1. **Keyboard Navigation in Modal:** Add support for arrow keys to navigate between images while in the modal.
2. **Image Lazy Loading:** Improve performance by loading images on demand as the user scrolls.
3. **Contact Form Backend:** Integrate the contact form with a backend service (e.g., Node.js, PHP, or Formspree) for actual email delivery.

---

## Credits

- All images used in the gallery are either placeholders or credited to their respective photographers.
- Icons provided by Font Awesome.

---

## License

This project is licensed under the MIT License. Feel free to use and modify it for personal or commercial use.
