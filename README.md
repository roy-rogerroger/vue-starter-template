# Vue Starter Template

This template should help get you started developing with Vue 3 in Vite.

Follwing libraries are installed by default:
- Pinia + Pinia ORM
- TailwindCSS3 (no v4 yet)
- PrimeVue with primeicons (https://primevue.org/icons)
- Phosfor Icons (https://phosphoricons.com)

Code style guide:
- Typescript
- Eslint
- Prettier

Component:
Every reusable component should have a storybook implementation.

Folder structure:
- domain/{folder} (task, project, user, etc) or shared/{folder} (globally usable files go in shared)
  - api
  - assets (css, scss, image)
  - component
  - model (pinia orm models)
  - page
  - story (storybook, e.g. domain/story/component/MyComponent.stories.ts)