# Reference Design — Apple Design System

> **Rule**: All portfolio design follows [Apple.md](./Apple.md) exclusively.

---

## Design System Summary (from Apple.md)

### Typography
| Role | Font | Size | Weight | Line Height | Letter Spacing |
|------|------|------|--------|-------------|----------------|
| Display Hero | SF Pro Display | 56px | 600 | 1.07 | -0.28px |
| Section Heading | SF Pro Display | 40px | 600 | 1.10 | normal |
| Tile Heading | SF Pro Display | 28px | 400 | 1.14 | 0.196px |
| Card Title | SF Pro Display | 21px | 700 | 1.19 | 0.231px |
| Body | SF Pro Text | 17px | 400 | 1.47 | -0.374px |
| Caption | SF Pro Text | 14px | 400 | 1.29 | -0.224px |
| Micro | SF Pro Text | 12px | 400 | 1.33 | -0.12px |

> SF Pro Display at 20px+, SF Pro Text below 20px — never mix.

### Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Dark Background | `#000000` | Hero/immersive sections |
| Light Background | `#f5f5f7` | Informational sections |
| Primary Text (light bg) | `#1d1d1f` | Headings, body |
| Primary Text (dark bg) | `#ffffff` | Headings, body |
| Secondary Text | `rgba(0,0,0,0.8)` | Nav, supporting text |
| Accent (Interactive ONLY) | `#0071e3` | CTAs, buttons, focus |
| Link (light bg) | `#0066cc` | Inline links |
| Link (dark bg) | `#2997ff` | Links on dark |

> **One accent color only** — `#0071e3` for all interactive elements. No other chromatic colors.

### Section Rhythm
- Alternate between `#000000` (dark/immersive) and `#f5f5f7` (light/informational)
- Each section = one "scene" — full breathing room between projects

### Buttons
| Type | Background | Text | Radius | Padding |
|------|-----------|------|--------|---------|
| Primary CTA | `#0071e3` | `#fff` | 8px | 8px 15px |
| Secondary CTA | `#1d1d1f` | `#fff` | 8px | 8px 15px |
| Pill Link | transparent | `#0066cc` | 980px | — |

### Cards & Containers
- Background: `#f5f5f7` (light) or `#272729` (dark)
- Border: **none** (Apple never uses visible borders)
- Radius: 5–8px
- Shadow: `rgba(0,0,0,0.22) 3px 5px 30px` — soft, rare

### Navigation
- Background: `rgba(0,0,0,0.8)` + `backdrop-filter: saturate(180%) blur(20px)`
- Height: 48px
- Text: `#fff`, 12px, weight 400

### Layout
- Max content width: ~980px centered
- Base spacing unit: 8px
- Border radius scale: 5px (micro) → 8px (standard) → 12px (large) → 980px (pill)

---

## Portfolio Application Rules

### Slide Design (16:9 / 1920×1080)
1. **Cover**: Black background, white SF Pro Display 56px, weight 600
2. **Project Heroes**: Alternate black ↔ `#f5f5f7` sections
3. **Content Slides**: `#f5f5f7` background, `#1d1d1f` text
4. **Impact Metrics**: Large numbers in SF Pro Display, weight 600
5. **Closing**: Black background, centered text, blue CTA

### Image Treatment
- Screenshots on solid color fields — no gradients, no textures
- No device frames unless showing context
- High-res, generous whitespace around images

### Do's
- Use SF Pro with negative letter-spacing at all sizes
- Use `#0071e3` ONLY for interactive/highlight elements
- Alternate dark/light sections for cinematic rhythm
- Compress headline line-heights (1.07–1.14)
- Let whitespace breathe — each project gets a full "scene"

### Don'ts
- No additional accent colors
- No heavy shadows or multiple shadow layers
- No visible borders on cards
- No wide letter-spacing
- No gradients, textures, or patterns on backgrounds
- No rounded corners >12px on rectangles (980px for pills only)

---

> **Full reference**: [Apple.md](./Apple.md) — always defer to the complete spec.
