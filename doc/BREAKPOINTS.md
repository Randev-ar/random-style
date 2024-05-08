# Breakpoints

Breakpoints are customizable widths that determine how your responsive layout behaves across device or viewport sizes in random-style.

## Core concepts 
Breakpoints are the building blocks of responsive design. Use them to control when your layout can be adapted at a particular viewport or device size.

Use media queries to architect your CSS by breakpoint. Media queries are a feature of CSS that allow you to conditionally apply styles based on a set of browser and operating system parameters. We most commonly use min-width in our media queries.

Mobile first, responsive design is the goal. random-style’s CSS aims to apply the bare minimum of styles to make a layout work at the smallest breakpoint, and then layers on styles to adjust that design for larger devices. This optimizes your CSS, improves rendering time, and provides a great experience for your visitors.

## Available breakpoints 
random-style includes six default breakpoints, sometimes referred to as grid tiers, for building responsively. These breakpoints can be customized if you’re using our source Sass files.

Breakpoint | Class infix | Dimensions
-- | -- | --
Extra small | None | <576px
Small | sm | ≥576px
Medium | md | ≥768px
Large | lg | ≥992px
Extra large | xl | ≥1200px
Extra extra large | xxl | ≥1400px

Each breakpoint was chosen to comfortably hold containers whose widths are multiples of 12. Breakpoints are also representative of a subset of common device sizes and viewport dimensions—they don’t specifically target every use case or device. Instead, the ranges provide a strong and consistent foundation to build on for nearly any device.

These breakpoints are customizable via Sass—you’ll find them in a Sass map in our variables/_breakpoints.scss stylesheet.
```
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```
