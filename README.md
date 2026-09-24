# SOUTH BLR

Nightlife/experiences landing site for South Bengaluru — Vite + React + TypeScript.

## Structure

```
src/
├── App.tsx           Navbar, footer, and route definitions
├── App.css           All component and layout styling
├── index.css         Resets, CSS variables, fonts
├── main.tsx          React entry point
├── Home.tsx           /
├── Experiences.tsx    /experiences
└── EventDetails.tsx   /experiences/pre-halloween

public/
└── events/
    └── pre-halloween.png   (add the real event poster here)
```

No `Account`, `MyBookings`, or `BookingConfirmation` pages/routes — there's no login,
booking, or payment flow by design. The site is a discovery funnel that ends in an
Instagram DM, not a checkout.

## Run it

```
npm install
npm run dev
```

## Build

```
npm run build
```

## Adding the real event image

The hero and event cards currently use a CSS-generated dark/red glow treatment in
place of a photo (no image asset was supplied). Drop the real poster at
`public/events/pre-halloween.png` and reference it as `background-image` on
`.event-image` / `.ev-hero` in `App.css`, or swap those divs for an `<img>` tag.
