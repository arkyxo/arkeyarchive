/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  // These two are built at runtime (`hover:${t.accent}` / `hover:${t.textMuted}`),
  // so Tailwind can't see them in the source and they must be listed here.
  safelist: ["hover:text-red-400", "hover:text-red-600", "hover:text-slate-400", "hover:text-slate-600"],
  theme: { extend: {} },
  plugins: [],
};
