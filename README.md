# JEE Books Store Website

A beautiful, responsive website to showcase and sell your used JEE preparation books with WhatsApp integration.

## Features

✅ **Search Functionality** - Search books by title or author  
✅ **Subject Filters** - Filter by Physics, Chemistry, Mathematics, or view All  
✅ **WhatsApp Integration** - Direct messaging with pre-filled text  
✅ **Full Image View** - Click any book image to see it in full screen  
✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop  
✅ **Modern UI** - Clean and professional design  
✅ **Easy to Update** - Simple configuration in `script.js`

## Quick Start

### 1. Customize Your Website

Open `script.js` and update the following:

#### A. Add Your WhatsApp Number
```javascript
// Line 8 - Replace with your WhatsApp number
const WHATSAPP_NUMBER = "919876543210"; // Format: country code + number (no + or spaces)
```

**Example:**
- India: +91 9876543210 → `"919876543210"`
- USA: +1 2025551234 → `"12025551234"`
- UK: +44 7700900123 → `"447700900123"`

#### B. Update Your Books

Replace the `BOOKS_DATA` array (starting at line 11) with your actual books:

```javascript
const BOOKS_DATA = [
    {
        id: 1,
        title: "Your Book Title",
        author: "Author Name",
        subject: "Physics", // or "Chemistry" or "Mathematics"
        condition: "Good - Minor wear",
        originalPrice: 800,
        sellingPrice: 400,
        image: "path/to/your/image.jpg" // See image instructions below
    },
    // Add more books...
];
```

### 2. Add Book Images

You have three options for book images:

**Option A: Use Your Own Photos** (Recommended)
1. Take clear photos of your books
2. Create an `images` folder in your project
3. Add photos to the `images` folder
4. Update image path: `image: "images/physics-vol1.jpg"`

**Option B: Use Online Images**
- Upload images to a service like Imgur or Google Drive (make public)
- Use the direct image URL

**Option C: Keep Placeholder Images**
- The current placeholder images will work but won't show your actual books

### 3. Deploy to GitHub Pages

#### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon (top right) → "New repository"
3. Name it: `jee-books-store` (or any name you like)
4. Keep it **Public**
5. Click "Create repository"

#### Step 2: Upload Your Files

**Method A: Using GitHub Website (Easiest)**

1. On your repository page, click "Add file" → "Upload files"
2. Drag and drop these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images` folder (if you have one)
3. Click "Commit changes"

**Method B: Using Git Command Line**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/jee-books-store.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 1-2 minutes, then visit: `https://YOUR-USERNAME.github.io/jee-books-store/`

**That's it! Your website is now live! 🎉**

## File Structure

```
jee-books-store/
│
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # Book data and functionality
├── images/             # Your book photos (optional)
│   ├── book1.jpg
│   ├── book2.jpg
│   └── ...
└── README.md          # This file
```

## Customization Guide

### Changing Colors

Edit `style.css` to customize colors:

```css
/* Primary color (buttons, badges) */
.filter-btn.active {
    background: #2563eb; /* Change this hex color */
}

/* WhatsApp button color */
.whatsapp-btn {
    background: #22c55e; /* Change this hex color */
}
```

### Adding More Books

Add new book objects to the `BOOKS_DATA` array in `script.js`:

```javascript
{
    id: 10, // Make sure ID is unique
    title: "New Book Title",
    author: "Author Name",
    subject: "Physics",
    condition: "Excellent",
    originalPrice: 700,
    sellingPrice: 350,
    image: "images/new-book.jpg"
}
```

### Removing Books

Simply delete the book object from the `BOOKS_DATA` array.

## Tips for Better Results

1. **Take Good Photos**
   - Use good lighting
   - Show the book cover clearly
   - Include a photo showing condition (if needed)

2. **Write Clear Conditions**
   - Be honest about highlighting, wear, missing pages, etc.
   - Examples: "Excellent - Like new", "Good - Minor highlighting", "Fair - Heavy use"

3. **Price Competitively**
   - Check OLX/Quikr for similar books
   - Usually 40-60% of original price works well

4. **Respond Quickly**
   - Keep WhatsApp notifications on
   - Reply to buyers within a few hours

## Troubleshooting

**Website not showing after deploying?**
- Wait 2-3 minutes after enabling GitHub Pages
- Make sure the repository is Public
- Check that `index.html` is in the root folder

**WhatsApp link not working?**
- Verify your WhatsApp number format (no + or spaces)
- Make sure WhatsApp is installed on your phone
- Test by clicking a button yourself

**Images not showing?**
- Check image file paths are correct
- Make sure images are uploaded to GitHub
- Verify image URLs are accessible

**Books not appearing?**
- Check browser console for errors (F12 → Console tab)
- Verify `BOOKS_DATA` syntax is correct (no missing commas, brackets)

## Support

If you face any issues:
1. Double-check the configuration in `script.js`
2. Make sure all files are uploaded to GitHub
3. Clear your browser cache and refresh

## License

Free to use and modify for personal use.

---

**Made with ❤️ for JEE aspirants**

Good luck with your book sales! 📚
