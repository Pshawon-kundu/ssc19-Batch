# 🚀 Deployment Guide: GitHub & Vercel

Your project is ready! I have already initialized a local Git repository for you.
Follow these steps to put it online.

## Step 1: Upload to GitHub

1.  **Log in to GitHub** and [create a new repository](https://github.com/new).
    - Name it something like `ifter-registration`.
    - Make it **Public** (easier) or **Private**.
    - **Uncheck** "Initialize with README", "Add .gitignore", etc. (We already have these).
    - Click **Create repository**.
2.  **Copy the commands** from the section **"…or push an existing repository from the command line"**.
    - It will look like this:
      ```bash
      git remote add origin https://github.com/YOUR_USERNAME/ifter-registration.git
      git branch -M main
      git push -u origin main
      ```
3.  **Run those commands** in your terminal (inside the `ifter` folder).
    - If you are asked to log in, follow the prompts.

## Step 2: Deploy to Vercel

1.  Go to [Vercel](https://vercel.com) and **Log in**.
2.  Click **"Add New..."** -> **"Project"**.
3.  On the **Import Git Repository** screen, find your new `ifter-registration` repo and click **Import**.
4.  **Configure Project**:
    - **Framework Preset**: Vercel should auto-detect "Vite".
    - **Build Command**: `vite build` (default is correct).
    - **Output Directory**: `dist` (default is correct).
    - **Install Command**: `npm install` (default is correct).
5.  Click **Deploy**.

## Step 3: Success! 🎉

- Vercel will build your site and give you a live URL (e.g., `ifter-registration.vercel.app`).
- **Test it**: Open the URL on your phone or computer. The registration form should work perfectly!

---

### 💡 Troubleshooting

- **If build fails**: Check the Vercel logs. Common issues are missing dependencies (I checked `package.json`, it looks good).
- **If stats don't load**: Ensure your Google Apps Script is deployed as "Anyone", so Vercel's server can access it.
