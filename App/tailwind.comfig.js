@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-background: #0e0e0f;
  --color-foreground: #e5e5e5;
  --color-primary: #6ee7b7; /* light green accent */
}

body {
  @apply bg-background text-foreground;
  font-family: 'Inter', sans-serif;
}

/* Optional link styling */
a {
  transition: color 0.2s ease-in-out;
}
a:hover {
  color: var(--color-primary);
}
