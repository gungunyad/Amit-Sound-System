
# Amit Sound System

A responsive website for **Amit Sound System**, showcasing DJ equipment, event videos, services, and contact information. Visitors can explore the business and prepare a booking enquiry for **Anshu (अंशु)** through WhatsApp.

**Tagline:** “हर उत्सव की शान, हर खुशी के साथ — अमित साउंड सिस्टम!”

## Project details

| Item | Details |
| --- | --- |
| Project name | Amit Sound System |
| Package name / version | `sound-system` / `0.1.0` |
| Application type | React frontend with a separate booking view |
| Styling | Tailwind CSS and custom CSS |
| Design | Dark navy background, gold accents, cyan details |
| Content languages | English and Hindi |
| Contact person | Anshu (अंशु) |
| Phone numbers | 8953203230 / 8127983630 |
| Booking destination | WhatsApp: +91 8953203230 |
| Data storage | No backend or booking database is implemented |

## Technology used

- **React / React DOM:** `^19.3.0` in `package.json`.
- **Create React App:** `react-scripts` 5.0.1 for development and production builds.
- **Tailwind CSS:** `^3.4.19`, configured in `tailwind.config.js` to scan source components.
- **JavaScript and JSX:** functional React components and hooks.
- **CSS:** brand typography, hover effects, and navigation animations.
- **HTML5 video:** local MP4 playback with native controls.
- **Inline SVG:** YouTube, Instagram, Facebook, and mobile menu icons.
- **React Testing Library / Jest:** starter testing tools supplied with the project.

## Start the project

Install Node.js and npm before running the project. Run these commands from the folder containing `package.json`.

```bash
npm ci
npm start
```

Open `http://localhost:3000` in your browser. If that port is occupied, use the address shown in the terminal. Changes to source files reload the development page.

No API key or environment variables are required for the current website. WhatsApp and social links require internet access.

## Website sections

### Header

`src/components/Header.js` displays the business logo at both ends of the header and the name **Amit Sound System** with gold gradient typography.

- The header stays visible at the top while scrolling.
- Home, Services, Events, and Contact links navigate to their sections.
- Navigation text gently enlarges on hover; its gold underline expands from the middle and disappears when the mouse leaves.
- A collapsible menu provides navigation on smaller screens.
- **Book an Event** opens the booking view from both the desktop and mobile menus.

### Home

`src/components/Home.js` displays `DJ.jpeg` on the left and this Hindi introduction on the right:

> **हर जश्न की शान, हर खुशी के साथ,**  
> **जन्मदिन हो, शादी हो या पूजा-पाठ,**  
> **हर पल को बनाए यादगार — अमित साउंड सिस्टम के साथ!** ✨

The image and text stack vertically on smaller screens.

### Events

`src/components/Event.js` shows five local videos, arranged in three columns on large screens and one column on smaller screens.

| Video | File used |
| --- | --- |
| Wedding Celebration | `wedding_first_30_seconds.mp4` |
| Birha | `birha.mp4` |
| Geet | `geet.mp4` |
| Haldi | `haldi1.mp4` |
| Second Geet clip | `geet2.mp4` |

Videos have playback controls, support inline playback, and preload metadata. The Events section currently uses local videos only.

**Geet2 duration:** its playback is restricted to the first 20 seconds using a media fragment and React event handlers. The source MP4 has not been physically trimmed, so the browser can still show its original total duration. A genuinely trimmed MP4 is needed for the timeline to display a 20-second total.

### Services

`src/components/Service.js` contains a two-column gallery on medium and larger screens:

| Service card | Media file |
| --- | --- |
| Event Setup | `1.jpeg` |
| DJ & Sound Equipment | `DJ.jpeg` |
| Sound System | `sound.mp4` |
| DJ Performance | `video dj.mp4` |

Cards stack vertically on smaller screens. Photos use lazy loading, and videos include playback controls.

### Contact

`src/components/Contact.js` places `card.jpeg` on the left and Hindi booking information on the right. Anshu’s details and social links appear below the image.

- **Anshu (अंशु):** [8953203230](tel:+918953203230) / [8127983630](tel:+918127983630).
- **YouTube:** [@anshu_prayagi_0](https://www.youtube.com/@anshu_prayagi_0).
- **Instagram:** [@amitsoundsystem](https://www.instagram.com/amitsoundsystem?stkn=MXY5ODAwdGM4dGR1eQ==).
- **Facebook:** [Event video](https://www.facebook.com/share/v/17dx9z1xQr/).

Phone links open the device’s calling app when supported. Social links have colored SVG icons and open in a new tab.

The booking information lists birthdays, weddings, Haldi, Sangeet, Mehndi, engagements, religious events, Shiv Charcha / Bhajan-Kirtan, Birha, and family functions.

### Book an Event

`src/components/BookEvent.js` provides the booking enquiry form and direct phone links.

| Form field | Validation |
| --- | --- |
| Your name | Required; cannot contain only spaces; maximum 100 characters |
| Phone number | Required; 10 digits starting with 6, 7, 8, or 9 |
| Event type | Required selection from the event dropdown |
| Event date | Required; today or a future date |
| Venue / Location | Required; cannot contain only spaces; maximum 250 characters |
| Additional requirements | Optional; maximum 1,500 characters |

The event dropdown includes Birthday Party, Wedding, Haldi, Sangeet, Mehndi, Engagement, Puja / Religious Event, Bhajan / Kirtan, Birha, Family Function, and Other.

**Booking flow:**

1. Click **Book an Event** in the header.
2. Enter the event details.
3. Click **Continue on WhatsApp** after completing the required fields.
4. `handleSubmit()` prevents a page reload and reads the fields using `FormData`.
5. The component formats the details into a message and encodes it for a WhatsApp URL.
6. WhatsApp opens with the enquiry addressed to **+91 8953203230**.
7. The visitor reviews the message and presses **Send** in WhatsApp.
8. Anshu confirms availability and pricing directly with the visitor.

The website does not automatically send messages, save bookings, take payments, or confirm availability.

## Navigation and application flow

`src/index.js` loads the global stylesheet and renders `App.js` inside React Strict Mode.

`App.js` keeps the header visible and chooses between the main website and the booking view according to the URL hash. It listens for hash changes, updates the browser title, and scrolls to the selected section. No routing package is used.

| URL hash | View / destination |
| --- | --- |
| `#home` | Home section |
| `#events` | Events section |
| `#services` | Services section |
| `#contact` | Contact section |
| `#book-event` | Separate booking view |

`Body.js` renders the main sections in this order: **Home → Events → Services → Contact**. The booking view has a **Back to Home** link. Header section links also return visitors from the booking view to the main website.

## Project structure

```text
sound-system/
├── image/                     Original supplied photos and videos
├── public/
│   ├── index.html             HTML template, page metadata, icon links
│   ├── manifest.json          App name, colors, and mobile icons
│   ├── amit-icon-32.png       Browser-tab icon
│   ├── amit-icon-192.png      Mobile / app icon
│   ├── amit-icon-512.png      Larger app icon
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.js          Logo, navigation, mobile menu
│   │   ├── Body.js            Main section composition
│   │   ├── Home.js            Main image and Hindi introduction
│   │   ├── Event.js           Event video gallery
│   │   ├── Service.js         Service photo and video gallery
│   │   ├── Contact.js         Contact card, booking details, social links
│   │   └── BookEvent.js       Booking form and WhatsApp enquiry
│   ├── image/                 Media copies imported by components
│   ├── App.js                 Hash navigation and view selection
│   ├── App.css                Remaining starter stylesheet
│   ├── App.test.js            Remaining starter test
│   ├── index.js               React entry point
│   ├── index.css              Tailwind layers and shared custom styles
│   ├── setupTests.js          Test setup
│   └── reportWebVitals.js     Optional performance reporting helper
├── .gitignore
├── package.json               Dependencies and npm scripts
├── package-lock.json          Locked dependency versions
├── tailwind.config.js         Tailwind source scanning configuration
└── README.md
```

Some unused starter assets remain in `public/`, including the original React icons. The HTML and manifest reference the custom Amit icons.

## Media and styling

The supplied files are kept in the root `image/` folder. Components import their working copies from `src/image/`, because this Create React App configuration requires imported media to be inside `src`.

When replacing media, update the copy in `src/image/` or change the relevant component’s import. Updating only the root `image/` file does not update the displayed asset.

The logo filename is `Amit Neon Sound System Logo.png`; the displayed business name is **Amit Sound System**.

Shared styles in `src/index.css` provide:

- Pointer cursors over images and videos.
- Gentle image and video zoom, lift, and shadow on desktop hover.
- Navigation text animations and underlines growing from the center.
- Gold brand lettering with a gradient and subtle glow.
- Scroll offsets so section headings stay below the sticky header.
- Reduced animation when the visitor prefers reduced motion.

The custom favicon and mobile icons are resized copies of the supplied business logo. Their paths are configured in `public/index.html` and `public/manifest.json`.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from `package-lock.json` |
| `npm start` | Start the development server |
| `npm run build` | Create production files in `build/` |
| `npm test` | Start the test runner in watch mode |
| `npm test -- --watchAll=false` | Run tests once |
| `npm run eject` | Expose Create React App configuration; this cannot be undone automatically |

**Current test status:** `src/App.test.js` still contains the original Create React App test for a “Learn React” link, which this website no longer displays. It needs updating before the full test suite can be treated as passing. The optional `BookEvent.test.js` file was removed; booking functionality lives in `BookEvent.js`.

## Production build and publishing

```bash
npm run build
```

Upload the generated `build/` folder to a static web host. The current build configuration assumes the website is served from the domain root. If deploying inside a subfolder, configure `homepage` in `package.json` for that location and rebuild.

The booking page uses a URL hash, so its link is the site address followed by `#book-event`. No separate server-side booking route is implemented.

## Updating the website

| Change | File to edit |
| --- | --- |
| Header name, logos, navigation | `src/components/Header.js` |
| Home image and introduction | `src/components/Home.js` |
| Event video selection | `src/components/Event.js` |
| Services gallery | `src/components/Service.js` |
| Contact numbers, social links, Hindi details | `src/components/Contact.js` |
| Booking fields, dropdown options, WhatsApp recipient | `src/components/BookEvent.js` |
| Page navigation and browser title | `src/App.js` |
| Hover animations and brand typography | `src/index.css` |
| Browser icons and default metadata | `public/index.html`, `public/manifest.json` |

After making changes, run `npm run build` and check the result in a browser. Check desktop and mobile layouts, section navigation, video controls, phone links, and the booking enquiry flow. If an old browser icon remains cached, use **Ctrl + F5** to refresh it.
