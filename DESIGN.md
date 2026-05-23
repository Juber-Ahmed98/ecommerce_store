---
name: Aeroform Performance
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#005c79'
  on-tertiary: '#ffffff'
  tertiary-container: '#00769a'
  on-tertiary-container: '#e0f3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c0e8ff'
  tertiary-fixed-dim: '#7bd1fa'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#004d66'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
---

## Brand & Style
The design system embodies the intersection of high-performance human athletics and precision medical technology. It transitions from a clandestine "dark lab" aesthetic to a bright, "modern studio clinic" environment. The brand personality is authoritative, clinical, and energizing, designed to evoke feelings of clarity, elite progress, and scientific reliability.

The visual style is a blend of **Minimalism** and **Glassmorphism**. It utilizes expansive white space, precise typography, and translucent layers to create a sense of "aero" lightness. This design system prioritizes legibility and a high-end SaaS polish, ensuring that complex performance data feels accessible rather than overwhelming.

## Colors
The palette is rooted in a "Medical-Grade Fitness" logic. The primary background uses Slate-50 to reduce eye strain compared to pure white, while maintaining a sterile, premium feel.

*   **Primary Blue (#2563EB):** A slightly intensified version of the brand blue to ensure AA accessibility compliance on light backgrounds. It represents action and digital precision.
*   **Neutral/Text (#0F172A):** Deep charcoal/slate used for primary headings to maintain an authoritative, premium weight.
*   **Surfaces (#F1F5F9):** Light gray used for secondary containers and background grouping.
*   **Accent Glow (#7DD3FC):** A lighter sky blue used for glassmorphic highlights and soft shadows to maintain the "Aero" brand heritage.

## Typography
The typography strategy pairs technical precision with contemporary readability. 

**Space Grotesk** is used for headlines to provide a futuristic, geometric edge that suggests innovation and speed. For all functional UI and long-form body text, **Hanken Grotesk** provides a sharp, clean, and highly legible experience. 

Negative letter-spacing is applied to large headlines to keep the "performance" look tight and impactful, while labels use slightly increased tracking to ensure clarity in data-dense dashboards.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px square rhythm. This ensures mathematical consistency across all components.

*   **Grid:** A 12-column system is used for desktop, collapsing to 4 columns on mobile.
*   **Gutters:** Fixed at 24px to provide significant breathing room, reinforcing the "minimalist" brand value.
*   **Safe Areas:** Large external margins (48px+) on desktop prevent the UI from feeling cramped, mimicking the open floor plan of a modern performance studio.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and **Glassmorphism** rather than traditional heavy shadows.

1.  **Base Layer:** `#F8FAFC` (Slate 50).
2.  **Surface Layer:** `#FFFFFF` (Pure White) with a 1px border of `#E2E8F0`.
3.  **Floating Elements:** Use a backdrop-blur (12px) with a semi-transparent white fill (70% opacity) and a soft blue-tinted shadow (`rgba(37, 99, 235, 0.08)`).

This approach maintains a "light-as-air" feeling while clearly defining the hierarchy of interactive elements.

## Shapes
The design system utilizes **Rounded** geometry to balance the technical sharpness of the typography.

*   **Primary Radius:** 0.5rem (8px) for standard buttons, inputs, and small cards.
*   **Large Radius:** 1rem (16px) for main content containers and dashboard widgets.
*   **Pill Shape:** Used exclusively for status indicators (Chips) and search bars to provide a distinct visual "path" for the eye.

## Components
Consistent styling of UI components ensures the "Aeroform" identity is felt in every interaction.

*   **Buttons:** Primary buttons are solid `#2563EB` with white text. They feature a subtle 4px blue outer glow on hover. Secondary buttons use a ghost style with a 1px `#E2E8F0` border.
*   **Input Fields:** Backgrounds are white with a 1px `#CBD5E1` border. On focus, the border transitions to the primary blue with a soft sky-blue outer shadow.
*   **Cards:** High-contrast white containers with `#E2E8F0` borders. No shadows are used for static cards; only interactive cards receive the soft blue-tinted elevation on hover.
*   **Data Chips:** Small, pill-shaped indicators with light blue backgrounds (`#E0F2FE`) and navy text (`#0369A1`) for high legibility.
*   **Performance Metrics:** Large-scale numbers in `Space Grotesk` with a subtle vertical gradient to give a sense of "upward" movement.