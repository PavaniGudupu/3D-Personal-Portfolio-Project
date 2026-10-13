# 3D Interactive Portfolio — Pavani Gudupu

A personal portfolio website built with React and 3D web technologies to present my profile, skills, projects, and contact information through an interactive visual experience.

The portfolio features a 3D floating island, an immersive environment, and a modern interface designed to showcase my work as a developer.
## 🌐 Live Demo: [greenyellow-jaguar-739737.hostingersite.com/](https://greenyellow-jaguar-739737.hostingersite.com/)

## 📸 Preview
<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/af921984-00e5-48fc-bf2b-710ae8e64913" />
<img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/ea4304db-7e4e-45ae-8ad8-4bc121ef2986" />


## ✨ Features

- **Interactive 3D Experience** — A floating island rendered using React Three Fiber.
- **3D Environment** — A dedicated environment component to create an immersive scene.
- **Responsive 3D Scene** — Viewport-based scaling to help adapt the 3D island to different screen sizes.
- **Home Section** — An introduction to the portfolio owner.
- **About Section** — Personal and professional information.
- **Projects Section** — A place to showcase development projects.
- **Social Links** — Quick access to LinkedIn, GitHub, and email.
- **Modern UI** — A visual design combining web development and 3D graphics.

## 🛠️ Tech Stack

- **React** — Component-based user interface.
- **JavaScript** — Application logic.
- **React Three Fiber** — Three.js rendering through React.
- **Three.js** — 3D graphics for the web.
- **React Three Drei** — Helpers and utilities for 3D scenes.
- **CSS** — Styling and layout.

## 🌍 3D Experience

The 3D scene uses React Three Fiber's `Canvas` to render the scene and utilities from React Three Drei for camera and object positioning.

Key components include:

- `FloatingIsland` — The floating island scene component.
- `DayEnvironment` — The environment component.
- `ResponsiveIsland` — Handles viewport-based scaling of the island.
- `PerspectiveCamera` and `Center` — Camera configuration and object positioning.

## 📂 Project Structure

The 3D scene includes components organized around the island and its environment. The exact directory structure may vary depending on the current repository.

```text
src/
├── components/
│   ├── FloatingIsland.jsx
│   └── DayEnvironment.jsx
├── App.jsx
└── main.jsx
```

*Update this structure to match the actual files and directories in the repository.*

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
```

### 2. Navigate to the project

```bash
cd <YOUR-PROJECT-FOLDER>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Use the local URL printed in your terminal to open the portfolio in your browser. The commands above assume the project uses a Vite-based React setup; follow the scripts defined in `package.json` if your setup differs.

## 🎯 Purpose

This project demonstrates my interest in combining frontend development with interactive 3D graphics to create an engaging personal portfolio. It brings together React components, 3D scene composition, and responsive design to present my development journey and projects.

## 👩‍💻 Author

**Pavani Gudupu**

- GitHub: [PavaniGudupu](https://github.com/PavaniGudupu)
- LinkedIn: [linkedin.com/in/pavani-gudupu](https://www.linkedin.com/in/pavani-gudupu-3b795528b/)
- Email: [pavani9419@gmail.com](pavani9419@gmail.com)

---

⭐ If you find this project interesting, feel free to explore the repository and share your feedback.
