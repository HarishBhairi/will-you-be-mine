

# Balloon Celebration Phase Redesign

## What Changes

Replace the current "Yay!" celebration screen with a two-step interactive experience:

### Step 1: Balloon Pop Phase
- 6 colorful balloons arranged in a **pyramid layout** (1 on top, 2 in middle, 3 on bottom)
- Each balloon has a different color (red, pink, gold, purple, coral, magenta)
- Clicking a balloon triggers a "pop" animation (scale up + fade out)
- After popping, a **polaroid-style photo card** appears with a romantic tagline beneath it
- A counter shows progress ("3/6 balloons popped!")
- Confetti and floating hearts remain in the background

### Step 2: Valentine Letter (after all 6 popped)
- Once all balloons are popped, transition to a beautiful hero section
- A romantic Valentine's letter addressed to Varun with soft shadows and elegant styling
- Heartfelt message written in cursive typography

### Pyramid Layout
```text
        [ B1 ]
      [ B2 ][ B3 ]
    [ B4 ][ B5 ][ B6 ]
```

### Photos & Taglines
Each balloon reveals one of the 6 uploaded photos as a polaroid with taglines like:
1. "Every moment with you is magic"
2. "Beach days & forever smiles"
3. "You + Me = Perfect"
4. "Adventures with my favorite person"
5. "My happy place is next to you"
6. "Together is my favorite place to be"

## Technical Details

### Files to Create
- **src/components/BalloonCelebration.tsx** -- Main component managing balloon state, pyramid grid, pop logic, polaroid reveals, and the final letter
- Copy all 6 uploaded images to **src/assets/** (image1-6.jpeg)

### Files to Modify
- **src/pages/Index.tsx** -- Replace the current celebration phase render with the new `BalloonCelebration` component
- **src/index.css** -- Add CSS animations for balloon pop, polaroid reveal, and letter fade-in

### Key Implementation Details
- State: array of 6 balloon objects tracking `popped` status
- Pyramid achieved with CSS grid or flex rows (row 1: 1 item centered, row 2: 2 items centered, row 3: 3 items)
- Balloon pop: scale(1.3) + opacity(0) transition, then swap to polaroid card
- Polaroid style: white border, slight rotation, drop shadow, photo inside, tagline below
- After all 6 popped: smooth transition to the Valentine letter hero section
- Letter section: large card with romantic gradient border, shadow, cursive font

