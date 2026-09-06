# 🌍 Pavani Gudupu — 3D Developer Portfolio

A modern, responsive and interactive personal portfolio built using React and React Three Fiber.

The portfolio combines traditional web UI with an interactive 3D environment and supports responsive layouts and Day/Night themes.

---

## ✨ Features

- Responsive design
- Interactive 3D floating island
- Day / Night theme
- Responsive navigation bar
- Smooth section navigation
- Vertical social links
- Mouse-based 3D parallax
- Gentle floating 3D animation
- Responsive About section
- Responsive Projects section
- Day/Night backgrounds
- Mobile and tablet support

---

## 🛠 Tech Stack

### Frontend

- React
- JavaScript
- HTML5
- CSS3

### 3D

- Three.js
- React Three Fiber
- Drei

### UI

- React Icons
- Google Fonts

### Development

- Vite
- Git
- GitHub
- VS Code

---

## 📁 Project Structure

```text
src/
│
├── components/
│   ├── FloatingIsland.jsx
│   ├── Navbar.jsx
│   ├── Scene.jsx
│   └── SocialLinks.jsx
│
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│
├── styles/
│   ├── Hero.css
│   ├── Navbar.css
│   ├── SocialLinks.css
│   ├── About.css
│   └── Projects.css
│
├── App.jsx
├── main.jsx
└── index.css



🏠 Hero Section

The Hero section is the main landing experience of the portfolio.

It contains:

Full-screen environmental background
3D floating island
Introduction
Software Developer title
Project and Contact buttons
Responsive navbar
Social links
Day/Night toggle
3D Responsive Scaling

The 3D island dynamically scales according to the available viewport:

const scale = Math.min(
  viewport.width * 0.055,
  viewport.height * 0.055
);

This allows the model to adapt across desktop, tablet and mobile screens.

🌊 3D Animation

The island uses a gentle floating animation:

const floating =
  Math.sin(state.clock.elapsedTime * 1.8) * 0.12;

Mouse movement is also used to create a subtle parallax interaction.

const targetX = mouseX.current * 0.28;

const targetY =
  floating - mouseY.current * 0.18;

The animation intentionally avoids continuous island rotation because rotation caused parts of the model to be clipped by the available canvas area.

☀️🌙 Day / Night Theme

Theme state is maintained at the application level.

const [isNight, setIsNight] = useState(false);

It is then passed to individual sections:

<Hero isNight={isNight} />
<About isNight={isNight} />
<Projects isNight={isNight} />
<Contact isNight={isNight} />

The Navbar controls the theme:

<Navbar
  isNight={isNight}
  setIsNight={setIsNight}
/>

Sections can therefore independently style their Day and Night appearance while sharing the same global theme.

👩‍💻 About Section

The About section introduces the developer through a more detailed visual layout.

It includes:

Personal profile image
About Me introduction
Education
Experience
Location
Developer quote
Statistics/highlights
Technology stack
Responsive layout
Day/Night backgrounds

The section uses its own visual identity while maintaining the blue design language of the portfolio.

🚀 Projects Section

The Projects section showcases development work using responsive project cards.

Current project categories include:

Inventory Management
CodeLoomer
Personal Portfolio

Each project can contain:

Project title
Description
Technology stack
GitHub link
Live demo link
Project category

The section includes subtle 3D-inspired accents and responsive glass-style project cards without duplicating the About section layout.

🔗 Social Links

The Hero section contains vertical social links for:

LinkedIn
GitHub
Email

The links are positioned independently from the Hero content and adapt appropriately for smaller screens.

📱 Responsive Design

The portfolio is designed around three main responsive ranges.

Desktop
> 1100px
Tablet
769px – 1100px
Mobile
≤ 768px

Additional adjustments are used for small mobile devices.

The responsive 3D layout is considered a core part of the design and should not be changed unnecessarily.

🎨 Design Direction

The portfolio follows a nature-inspired 3D visual language.

The goal is to create an environment that feels:

Modern
Creative
Professional
Atmospheric
Interactive

Nature/environmental elements may include clouds, mountains, trees, water and subtle 3D accents.

The design intentionally avoids making later sections excessively fantasy-like or game-like.

🚧 Current Development Status
Section	Status
Hero	✅ Completed
Responsive 3D Layout	✅ Completed
3D Floating Animation	✅ Completed
Mouse Parallax	✅ Completed
Navbar	✅ Completed
Social Links	✅ Completed
Day/Night Theme	✅ Completed
About	✅ Completed
Projects	✅ Completed
Contact	🚧 Development / Refinement
Final Responsive Testing	⏳ Pending
Deployment	⏳ Pending
▶️ Run Locally

Clone the repository:

git clone <repository-url>

Enter the project:

cd <project-folder>

Install dependencies:

npm install

Start the Vite development server:

npm run dev

Then open the local URL displayed by Vite.

👩‍💻 Developer

Pavani Gudupu

Software Developer

Interested in building responsive, useful and visually engaging web applications.