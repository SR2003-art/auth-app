// Global configuration and messages
const STORAGE_KEYS = {
  USERS: 'users',
  CURRENT_USER: 'currentUser',
  PASSWORD_RESET_EMAIL: 'passwordResetEmail'
};

const PASSWORD_REQUIREMENTS = {
  MIN_LENGTH: 8
};

const ROUTES = {
  LOGIN: 'index.html',
  REGISTER: 'register.html',
  FORGOT_PASSWORD: 'forgot-password.html',
  RESET_PASSWORD: 'reset-password.html',
  DASHBOARD: 'dashboard.html'
};

const VALIDATION_MESSAGES = {
  ALL_FIELDS_REQUIRED: 'Please fill in all required fields.',
  INVALID_EMAIL: 'Please enter a valid email address.',
  SHORT_PASSWORD: `Password must be at least ${PASSWORD_REQUIREMENTS.MIN_LENGTH} characters.`,
  PASSWORDS_NOT_MATCH: "Passwords do not match.",
  REGISTRATION_SUCCESS: 'Registration successful. Please login.',
  ENTER_RESET_EMAIL: 'Please enter your email to receive reset instructions.',
  RESET_LINK_SENT: 'Reset link (simulated) sent. Please continue to reset page.',
  EMAIL_NOT_FOUND: 'No account found for that email address.',
  NEW_PASSWORD_REQUIRED: 'Please enter a new password.',
  START_FROM_FORGOT: 'Please initiate the reset flow from the Forgot Password page.',
  PASSWORD_UPDATED: 'Your password was updated. Please login with the new password.'
};

const EMAIL_REGEX = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
