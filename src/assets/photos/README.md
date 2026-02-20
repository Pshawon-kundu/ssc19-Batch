# 📸 **HOW TO ADD YOUR PHOTOS**

## Step 1: Add Photos to This Folder

Place your event photos here with simple names like:

- `1.jpg`
- `2.jpg`
- `3.jpg`
- `4.jpg`
- `5.jpg`
- `6.jpg`

## Step 2: Where Photos Appear

Your photos will automatically appear in:

1. **Photo Gallery Preview** - In the main hero section (first 6 photos)
2. Your photos can be used in album/gallery sections

## Image Requirements

- **Format**: JPG, PNG, WebP
- **Size**: 800x600 pixels or larger
- **Aspect Ratio**: Any ratio works (will be auto-fitted)

## Example Structure

```
src/
├── assets/
│   └── photos/
│       ├── 1.jpg
│       ├── 2.jpg
│       ├── 3.jpg
│       ├── 4.jpg
│       ├── 5.jpg
│       └── 6.jpg
```

## How Files Are Referenced

In the code, photos are accessed as:

```typescript
src: "/src/assets/1.jpg";
src: "/src/assets/2.jpg";
```

Just add your image files here and they'll automatically be displayed!

## Tips

✅ Use high-quality photos  
✅ Compress images to reduce file size  
✅ Use consistent naming (1.jpg, 2.jpg, etc.)  
✅ Portrait or landscape both work

## Need Help?

If photos don't show, check:

1. File names match exactly (case-sensitive on Linux/Mac)
2. Files are actual image files
3. Console (F12) for error messages
