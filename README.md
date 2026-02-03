# React Todo App

This project is a simple React Todo application created using **Create React App (CRA)**.

---

## Project Creation Instructions

### 1. Check Node.js and npm
Make sure Node.js and npm are installed on your system.

Run the following commands in your terminal:

node -v  
npm -v  

Recommended versions:
- Node.js: v16 or v18 (LTS)
- npm: v6 or higher

---

### 2. Create the React Project
Create the project using the latest version of Create React App:

npx create-react-app@latest react-todos

If the command exits without doing anything, run:

npx --yes create-react-app@latest react-todos

⚠️ Create React App does NOT ask any questions.  
If it works correctly, it will immediately start installing packages and creating files.

---

### 3. If Folder Already Exists
If the `react-todos` folder already exists, delete it first:

rmdir /s /q react-todos

Then run the create command again.

---

### 4. Fix Common npx Issues (Optional)
If the command still stops unexpectedly:

npm cache clean --force  
npx create-react-app@latest react-todos

---

## Run the Project

After the project is created successfully:

cd react-todos  
npm start  

The app will open in your browser at:

http://localhost:3000

---

## Notes
- Create React App is currently in maintenance mode.
- It is still fine for learning React.
- Modern projects may use Vite + React for better performance.

---

Happy coding 🚀
