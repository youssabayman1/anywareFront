# 🚀 Getting Started with Anyware Frontend

This project is built using **Create React App**, styled with **Material UI**, and supports multilingual translation using **i18next**.

## 🧩 Tech Stack

- ⚛️ React (CRA)
- 🎨 Material UI (MUI v5)
- 🌍 i18next (for translation)
- 🔄 Redux Toolkit (state management)
- 🔗 Axios (API calls to backend)
- 🧪 Testing support via Jest (CRA default)

---

## 📦 Features

- 📝 Fetch announcements and quizzes from a backend server.
- 🌐 i18n integration to support multiple languages.
- 🧠 Modern UI with Material UI components.
- 🔐 Simple login page using Redux auth flow.
- 🖥 Runs on port **3000** with `npm start`.

---

## 📁 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode on [http://localhost:3000](http://localhost:3000).

### `npm test`

Runs the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

---

## 🔑 Authentication

The project includes a basic login page. After clicking the login button, the user is redirected to the dashboard (authentication is handled via Redux logic only – no real auth service).

---

## 🌍 Internationalization (i18n)

The project uses `react-i18next` for language translation. You can easily switch between supported languages using configuration in `i18n.js`.

---

## 🧪 Backend Integration

Data for:

- **Announcements**
- **Quizzes**

...is fetched from a Node.js backend via REST APIs using Axios. You’ll find the logic inside the `redux/action/` folder.

---

## 🛠 Custom Components

- `WhatsDueCard`: Shows upcoming quizzes and assignments.
- `DueItem`: Reusable card for each quiz/assignment.
- `LoginPage`: Basic login screen using Material UI.

---

## 🧠 How to Run

1. Clone the repo:
   ```bash
 -  git clone https://github.com/your-username/anyware-frontend.git](https://github.com/youssabayman1/anywareFront.git
  - cd anyware-frontend
- Install dependencies:npm install
   
-Start the app:npm run start


