# Paradise Nursery

Paradise Nursery is a responsive React shopping application for an online houseplant store. It includes a landing page, categorized plant catalogue, and a Redux-powered shopping cart.

## Features
- Landing page with company introduction and Get Started navigation
- 18 houseplants across three categories (six in each category)
- Product cards with image, name, price, and Add to Cart action
- Redux Toolkit cart state with add, increase, decrease, and remove actions
- Shared navigation header and live cart item count
- Cart subtotal, item totals, quantity controls, and checkout placeholder
- React Router navigation and GitHub Pages deployment configuration

## Tech stack
React, Vite, React Router, Redux Toolkit, React Redux, Lucide React, CSS.

## Run locally
1. Install Node.js (LTS).
2. In this folder run `npm install`.
3. Run `npm run dev`.
4. Open the local URL printed in the terminal.

## GitHub Pages deployment
1. Create a **public** GitHub repository named `paradise-nursery`.
2. Push this project to the repository's `main` branch.
3. Ensure `vite.config.js` has `base: "/paradise-nursery/"` (change it if your repository has a different name).
4. Run `npm run build`.
5. Run `npm run deploy`.
6. In GitHub, open **Settings → Pages** and confirm deployment from the `gh-pages` branch, root folder.
7. Your app URL will be `https://YOUR-GITHUB-USERNAME.github.io/paradise-nursery/`.

## Submission file links
After pushing to GitHub, replace `YOUR-GITHUB-USERNAME` with your GitHub username:
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/README.md`
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/src/components/AboutUs.jsx`
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/src/App.css`
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/src/App.jsx`
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/src/features/cart/CartSlice.jsx`
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/src/components/ProductList.jsx`
- `https://github.com/YOUR-GITHUB-USERNAME/paradise-nursery/blob/main/src/components/CartItem.jsx`

> Important: these links work only after the files are pushed to a public repository. Test the app and links before submitting.
