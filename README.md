# Authentication App - Documentation

## 📋 Overview
A fully functional authentication system built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. Features user registration, login, password reset, and a protected dashboard.

## 🎯 Features
- ✅ User Registration with validation
- ✅ Login with email/password authentication
- ✅ Forgot Password & Reset Password flow
- ✅ Protected Dashboard (requires login)
- ✅ Logout functionality
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth transitions and hover effects
- ✅ Form validation with helpful error messages

## 🗂️ Project Structure

```
auth-app/
├── index.html              # Login page
├── register.html           # Registration page
├── forgot-password.html    # Forgot password form
├── reset-password.html     # Password reset form
├── dashboard.html          # Protected dashboard
├── CSS/
│   └── styles.css          # Custom styles with CSS variables
├── constants.js            # Global constants and configuration
├── auth-helpers.js         # Shared authentication utilities
└── README.md               # This file
```

## 🚀 Getting Started

### 1. Open the App
Simply open `index.html` in your web browser. No server or installation required.

### 2. Register a New Account
- Click "Register" link on login page
- Fill in username, email, password
- Password must be at least 8 characters
- Email must be in valid format (user@domain.com)
- Click "Register" to create account

### 3. Login
- Return to login page
- Enter registered email and password
- Click "Login" button
- You'll be redirected to dashboard

### 4. Reset Password
- From login page, click "Forgot Password?"
- Enter registered email
- Click "Send Reset Link"
- You'll be redirected to reset page
- Enter new password (8+ characters)
- Confirm password and click "Update Password"
- Return to login and use new password

### 5. Logout
- From dashboard, click "Logout" button
- You'll be redirected to login page

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| HTML5 | - | Page structure |
| CSS3 | - | Styling & animations |
| Bootstrap | 5.3.2 | Responsive UI framework |
| JavaScript (Vanilla) | ES6 | Form logic & auth |
| localStorage | - | Client-side data storage |

## 📝 File Descriptions

### HTML Files

#### index.html
- **Purpose**: Login page
- **Form Fields**: Email, Password
- **Validation**: Email format, non-empty fields
- **Imports**: constants.js, auth-helpers.js

#### register.html
- **Purpose**: User registration
- **Form Fields**: Username, Email, Password, Confirm Password
- **Validation**: All fields required, email format, password length (8+), password match, duplicate email check
- **Imports**: constants.js, auth-helpers.js

#### forgot-password.html
- **Purpose**: Initiate password reset
- **Form Fields**: Email
- **Validation**: Email format, email exists in system
- **Action**: Stores email in localStorage for reset flow
- **Imports**: constants.js, auth-helpers.js

#### reset-password.html
- **Purpose**: Reset user password
- **Form Fields**: New Password, Confirm Password
- **Features**: Show/hide password toggle with eye icon
- **Validation**: Password length (8+), password match, reset flow verification
- **Imports**: constants.js, auth-helpers.js

#### dashboard.html
- **Purpose**: Protected user dashboard
- **Features**: Displays welcome message with username, navbar with logout
- **Protection**: Redirects to login if not authenticated
- **Imports**: constants.js, auth-helpers.js

### JavaScript Files

#### constants.js
Centralized configuration file containing:
- `STORAGE_KEYS`: localStorage key names
- `PASSWORD_REQUIREMENTS`: Password validation rules
- `ROUTES`: Page route constants
- `VALIDATION_MESSAGES`: User-facing error messages
- `EMAIL_REGEX`: Email validation pattern

#### auth-helpers.js
Utility functions for authentication:
- `isValidEmail(email)`: Email format validation
- `getAllUsers()`: Retrieve all users with error handling
- `saveUsers(users)`: Save users array with error handling
- `getCurrentUser()`: Get logged-in user
- `setCurrentUser(user)`: Set logged-in user
- `clearCurrentUser()`: Logout user
- `findUserByEmail(email)`: Search user by email
- `authenticateUser(email, password)`: Verify credentials
- `registerUser(username, email, password)`: Create new user
- `updateUserPassword(email, newPassword)`: Change password
- `setPasswordResetEmail(email)`: Store reset email
- `getPasswordResetEmail()`: Retrieve reset email
- `clearPasswordResetEmail()`: Clear reset state
- `redirectTo(page)`: Navigate to page

### CSS File

#### styles.css
Custom styling featuring:
- Google Fonts (Roboto)
- CSS Variables for maintainability
- Gradient background
- Card hover effects
- Custom button styling
- Form input focus states
- Responsive design breakpoints
- Smooth transitions

## 🔒 Data Storage

### User Object Structure
```javascript
{
  username: "string",
  email: "string",
  password: "string"  // ⚠️ Stored in plain text (development only)
}
```

### LocalStorage Keys
- `users`: Array of all registered users
- `currentUser`: Currently logged-in user object
- `passwordResetEmail`: Temporary email for password reset flow

## ⚠️ Security Considerations

### Current Limitations (Development Only)
❌ Passwords stored in plain text
❌ No backend authentication
❌ No password hashing
❌ localStorage is not secure (browser dev tools can inspect)
❌ No HTTPS encryption
❌ No rate limiting on attempts

### For Production, Add:
✅ Backend API with Node.js/Express/Django
✅ Password hashing (bcrypt, argon2)
✅ JWT tokens for sessions
✅ HTTPS/SSL encryption
✅ Database (PostgreSQL, MongoDB)
✅ Rate limiting
✅ Input sanitization
✅ CORS protection
✅ Account lockout after failed attempts

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --primary-color: #4e73df;
  --hover-color: #2e59d9;
  --success-color: #1cc88a;
  --warning-color: #f6c23e;
}
```

### Modify Validation Rules
Update in `constants.js`:
```javascript
const PASSWORD_REQUIREMENTS = {
  MIN_LENGTH: 10,  // Change minimum length
  MIN_LENGTH_MESSAGE: 'Password must be at least 10 characters.'
};
```

### Change Page Routes
Update in `constants.js`:
```javascript
const ROUTES = {
  LOGIN: 'login.html',  // Rename pages as needed
  DASHBOARD: 'home.html'
};
```

## 🐛 Troubleshooting

### "Email not found" on Forgot Password
- Make sure you registered with that exact email
- Email is case-sensitive in the system

### "Passwords do not match"
- Ensure both password fields are identical
- Check for extra spaces

### Stuck on dashboard / Can't login
- Clear browser localStorage: Press F12 → Application → Clear Storage
- Try registering a new account

### Can't reset password
- Make sure you completed the "Forgot Password" form first
- Don't navigate directly to reset-password.html

## 📊 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Android)

## 📝 Code Quality
- ✅ JSDoc comments on all functions
- ✅ Centralized constants
- ✅ Error handling with try-catch
- ✅ No code duplication
- ✅ Consistent naming conventions
- ✅ Bootstrap 5 best practices
- ✅ Responsive mobile design

## 📚 Learning Resources
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript Regex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)

## 📄 License
This project is open source and available for personal and educational use.

---

**Last Updated**: March 24, 2026
**Version**: 2.0
**Status**: Production-ready (client-side demo)
