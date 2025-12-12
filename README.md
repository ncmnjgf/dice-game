# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# today i learn a new thing called Fragment in react

Today I explored **React Fragments** – a small but powerful concept that keeps your DOM clean and efficient.

🔹 **Why use Fragments?**

* Avoids unnecessary `<div>` wrappers
* Keeps DOM lightweight
* Cleaner & more semantic code

🔹 **How to use:**

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>This is inside a fragment.</p>
  </>
);
```

🔹 **Interview Questions & Answers**

1️⃣ **What are React Fragments and why do we use them?**
👉 They allow grouping multiple elements without adding extra DOM nodes.

2️⃣ **Difference between `<></>` and `<React.Fragment>`?**
👉 `<>...</>` is short syntax (no attributes). `<React.Fragment>` is full syntax (supports attributes like `key`).

3️⃣ **Can Fragments have keys?**
👉 Yes, but only with `<React.Fragment key={...}>`, useful in lists.

💡 **Quote of the Day:**
*"Good code is not about writing more, but about writing less with purpose."*


