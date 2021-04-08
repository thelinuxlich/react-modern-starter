![Node.js CI](https://github.com/thelinuxlich/react-modern-starter/workflows/Node.js%20CI/badge.svg)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)&nbsp;&nbsp;&nbsp;<a href="https://app.netlify.com/start/deploy?repository=https://github.com/thelinuxlich/react-modern-starter"><img src="https://www.netlify.com/img/deploy/button.svg"></a>

# react-modern-starter

- [React](https://reactjs.org/docs/getting-started.html) for rendering
- [React Router](https://reactrouter.com/web/guides/quick-start) for routing
- [react-seo](https://github.com/americanexpress/react-seo) for SEO
- [MDX](https://mdxjs.com/) for easy markdown files powered by React Components
- [Valtio](https://github.com/pmndrs/valtio) for state management
- [WindyCSS](https://github.com/voorjaar/windicss/wiki/Introduction) for easy bundling TailwindCSS into the stack(typography and forms plugin builtin)
- [Vite](https://vitejs.dev/guide/) for bundling
- [uvu](https://github.com/lukeed/uvu) for testing
- [linkedom](https://github.com/WebReflection/linkedom) for speedy simulation of the browser environment in uvu tests
- [C8](https://github.com/bcoe/c8) for code coverage
- [Prettier-Standard](https://github.com/sheerun/prettier-standard) for formatting and linting
- [lint-staged](https://github.com/okonet/lint-staged) with precommit task for linting
- [Commitizen](https://github.com/commitizen/cz-cli) intercepting your commits to help you add nice formatted messages
- [Renovate](https://github.com/renovatebot/renovate) for automated dependency updates
- [git-notify](https://github.com/jevakallio/git-notify) for communicating important updates during git pull to your team
- [git-standup](https://github.com/kamranahmedse/git-standup) to recall what you did yesterday
- [semantic-release](https://github.com/semantic-release/semantic-release) to automatically release new versions of your project(remember to set NPM_TOKEN in your repository)
- Github Actions CI preconfigured for running lint + tests
- SSR/SSG builtin
- Rudimentary autorouting based on directory convention(similar to Next.js)
- Optional configuration for Netlify deployment

## Setup

- Clone to local
- `cd react-modern-starter`
- `yarn`

## Tasks

- `yarn standup` (receive a pretty list of things you did on your last working day)
- `yarn dev` (standard dev server)
- `yarn format` (format and lint the codebase following prettier-standard rules)
- `yarn build` (bundle client and server(SSR) for production)
- `yarn build:client` (bundle client for production)
- `yarn build:server` (bundle server(SSR) for production)
- `yarn generate` (bundle static SSR/SSG)
- `yarn serve` (preview the production bundle(SSR))
- `yarn test` (run the test suite and generate code coverage)
