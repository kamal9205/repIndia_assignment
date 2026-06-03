# 🛍️ ProductHub - Product Explorer

A modern and responsive Product Listing Application built with React, Redux Toolkit, React Router, and Tailwind CSS.

The application allows users to browse products, search products, filter by category, sort by price, view product details, and navigate through paginated results.

---

## 🚀 Live Features

### Product Listing Page

- View products from Fake Store API
- Search products by name
- Filter products by category
- Sort products by:
  - Price Low → High
  - Price High → Low
- Pagination (10 products per page)
- Responsive product grid
- Product count indicator
- Loading skeletons
- Empty state with clear filters option

### Product Detail Page

- Detailed product information
- Product image
- Category
- Price
- Rating
- Description
- Back navigation button
- Smooth page animation

### UI Enhancements

- Responsive Design
- Dark Premium Theme
- Gradient Backgrounds
- Hover Animations
- Product Image Zoom Effect
- Animated Product Cards
- Modern Navbar
- Smooth Transitions

---

## 🛠️ Tech Stack

### Frontend

- React
- React Router DOM
- Redux Toolkit
- React Redux
- Tailwind CSS
- Framer Motion
- Axios

### API

- Fake Store API

https://fakestoreapi.com/products

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── products/
│       ├── productSlice.js
│       └── productApi.js
│
├── pages/
│   ├── ProductListing.jsx
│   └── ProductDetail.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── SortDropdown.jsx
│   ├── ProductCard.jsx
│   ├── ProductSkeleton.jsx
│   └── Pagination.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
```

### Navigate to Project

```bash
cd ProductHub
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Application will start at:

```bash
http://localhost:5173
```

---

## 📦 Dependencies

```json
{
  "react": "^19",
  "react-router-dom": "^7",
  "@reduxjs/toolkit": "^2",
  "react-redux": "^9",
  "axios": "^1",
  "tailwindcss": "^4",
  "framer-motion": "^12"
}
```

---

## 🎯 Assignment Requirements Covered

### Mandatory

- React
- Functional Components
- Hooks
- Responsive Design

### Implemented Features

- Product Listing
- Product Detail Page
- Search
- Category Filter
- Sort By Price
- Pagination
- API Integration

### Bonus Features

- Redux Toolkit
- Tailwind CSS
- Framer Motion Animations
- Skeleton Loading
- Empty State UI
- Responsive Premium UI

---

## 📸 Screenshots

### Product Listing

- Responsive product grid
- Search and filters
- Pagination
- Animated cards

### Product Details

- Full product information
- Smooth page transitions
- Responsive layout

---

## 🔮 Future Improvements

- URL-based filters
- Wishlist functionality
- Cart management
- Dark/Light theme toggle
- Unit Testing
- Product comparison
- Infinite scrolling
- Favorites feature

---

## 👨‍💻 Author

Kamal 

Built using React, Redux Toolkit, Tailwind CSS, and Fake Store API.