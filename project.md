# Project Requirements — Exact Website Clone

## 1. Project Objective

Convert the existing HTML website into a fully functional **Next.js application using JavaScript and Tailwind CSS**.

The primary goal is to reproduce the original HTML website as accurately as possible, including its design, layout, assets, typography, colors, spacing, content, and section order.

**Reference website:** https://conseil.pixfort.com/app/

**Source of truth:** The existing HTML files, CSS files, JavaScript files, assets, and section-specific data files provided in the project.

Do not redesign the website or introduce unnecessary design changes.

## 2. Technology Stack

Use the following technologies:

- Next.js with the App Router
- JavaScript (JSX)
- Tailwind CSS
- Reusable React components
- JSON or JavaScript data files for section content
- Existing project assets
- npm for package management

Use the existing project configuration whenever possible. Do not unnecessarily replace or upgrade working dependencies.

## 3. Exact Design Requirements

Recreate the original HTML website as closely as possible.

Preserve:

- Exact page structure and section order
- Header and navigation design
- Hero section layout
- Original text and content
- Font families, font sizes, weights, and line heights
- Background colors and gradients
- Container widths and spacing
- Margins, padding, borders, and border radius
- Buttons, icons, cards, and illustrations
- Images, image positions, sizes, and aspect ratios
- Responsive layouts and breakpoints
- Footer design
- Hover effects, transitions, animations, and interactions

Inspect the original HTML, CSS, JavaScript, and assets before implementing each section.

Do not approximate the design when the exact styles or assets are available.

## 4. Use the Existing Assets

Reuse the original project assets wherever available.

Requirements:

- Inspect all existing images, SVGs, icons, fonts, and other media.
- Use the correct asset for each section.
- Preserve the original image proportions and positioning.
- Use the original font files if available.
- Avoid replacing original assets with emojis, placeholders, or unrelated images.
- Do not generate substitute assets when the original asset exists.
- Use correct Next.js image handling where appropriate.
- Ensure all asset paths resolve correctly.
- Check for broken images and missing fonts.

Keep reusable static assets inside the `public/assets/` directory when appropriate.

Do not rename or move assets unnecessarily.

## 5. Next.js Project Structure

Organize the application using reusable components and section-specific data files.

Suggested structure:

```text
website-clone/
├── public/
│   └── assets/
│       ├── images/
│       ├── icons/
│       ├── fonts/
│       └── other/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Container.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── SectionTwo.jsx
│   │   │   ├── SectionThree.jsx
│   │   │   └── ...
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── SectionHeading.jsx
│   ├── data/
│   │   ├── headerData.js
│   │   ├── heroData.js
│   │   ├── sectionTwoData.js
│   │   ├── sectionThreeData.js
│   │   ├── footerData.js
│   │   └── ...
│   └── lib/
│       └── assets.js
├── package.json
├── next.config.js
├── jsconfig.json
└── project.md
```

This is a suggested structure. Adapt it to the existing project and installed Next.js version. Create section files according to the actual sections found in the source HTML.

Do not create unnecessary empty components or data files.

## 6. Component-Based Development

Convert each major section of the original HTML into an appropriate reusable React component.

Examples:

- Header and navigation
- Hero section
- Feature sections
- Service or product cards
- Testimonials
- Pricing sections
- FAQ sections
- Call-to-action sections
- Footer

The examples above are not a requirement to invent new sections. Implement only the sections present in the original website.

Requirements:

- Use JSX components instead of putting the entire website into one large file.
- Reuse common UI elements where appropriate.
- Pass section data through props.
- Keep components focused and maintainable.
- Use semantic HTML elements.
- Avoid unnecessary duplication.
- Use React state and event handlers only when required.
- Do not use direct DOM manipulation when React provides an appropriate solution.

The main `page.js` file should compose the section components in the same order as the original HTML.

## 7. Section-Wise Data Files

Each section must obtain its content from the corresponding data file.

For example:

`src/data/heroData.js`

```javascript
const heroData = {
  title: "Original hero heading",
  description: "Original hero description",
  primaryButton: {
    label: "Original button text",
    href: "#",
  },
  image: "/assets/images/original-hero-image.png",
};

export default heroData;
```

The sample values above are placeholders illustrating the structure. Replace them with the exact content and asset paths from the original project.

Example component:

```jsx
import heroData from "@/data/heroData";

export default function HeroSection() {
  return (
    <section>
      <h1>{heroData.title}</h1>
      <p>{heroData.description}</p>

      <a href={heroData.primaryButton.href}>
        {heroData.primaryButton.label}
      </a>
    </section>
  );
}
```

Requirements:

- Extract the original content from the corresponding HTML section.
- Keep headings, descriptions, button labels, links, lists, and repeated card content in data files.
- Store repeated items in arrays and render them using `.map()`.
- Use stable keys for mapped React elements.
- Store image paths in the data files where practical.
- Preserve the exact content and original ordering.
- Do not invent missing content.
- Do not duplicate the same data in multiple components.
- Keep layout and styling inside components and Tailwind CSS, not inside the data files.
- Keep complex rich-text structures in a maintainable format without losing the original HTML semantics.

Create a separate data file for every section that has meaningful content to manage. Shared data can be centralized when appropriate.

## 8. Tailwind CSS Requirements

Use Tailwind CSS for the website's styling.

Requirements:

- Reproduce the original CSS values as closely as possible.
- Use Tailwind utilities for layout, spacing, typography, colors, borders, shadows, and responsive behavior.
- Use Flexbox and CSS Grid where appropriate.
- Use responsive utility classes that match the original design.
- Use custom theme values or arbitrary values when the exact original value is unavailable in the default Tailwind scale.
- Preserve gradients, overlays, positioning, and transitions.
- Keep `globals.css` for necessary global styles, font declarations, resets, and complex styles that cannot be expressed cleanly using utilities.
- Do not add a different design system or unnecessary UI libraries.
- Avoid conflicting styles and redundant utility classes.

Do not sacrifice design accuracy just to use a standard Tailwind utility. Extend the theme or use a suitable custom style when necessary.

## 9. Responsive Design

The website must work correctly on:

- Desktop
- Laptop
- Tablet
- Mobile

Compare the original HTML website at matching viewport sizes.

Preserve the original responsive behavior, including:

- Navigation changes
- Column stacking
- Image resizing and positioning
- Responsive typography
- Section spacing
- Card layouts
- Mobile menu interactions
- Button sizing and alignment

Do not invent new responsive behavior if the original implementation defines it.

## 10. Functional Requirements

All existing interactions must continue to work.

Verify:

- Navigation links
- Buttons and calls to action
- Dropdown menus
- Mobile navigation
- Anchor scrolling
- Carousels or sliders, if present
- Forms and validation, if present
- Tabs, accordions, and FAQ interactions, if present
- Hover states and animations
- External links

Do not create fake functionality or claim that a form submits successfully when no backend or submission service exists.

Preserve original destinations and behavior wherever possible.

## 11. Error Prevention and Code Quality

The final application must be free of known build errors, runtime errors, and React warnings.

Check for:

- Incorrect import paths
- Missing modules
- Missing or incorrect asset paths
- JSX syntax errors
- Invalid component exports
- Undefined variables
- Missing React list keys
- Incorrect prop usage
- Hydration errors
- Invalid HTML nesting
- Unnecessary client components
- Incorrect event handlers
- Broken links
- Tailwind CSS configuration problems
- Console errors
- Type or configuration mismatches with the installed framework version

Use `"use client"` only for components that require client-side state, effects, event-driven browser behavior, or other client-only features.

Prefer Server Components by default where appropriate.

Do not suppress errors just to make the application appear to work.

## 12. Implementation Workflow

Follow this sequence.

### Phase 1: Inspect the Source

1. Inspect the existing HTML files.
2. Identify all sections in their original order.
3. Inspect linked CSS and JavaScript files.
4. Identify all fonts, images, icons, and other assets.
5. Identify responsive breakpoints and interactions.
6. Inspect section-specific data files, if provided.
7. Record the exact design requirements before implementation.

Do not start by guessing the website structure.

### Phase 2: Set Up Next.js

1. Inspect the existing repository and `package.json`.
2. Check whether Next.js and Tailwind CSS are already configured.
3. Initialize or configure the application only as needed.
4. Preserve working configuration and dependencies.
5. Confirm that the development server starts successfully.

Do not create a second project inside an existing project unnecessarily.

### Phase 3: Build the Components

1. Create the shared layout components.
2. Create the section-specific data files.
3. Create the section components.
4. Import data into the relevant components.
5. Assemble the complete page in `src/app/page.js`.
6. Implement all required styles using Tailwind CSS.
7. Reproduce interactions and responsive behavior.

### Phase 4: Validate the Design

Compare the original website and the Next.js implementation side by side.

Check:

- Section positions
- Container widths
- Typography
- Colors
- Image dimensions
- Asset selection
- Spacing
- Alignment
- Responsive layouts
- Interactive behavior

Fix visual differences before considering the project complete.

### Phase 5: Test and Fix Errors

Run the appropriate commands for the existing project:

```bash
npm install
npm run dev
```

Then run the production build:

```bash
npm run build
```

If a lint script exists, run:

```bash
npm run lint
```

Use only scripts supported by the current `package.json`. If a command is unavailable, identify the reason and use the appropriate validation method for the installed version.

Fix all identified errors and warnings caused by the implementation.

Do not mark the project complete until the production build succeeds.

## 13. Final Acceptance Criteria

The project is complete only when:

- All original sections are implemented.
- The section order matches the original HTML.
- The design closely matches the original website.
- Original assets are reused correctly.
- Section content is managed through data files.
- Components are reusable and organized.
- Tailwind CSS is used throughout the styling.
- Responsive layouts work correctly.
- Existing interactions function as expected.
- There are no known broken asset paths.
- There are no known runtime or build errors.
- The production build succeeds.
- Any remaining limitations are clearly documented.

## 14. Important Instructions

- Do not redesign the original website.
- Do not replace original assets with random alternatives.
- Do not invent content.
- Do not put the entire website inside a single component.
- Do not hardcode all section content directly into JSX when it belongs in a data file.
- Do not ignore the original CSS measurements.
- Do not install unnecessary packages.
- Do not change unrelated project files.
- Do not claim pixel-perfect accuracy without visual comparison.
- Do not finish after creating only the hero section.
- Complete and validate the entire page.

**Expected result:** A maintainable Next.js website that reproduces the supplied HTML website as closely as possible, using JavaScript, reusable components, Tailwind CSS, original assets, and section-specific data files.
