# 📱 User Directory App

A React Native CLI application built as an assignment that displays a list of users fetched from a public API. The application includes a searchable user list, detailed user profiles, dark/light theme support, and a clean, reusable architecture.

---

## 🚀 Features

- ✨ Splash Screen with automatic navigation
- 👥 Fetch users from a public REST API
- 🔍 Search users by name
- ⏱️ Debounced search for better performance
- 👤 User Details screen
- 🌙 Dark & Light Theme using Redux Toolkit
- 🔄 Pull to Refresh
- 📦 TanStack Query for server state management and caching
- 📡 Axios for API integration
- 🧩 Reusable UI Components
- ⚡ Optimized rendering using `React.memo`, `useMemo`, and `useCallback`
- 📱 Responsive UI for Android devices

---

## 🛠️ Tech Stack

- React Native CLI
- TypeScript
- Redux Toolkit
- React Navigation (Stack Navigator)
- TanStack Query (React Query)
- Axios
- React Native Safe Area Context

---

## 📂 Project Structure

```
src
│
├── api
├── components
├── hooks
├── navigation
├── redux
│   └── slices
├── screens
├── services
├── types
└── utils
```

---

## 🌐 API Used

```
https://jsonplaceholder.typicode.com/users
```

---

## 📱 Screens

### Splash Screen

- Displays app logo/title
- Automatically navigates to User List after 3 seconds

### User List

- Fetches users from API
- Search functionality
- Pull to Refresh
- Theme Toggle
- Navigate to User Details

### User Details

Displays:

- Name
- Username
- Email
- Phone
- Website
- Company
- Address
- Geo Coordinates

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install iOS Pods (macOS only)

```bash
cd ios
pod install
cd ..
```

### 4. Start Metro Bundler

```bash
npm start
```

### 5. Run Android

```bash
npx react-native run-android
```

### 6. Run iOS

```bash
npx react-native run-ios
```

---

## 📦 APK Installation

A pre-built Android APK is included with the submission.

### Steps

1. Copy the APK to your Android device.
2. Enable **Install from Unknown Sources** if prompted.
3. Install the APK.
4. Open the application and explore all features.

> No additional setup is required when using the provided APK.

---

## 🎯 Architecture Highlights

- Feature-based folder structure
- Reusable components
- Redux Toolkit for global theme state
- TanStack Query for API caching
- Custom debounce hook
- Separation of API, UI, navigation, and business logic

---

## 🔥 Performance Optimizations

- React.memo
- useMemo
- useCallback
- Debounced Search
- TanStack Query Cache

---

## 📸 Application Flow

```
Splash Screen
      │
      ▼
 User List
      │
      ├── Search Users
      ├── Pull To Refresh
      ├── Theme Toggle
      ▼
 User Details
```

---

## 👨‍💻 Developed By

**Sujit**

---

## 🙏 Thank You

Thank you for reviewing this assignment. I appreciate your time and consideration.

I hope this project demonstrates my understanding of React Native fundamentals, state management, API integration, reusable component design, and clean code practices.