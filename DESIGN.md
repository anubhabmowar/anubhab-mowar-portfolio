---
name: Industrial Clean
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bcc9cd'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#869397'
  outline-variant: '#3d494c'
  surface-tint: '#4cd7f6'
  primary: '#4cd7f6'
  on-primary: '#003640'
  primary-container: '#06b6d4'
  on-primary-container: '#00424f'
  inverse-primary: '#00687a'
  secondary: '#bcc7de'
  on-secondary: '#263143'
  secondary-container: '#3e495d'
  on-secondary-container: '#aeb9d0'
  tertiary: '#bec6e0'
  on-tertiary: '#283044'
  tertiary-container: '#9ea6bf'
  on-tertiary-container: '#343c50'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#acedff'
  primary-fixed-dim: '#4cd7f6'
  on-primary-fixed: '#001f26'
  on-primary-fixed-variant: '#004e5c'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-data:
    fontFamily: monospace
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: '0'
spacing:
  unit: 4px
  gutter: 16px
  margin: 32px
  container-max: 1440px
  density: high
---

## Brand & Style

The design system is engineered for high-stakes technical environments where precision and authority are paramount. It targets an audience of engineers, data scientists, and technical leads who value efficiency over decoration. 

The visual style is a hybrid of **Minimalism** and **Technical Brutalism**. It strips away all non-functional ornamentation to focus on data density and structural integrity. The aesthetic is "Industrial-Clean"—evoking the feeling of a high-end laboratory instrument or a mission-control interface. Every element is deliberate, high-contrast, and optimized for rapid information processing.

## Colors

The palette is anchored in a deep obsidian (#0A0A0A) to provide a void-like backdrop that eliminates visual noise. Accents are strictly hierarchical: 
- **Charcoal (#0F172A)** is used for primary containers and sectioning.
- **Slate (#1E293B)** provides subtle depth for elevated components or interactive hover states.
- **Cyan Blue (#06B6D4)** is reserved exclusively for primary actions, critical indicators, and active states, acting as a "digital laser" against the dark background. 

Text maintains high contrast, utilizing pure white for primary information and muted slate-grays for metadata and supporting labels.

## Typography

Typography in this design system is "razor-sharp." **Space Grotesk** is used for headlines and specialized labels to provide a geometric, technical edge. Its idiosyncratic letterforms reinforce the engineering focus. 

For high-density data and body text, **Inter** provides maximum legibility and a systematic feel. A strict hierarchy is enforced through a tight scale. Labels are often set in uppercase with increased letter spacing to mimic industrial technical drawings and schematics.

## Layout & Spacing

The design system utilizes a **fixed-column grid** (12 columns) for primary structures, switching to a high-density flexible layout for data-rich dashboards. The spacing rhythm is based on a strict 4px baseline grid, ensuring every element aligns to a mathematical increment.

Gutters are kept narrow (16px) to maximize screen real estate, reflecting an "engineering-first" priority where information density is favored over expansive whitespace. Large margins (32px+) are only used at the outermost edges of the viewport to frame the technical content.

## Elevation & Depth

Depth is conveyed through **tonal layering** and **hairline outlines** rather than shadows. In an "Industrial-Clean" environment, shadows are considered visual clutter. 

1. **Base Layer:** Obsidian (#0A0A0A) for the global background.
2. **Mid Layer:** Charcoal (#0F172A) for cards, sidebars, and panels.
3. **Top Layer:** Slate (#1E293B) for tooltips, modals, and dropdown menus.

Borders are 1px thick, using a slightly lighter shade of the background color or the primary Cyan for active states. This creates a "blueprint" feel where sections are carved out by lines rather than lifted by light.

## Shapes

The design system employs a **sharp-edged** geometry. A corner radius of 0px is the standard for all containers, buttons, and input fields. This reinforces the industrial, uncompromising nature of the interface. 

In rare instances where differentiation is required for biological or user-generated content (like avatars), a circular mask may be used, but all structural UI elements must remain strictly rectangular.

## Components

### Buttons
Primary buttons are solid Cyan (#06B6D4) with black text for maximum contrast. Secondary buttons use a 1px Slate border with no fill. Interaction states involve a slight brightness increase on hover, avoiding any "soft" transitions.

### Inputs & Fields
Input fields are Charcoal (#0F172A) with a 1px Slate border. When focused, the border transitions to Cyan. Labels are always positioned above the field in `label-caps` typography.

### Chips & Tags
Technical tags use a Slate (#1E293B) background with `mono-data` typography. They are used for status codes, categories, and data metadata.

### Cards
Cards are flat, defined by a 1px Charcoal border. They do not have shadows. Internal padding is strictly 16px or 24px to maintain the high-density grid.

### Data Grids
The core of the system. Data grids use 1px borders between all cells. Header rows are Charcoal with uppercase Space Grotesk labels. Row highlighting uses a subtle Slate tint on hover.