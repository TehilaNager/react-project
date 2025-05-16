# 📇 Cards Management App (React + Vite)

## 📌 Project Overview

This project is a web-based application for managing business cards. It was built using **React** and includes user authentication, role-based access, and an admin dashboard (CRM). Business users can create and manage cards, while admins can manage users and permissions.

## 🧩 Features

### 🔐 User Authentication

- Secure login and registration with password validation using regex.
- JWT token is saved in localStorage for session management.
- Role-based access: Guest, Regular User, Business User, Admin.

### 🧾 Card Management

- Business users can create, update, and delete their own cards.
- All users can view cards and card details.
- Users can like/unlike cards and save them as favorites.
- Users can view a list of their own cards and their favorite cards.

### 🛠 Admin Dashboard (CRM)

- Admins can access a CRM page with a full list of registered users.
- Admins can:
  - Edit user information and update their profile details.
  - Change user roles (Business/Regular).
  - Delete users (excluding other admins).

### 🖼 UI & UX

- Fully responsive layout using **Bootstrap** with some custom CSS.
- Dynamic navigation and footer based on user permissions.
- Light/Dark mode toggle.
- Accessibility: all images include `alt` tags, proper page titles and favicon.

### 🗺 Business Details Page

- Clicking a card shows full business details on a dedicated landing page.
- Includes business location with dynamic map using Google Maps API or similar.

### 🧾 Forms & Validation

- Real-time form validation with visual feedback under each field.
- Password must include:
  - At least one lowercase letter
  - At least one uppercase letter
  - At least one number
  - At least one special character (!@#$%^&\_-\_\_)
  - Minimum of 8 characters
- Users receive success/failure notifications after form submissions.

## 🖥️ Technologies Used

- React + Vite
- Axios
- React Router
- Bootstrap + custom CSS
- JWT (Token-based Auth)
- Regex validation
- Google Maps API
- LocalStorage

## 🔌 API Integration

- All data is managed via RESTful API.
- Axios is used for HTTP requests with `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.
- JWT tokens from the server are used for authorization and permissions.

## 🧪 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/TehilaNager/react-project
   cd react-project
   ```

---

## 👩‍💻 Author

**Tehila Nagar**  
Final React Project – HackerU  
2025
