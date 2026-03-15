# Ascend - Code Overview

## Project Description
**Ascend** is a Progressive Web Application (PWA) designed for tracking gym workouts. It allows users to view exercises organized by body part (upper body, lower body, full body) and track their weight progression for each exercise. The app works offline and is optimized for iPhone usage.

## Tech Stack
- **Framework:** Angular 20.2.x (Standalone Components)
- **Language:** TypeScript 5.8.x
- **Database:** Dexie.js (IndexedDB wrapper) for offline-first data storage
- **PWA:** Angular Service Worker for caching and offline support
- **Styling:** CSS with CSS Variables, iOS-native design patterns
- **Icons:** Health Icons library (SVG-based body part icons)

## Project Structure

```
src/
├── app/
│   ├── app.ts                    # Root component
│   ├── app.html                  # Root template
│   ├── app.css                   # Root styles
│   ├── app.routes.ts             # Route definitions
│   ├── app.config.ts             # App configuration
│   ├── db.ts                     # Dexie database setup
│   ├── equipment.service.ts      # Equipment type state management
│   ├── exercise-schema.service.ts # Exercise definitions and schemas
│   │
│   ├── nav/                      # Navigation component
│   │   ├── nav.ts
│   │   ├── nav.html
│   │   └── nav.css
│   │
│   ├── exercises-list/           # Exercise list component
│   │   ├── exercises-list.ts
│   │   ├── exercises-list.html
│   │   ├── exercises-list.css
│   │   └── exercise.ts           # Exercise interface
│   │
│   └── exercise-card/            # Individual exercise card component
│       ├── exercise-card.ts
│       ├── exercise-card.html
│       └── exercise-card.css
│
├── assets/                       # Static assets
│   ├── filled/                   # Filled icon variants
│   └── outline/                  # Outline icon variants
│       └── body/                 # Body part icons (arm.svg, leg.svg, body.svg)
│
├── styles.css                    # Global styles
├── index.html                    # HTML entry point
└── main.ts                       # Angular bootstrap
```

## Core Components

### 1. App Component (`app.ts`)
The root component that hosts the router outlet and navigation bar.

### 2. Nav Component (`nav/`)
Fixed bottom navigation bar with:
- Three workout type tabs: Upper Body, Lower Body, Full Body
- Hamburger menu for equipment type switching (Machine vs Free Weights)
- iOS-native styling with safe area support

### 3. Exercises List (`exercises-list/`)
Displays a scrollable list of exercises based on:
- Current route (upper-body, lower-body, full-body)
- Selected equipment type (machine, free-weights)

### 4. Exercise Card (`exercise-card/`)
Individual exercise display with:
- Exercise name
- Weight tracker with +/- buttons
- Alternative exercise rotation button
- Dynamic weight increments based on exercise type

## Services

### EquipmentService (`equipment.service.ts`)
Manages the selected equipment type (machine/free-weights) with:
- Signal-based reactive state
- LocalStorage persistence

### ExerciseSchemaService (`exercise-schema.service.ts`)
Contains all exercise definitions with:
- Exercise names and equipment types
- Exercise types for weight increments (barbell, dumbbell, machine, cable, bodyweight)
- Alternative exercise mappings
- Workout schemas for each body part category

## Data Models

### Exercise Interface
```typescript
interface Exercise {
  exercise: string;
  equipment?: 'machine' | 'free-weights';
  type?: 'barbell' | 'dumbbell' | 'machine' | 'cable' | 'bodyweight';
  alternatives?: string[];
}
```

### ExerciseRecord (Database)
```typescript
interface ExerciseRecord {
  id: string;           // Exercise name (primary key)
  weight: number;       // Current weight in kg
  selectedAlternative?: string;  // User's selected alternative
}
```

## Database (Dexie/IndexedDB)

The app uses Dexie.js for offline-first data storage:
- **Database name:** "Ascend"
- **Table:** `exercises` - stores weight and alternative selections per exercise
- **Key:** Exercise name (string)

## Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/upper-body` | ExercisesList | Upper body exercises |
| `/lower-body` | ExercisesList | Lower body exercises |
| `/full-body` | ExercisesList | Full body exercises |
| `**` | Redirect | Redirects to `/upper-body` |

## PWA Configuration

The app is configured as a PWA with:
- **Prefetch strategy** for app shell and assets
- **Font caching** for Google Fonts (30-day cache)
- **Full offline support** via service worker

## Weight Increment System

Different exercise types have different weight increments:
| Exercise Type | Increment |
|--------------|-----------|
| Barbell | 2.5 kg |
| Dumbbell | 2 kg |
| Machine | 5 kg |
| Cable | 2.5 kg |
| Bodyweight | 1 kg |

## Key Features

1. **Offline-First:** All data stored locally in IndexedDB
2. **PWA:** Installable on iPhone home screen
3. **Equipment Switching:** Toggle between machine and free-weight exercises
4. **Alternative Exercises:** Rotate between exercise alternatives
5. **Smart Weight Increments:** Different increments based on exercise type
6. **iOS-Optimized:** Safe area support, native-feeling UI
