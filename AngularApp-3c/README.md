# Angular User Management App

A simple Angular application for user registration, login, and profile display without a backend. User data is stored in browser localStorage.

## Features

- **Register**: Create a new user account with name, email, and password
- **Login**: Authenticate with email and password
- **Profile**: View logged-in user information
- **Logout**: Clear session and return to login

## Project Structure

```
AngularApp/
├── src/
│   ├── app/
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   ├── login.component.html
│   │   │   └── login.component.css
│   │   ├── register/
│   │   │   ├── register.component.ts
│   │   │   ├── register.component.html
│   │   │   └── register.component.css
│   │   ├── profile/
│   │   │   ├── profile.component.ts
│   │   │   ├── profile.component.html
│   │   │   └── profile.component.css
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── models/
│   │   │   └── user.model.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the application:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:4200`

## Usage

1. **Register a new user**:
   - Navigate to the register page
   - Fill in name, email, and password (min 6 characters)
   - Confirm password
   - Click "Register"

2. **Login**:
   - Enter your registered email and password
   - Click "Login"

3. **View Profile**:
   - After successful login, you'll be redirected to the profile page
   - See your name and email
   - Click "Logout" to end session

## Technical Details

- **Storage**: Uses browser localStorage to store user data
- **Routing**: Angular Router for navigation between pages
- **Forms**: Angular FormsModule with two-way data binding
- **Validation**: Client-side form validation
- **State Management**: RxJS BehaviorSubject for current user state

## Routes

- `/` - Redirects to login
- `/login` - Login page
- `/register` - Registration page
- `/profile` - User profile page (protected)

## Notes

- This is a demo application without a real backend
- Passwords are stored in localStorage (NOT secure for production)
- All data is stored locally in the browser
- Clear browser data to reset the application
