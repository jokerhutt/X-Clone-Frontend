
# Project Architecture Documentation

This document describes the folder structure and architecture principles used in this project.
The goal is to maintain **scalability, consistency, and separation of concerns** across all modules.

---

## Root Structure

```

/
├─ app/                     # Application entry and routing (Next.js App Router)
├─ entities/                # Business entities (domain-driven)
├─ features/                # Features (user-facing functionality)
├─ shared/                  # Reusable components, utilities, configs
├─ widgets/                 # Page-level composite UI blocks
├─ styles/                  # Global styles (Tailwind, fonts)
├─ public/                  # Static assets
├─ types/                   # Global TypeScript types
└─ package.json             # Project dependencies and scripts

```

---

## Folder Breakdown

### `app/`
- Contains **routing and layouts** (Next.js App Router).
- Each file or folder represents a **route**.
- Layouts wrap pages and provide shared UI (navigation, headers, etc.).

**Example:**
```

app/
├─ layout.tsx        # Root layout
├─ page.tsx          # Homepage
├─ (marketing)/      # Marketing routes
└─ (dashboard)/      # Dashboard routes

```

---

### `entities/`
- Represents **core business entities** (e.g., `User`, `Product`, `Order`).
- Each entity has its own folder with a strict separation of concerns.

**Structure inside an entity:**
```

entities/user/
├─ ui/              # UI components tied to this entity
│   ├─ atoms/       # Smallest UI units (e.g., Avatar, Badge)
│   ├─ molecules/   # Combinations of atoms (e.g., UserCard)
│   └─ organisms/   # Complex UI (e.g., UserProfile)
├─ model/           # State management, hooks, stores
└─ lib/             # Business logic, helpers

```

---

### `features/`
- Encapsulates **functional features** that users interact with.
- Built using `entities` and `shared` components.

**Example: Authentication feature**
```

features/auth/
├─ ui/              # Auth forms and related UI
│   ├─ atoms/       # Input fields, Buttons
│   ├─ molecules/   # LoginForm, RegisterForm
│   └─ organisms/   # AuthModal
├─ model/           # Auth state, hooks, API calls
└─ lib/             # Helper functions (e.g., token parsing)

```

---

### `shared/`
- Contains **global reusable utilities and UI**.
- Independent of specific business logic.

```

shared/
├─ ui/              # Generic UI components
│   ├─ atoms/       # Buttons, Inputs, Icons
│   ├─ molecules/   # Form, Card
│   └─ organisms/   # Modals, Navigation
├─ lib/             # Utilities (e.g., date formatting, fetch wrappers)
└─ config/          # Project configs (API endpoints, env, constants)

```

---

### `widgets/`
- High-level **composite UI blocks** that combine entities, features, and shared components.
- Usually represent **sections of a page**.

**Example:**
```

widgets/header/
├─ ui/              # Header UI components
├─ model/           # State for header (e.g., scroll behavior)
└─ lib/             # Logic helpers

```

---

### `styles/`
- Contains **global stylesheets**.
- Tailwind setup, global CSS resets, fonts via `next/font`.

---

### `public/`
- Holds **static files** (images, icons, favicons, robots.txt).
- Accessible directly via `/public` path.

---

### `types/`
- Stores **global TypeScript types**.
- Shared type definitions across the project.

---

## Example Workflow

- **User Avatar**:
  → `entities/user/ui/atoms/Avatar.tsx`

- **Login Form**:
  → `features/auth/ui/molecules/LoginForm.tsx`

- **Header with Auth Controls**:
  → `widgets/header/ui/Header.tsx` (uses `LoginForm` and `Avatar`)

---

## Key Principles
1. **Atomic Design** → Atoms → Molecules → Organisms → Widgets → Pages.
2. **Feature-Sliced Design (FSD)** → Entities, Features, Shared, Widgets.
3. **Separation of Concerns** → Business logic, state, and UI live in separate layers.
4. **Scalability** → Each feature and entity is isolated, reusable, and extendable.
