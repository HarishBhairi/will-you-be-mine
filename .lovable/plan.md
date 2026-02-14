
# Mobile-First Optimization

## Current State
The app already works reasonably well on mobile. After testing on a 390x844 viewport (iPhone 14 size), here are the specific issues to fix:

## Issues Found

1. **Balloon phase overflow**: When polaroids are revealed (especially in the bottom row), the content can overflow below the screen since the container uses `justify-center` with `overflow-hidden` -- no way to scroll to see clipped content
2. **Letter phase**: On very small screens the letter card could get cut off at the bottom with no way to scroll
3. **Balloon/polaroid sizes**: Could be slightly smaller on mobile to ensure the full pyramid fits comfortably

## Changes

### 1. BalloonCelebration.tsx
- Change the balloon phase container from `justify-center` to `justify-start` with top padding, and add `overflow-y-auto` so content can scroll if it exceeds viewport
- Reduce balloon sizes slightly on small screens (from `w-20 h-24` to `w-16 h-20`) and polaroid photo sizes accordingly
- Reduce gaps between pyramid rows on mobile
- Make the letter phase scrollable with `overflow-y-auto` and add vertical padding so the card isn't flush against edges

### 2. Index.tsx
- Reduce the landing page heading size on very small screens for better fit
- Ensure the question phase content doesn't overflow on small screens
- Slightly reduce emoji sizes and spacing on mobile

### 3. index.css
- Add `overflow-y: auto` and `-webkit-overflow-scrolling: touch` for smooth mobile scrolling
- No major CSS changes needed

## Technical Details
- All changes use existing Tailwind responsive classes (default = mobile, `md:` = tablet+)
- No new dependencies needed
- Balloon sizes: `w-16 h-20` on mobile, `w-24 h-28` on desktop
- Polaroid images: `w-16 h-16` on mobile, `w-24 h-24` on desktop
- Letter container gets `overflow-y-auto` and `py-8` padding for safe scrolling
