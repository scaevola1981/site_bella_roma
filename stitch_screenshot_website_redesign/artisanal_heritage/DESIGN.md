---
name: Artisanal Heritage
colors:
  surface: '#151311'
  surface-dim: '#151311'
  surface-bright: '#3c3936'
  surface-container-lowest: '#100e0c'
  surface-container-low: '#1d1b19'
  surface-container: '#221f1d'
  surface-container-high: '#2c2927'
  surface-container-highest: '#373432'
  on-surface: '#e8e1dd'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e8e1dd'
  inverse-on-surface: '#33302d'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#cec5c1'
  on-secondary: '#342f2d'
  secondary-container: '#4e4845'
  on-secondary-container: '#bfb7b3'
  tertiary: '#d1cdc9'
  on-tertiary: '#31302d'
  tertiary-container: '#b5b2ae'
  on-tertiary-container: '#464541'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#eae1dd'
  secondary-fixed-dim: '#cec5c1'
  on-secondary-fixed: '#1f1b19'
  on-secondary-fixed-variant: '#4b4643'
  tertiary-fixed: '#e6e2dd'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c19'
  on-tertiary-fixed-variant: '#484743'
  background: '#151311'
  on-background: '#e8e1dd'
  surface-variant: '#373432'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style

The brand personality is rooted in the concept of "Timeless Craftsmanship." It targets a discerning audience that values authenticity, the slow-food movement, and premium culinary experiences. The UI must evoke a sense of quiet luxury, warmth, and historical depth.

The design style is **Corporate Modern with Tactile influences**. It avoids the sterility of typical SaaS interfaces by using rich, dark surfaces and elegant, high-contrast typography. The visual language balances the precision of modern layout grids with the soul of artisanal production, using subtle textures and gold accents to signal quality without being ostentatious.

## Colors

The palette is anchored in a "Deep Espresso" foundation to create an intimate, high-end atmosphere. 

- **Primary (Gold):** Used sparingly for interactive elements, accents, and critical brand moments. It represents the "flame" and "quality."
- **Secondary (Dark Umber):** Used for container backgrounds to provide subtle depth against the pure black foundation.
- **Tertiary (Warm White):** A soft, linen-inspired white used for primary body text to reduce eye strain and maintain a vintage feel.
- **Neutral (Rich Black):** The primary background color, providing a canvas that allows food photography to stand out.

## Typography

The typography strategy relies on the tension between the classical elegance of **Playfair Display** and the functional clarity of **Manrope**.

Headlines should utilize the serif font to convey the "Bella Roma" heritage. Large display titles use tighter letter spacing to feel more editorial. Body text is set in a modern sans-serif for high legibility, especially on menu lists and long-form descriptions. Use `label-caps` for navigation and small headers to add a structured, professional rhythm to the layout.

## Layout & Spacing

The design system utilizes a **fixed-width grid** for desktop to maintain an editorial, magazine-like feel. 

- **Grid:** A 12-column system with generous gutters to allow the content to "breathe."
- **Rhythm:** Vertical spacing is intentionally large (`section-gap`) to encourage a slow, immersive scrolling experience, reflecting the artisanal "slow-food" philosophy.
- **Mobile:** Transition to a single-column layout with 20px side margins. Typography scales down significantly to ensure the serif headlines remain elegant and do not wrap awkwardly.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Soft Ambient Shadows**. 

Instead of traditional drop shadows, we use "Umber Layers" (Secondary color) to lift cards and containers off the pure black background. When a physical "lift" is needed, use a very soft, large-radius shadow tinted with the primary gold color at 5-10% opacity to create a subtle glow rather than a dark shadow. 

Backgrounds of sections should alternate between the Rich Black and the Dark Umber to define content blocks without the need for visible dividers.

## Shapes

The shape language is **Soft**. This creates a balance between the sharpness of "premium" and the approachability of "food."

- **Cards and Buttons:** Use a 4px (0.25rem) radius. This provides a subtle "human" touch while maintaining the architectural structure of the layout.
- **Imagery:** Food photography should use the same soft corner radius to feel integrated into the design system rather than floating on top of it.
- **Icons:** Use thin-stroke, geometric icons to complement the clean lines of the Manrope typeface.

## Components

- **Buttons:** Primary buttons are Solid Gold with Dark Umber text. Secondary buttons use a "Ghost" style with a thin Gold border and Warm White text. All buttons use the `label-caps` typography style.
- **Cards:** Used for menu items and "Process" steps. They feature a Dark Umber background with a subtle 1px border of slightly lighter brown to define the edges.
- **Inputs:** Dark backgrounds with a Warm White bottom-border only. On focus, the border transitions to Gold.
- **Menu Lists:** Use a classic "Dotted Leader" style (Item Name ........ Price) to bridge the gap between traditional Italian trattoria menus and modern digital interfaces.
- **Navigation:** Transparent at the top, transitioning to a blurred "Glassmorphic" Dark Umber on scroll to maintain legibility over various sections.