📌 Project Status

This portfolio is actively under development.

New sections, projects, animations and responsive improvements will continue to be added.


---

### `GIT_WORKFLOW.md`

This is important because from the **Projects section onward**, we're no longer going to build everything directly inside `main`.

```md
# Git Workflow — 3D Portfolio

This document defines the Git workflow used for the 3D Portfolio project.

---

# 1. Branch Strategy

The `main` branch represents the latest stable version of the portfolio.

New sections and significant features should NOT be developed directly on `main`.

Instead:

```text
main
 │
 ├── feature/projects-section
 │
 ├── feature/contact-section
 │
 ├── feature/responsive-improvements
 │
 └── feature/animations

Each major feature should have its own branch.

2. Before Starting a New Feature

Always begin from the latest main.

git checkout main

Then:

git pull origin main

Create a new branch:

git checkout -b feature/feature-name

Example:

git checkout -b feature/contact-section
3. Development

Build and test the feature inside its branch.

Example:

feature/contact-section

During development:

npm run dev

Test the section on:

Desktop
Tablet
Mobile
Day theme
Night theme

Do not merge unfinished or broken sections into main.

4. Check Changes

Before committing:

git status

Review exactly which files have changed.

You can also inspect changes using:

git diff
5. Stage Changes

Stage specific files when possible:

git add src/sections/Projects.jsx
git add src/styles/Projects.css

Or stage everything related to the completed feature:

git add .
6. Commit

Use meaningful commit messages.

Recommended format:

type: description

Examples:

git commit -m "feat: build responsive projects section"
git commit -m "feat: add day and night project themes"
git commit -m "fix: prevent hero content overlap on tablet"
git commit -m "style: improve project card layout"
7. Commit Types

Use these prefixes:

Prefix	Purpose
feat:	New feature
fix:	Bug fix
style:	Visual/CSS changes
refactor:	Code restructuring
docs:	Documentation
chore:	Maintenance/configuration
perf:	Performance improvement

Examples:

feat: add social links
fix: correct mobile hero alignment
style: improve about section cards
refactor: move theme state to App
docs: update portfolio README
perf: optimize 3D scene rendering
8. Push Feature Branch

After committing:

git push -u origin feature/projects-section

For future commits on the same branch:

git push
9. Merge Into Main

Only merge after the feature is:

Working
Responsive
Tested
Finalized

First switch to main:

git checkout main

Update it:

git pull origin main

Merge:

git merge feature/projects-section

Then push:

git push origin main
10. Verify Main

After merging, always run:

npm run dev

Check that the merged feature appears correctly.

For example, after merging Projects:

Hero
 ↓
About
 ↓
Projects
 ↓
Contact

If a section exists on a feature branch but not on main, it will disappear when switching to main.

That is expected until the feature branch is merged.

11. Delete Finished Branch

After verifying that the merge is successful, the local feature branch can optionally be deleted.

git branch -d feature/projects-section

If the remote branch is no longer needed:

git push origin --delete feature/projects-section

This step is optional.

12. Current Workflow

The project follows:

main
  │
  ↓
Create feature branch
  │
  ↓
Build feature
  │
  ↓
Test desktop
  │
  ↓
Test tablet
  │
  ↓
Test mobile
  │
  ↓
Test Day/Night
  │
  ↓
Finalize
  │
  ↓
Commit
  │
  ↓
Push feature branch
  │
  ↓
Merge into main
  │
  ↓
Push main
  │
  ↓
Verify main
13. Recommended Future Branches

Possible upcoming branches:

feature/contact-section
feature/footer
feature/project-interactions
feature/mobile-polish
feature/accessibility
feature/performance
feature/final-responsive-testing

Do not create all branches in advance.

Create each branch only when development on that feature begins.

Golden Rule
Never experiment directly on main.

main should remain the stable portfolio.

Use:

Build → Test → Finalize → Commit → Merge

for every major section.


### Add both files now

Put both at the **root of your project**, not inside `src`:

```text
3d-portfolio/
│
├── README.md              ← here
├── GIT_WORKFLOW.md        ← here
├── package.json
├── vite.config.js
├── public/
└── src/

Then, since Projects is working and you're merging it, I recommend making the merge first. After that, add these documentation files on main and commit them separately:

git add README.md GIT_WORKFLOW.md
git commit -m "docs: add project README and Git workflow"
git push origin main

That gives us a clean checkpoint: Hero + About + Projects + documentation on main.

Our next feature branch can then be:

git checkout -b feature/contact-section