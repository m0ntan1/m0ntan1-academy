// MØNTAN1 Academy :: section page generator
// Usage: node build-sections.mjs
// Emits setup.html (root) and sections/section-01.html .. section-12.html.
// Curriculum metadata lives in SECTIONS below. Full lesson bodies are ported
// at build time from the legacy pages in weeks/ (restyled via academy.css).

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { toolRail, keyVisual } from './lib/visuals.mjs';

const SECTIONS = [
  {
    id: 'setup', file: 'setup.html', root: true, num: '00', part: 'BEFORE YOU START',
    title: 'Setup', time: '~30 min', tools: 'GitHub, VS Code, Claude, Netlify, Replit',
    legacy: 'weeks/week0-setup.html',
    intro: 'Before Section 01, stand up the five free tools the whole primer runs on. One sitting, no credit card, no excuses.',
    objectives: [
      'Create a GitHub account: where every build you make will live',
      'Install VS Code: the editor you will write everything in',
      'Get Claude access: the co-pilot for the entire primer',
      'Connect Netlify: how your work gets onto the open internet',
      'Open Replit: server code in the browser, for the later sections',
    ],
    blocks: [
      ['GitHub: your code\'s home', 'Every builder keeps receipts. GitHub is where your code lives, versioned and public, from your first page to your capstone.'],
      ['VS Code: where you write', 'Free, fast, and the same editor the professionals use. Install it, open it, and learn the three panels that matter.'],
      ['Claude: your co-pilot', 'The AI you will pair with through all twelve sections. Set up access and run your first prompt.'],
      ['Netlify: from GitHub to the internet', 'Connect it once and every push to GitHub becomes a live website. Deployment stops being scary in about five minutes.'],
      ['Replit: server code in your browser', 'For the sections where code has to run somewhere that is not your laptop. One account, zero configuration.'],
    ],
    build: ['The checklist', 'All five tools installed, signed in, and tested. When the checklist is green, Section 01 is waiting.'],
    prev: null, next: ['sections/section-01.html', 'Section 01'],
  },
  {
    id: 'section-01', file: 'sections/section-01.html', num: '01', part: 'PART I :: FOUNDATIONS',
    title: 'How the Internet Actually Works', time: '~45 min', tools: 'Browser, DevTools, GitHub',
    legacy: 'weeks/week1.html',
    intro: 'Forget everything intimidating you have heard about web development. By the end of this section you will have written real code, pushed it to GitHub, and understood exactly what happens when someone visits a website.',
    objectives: [
      'Trace a URL from keyboard to rendered page',
      'Read and write basic HTML structure',
      'Inspect any website with DevTools',
      'Ask Claude for code and read what comes back',
      'Make your first git commit',
    ],
    blocks: [
      ['What happens when you type a URL', 'DNS, servers, and the round trip that completes in under a second. Slow it down once and the web stops being magic.'],
      ['HTML: the skeleton of every page', 'Tags, elements, and the structure beneath every site you have ever visited.'],
      ['DevTools: peek inside any website', 'Open the hood on any page on the internet and read its source. Nothing on the web is hidden from you.'],
      ['Claude as your co-pilot', 'How to ask an AI for code, and how to read what it hands back before you trust it.'],
      ['Make your first commit', 'Git, GitHub, and why builders keep receipts.'],
    ],
    build: ['Your first webpage', 'An About You page, written in real HTML, committed to GitHub. Small, real, and yours.'],
    prev: ['../setup.html', 'Setup'], next: ['section-02.html', 'Section 02'],
  },
  {
    id: 'section-02', file: 'sections/section-02.html', num: '02', part: 'PART I :: FOUNDATIONS',
    title: 'Making Things Look Good with CSS', time: '~45 min', tools: 'VS Code, Claude',
    legacy: 'weeks/week2.html',
    intro: 'HTML gives a page bones. CSS gives it a face. This section covers the handful of CSS ideas that do most of the work on the modern web.',
    objectives: [
      'Understand what CSS controls and how it attaches to HTML',
      'Set colors, fonts, and spacing with intention',
      'Lay out a page with flexbox',
      'Add hover states that make a page feel alive',
    ],
    blocks: [
      ['What CSS does', 'One language controls how everything looks. Selectors, properties, and the cascade, without the theory overdose.'],
      ['Colors, fonts, and spacing', 'The three decisions that separate a page that looks designed from one that looks generated.'],
      ['Layout with flexbox', 'The one layout tool that handles ninety percent of real-world arrangement problems.'],
      ['Hover effects', 'Small motion, big difference. Transitions that reward the cursor.'],
    ],
    build: ['Style your About You page', 'Take the Section 01 page from bare bones to designed, then commit it.'],
    prev: ['section-01.html', 'Section 01'], next: ['section-03.html', 'Section 03'],
  },
  {
    id: 'section-03', file: 'sections/section-03.html', num: '03', part: 'PART I :: FOUNDATIONS',
    title: 'JavaScript Without the Pain', time: '~60 min', tools: 'VS Code, Claude, DevTools',
    legacy: 'weeks/week3.html',
    intro: 'JavaScript is what makes pages do things. Skip the textbook and go straight to clicks, events, and the debugging loop that makes the language learnable.',
    objectives: [
      'Know what JavaScript is for and where it runs',
      'Wire click events to real behavior',
      'Show and hide content on demand',
      'Debug errors with Claude instead of despair',
    ],
    blocks: [
      ['What JavaScript is for', 'HTML is structure, CSS is style, JavaScript is behavior. Where the third language fits and why it is the one that pays.'],
      ['Click events: make things do stuff', 'The listener pattern behind every interactive page on the internet.'],
      ['Show and hide content', 'Toggles, tabs, and reveals: the most-used trick in front-end work.'],
      ['Debugging with Claude', 'Errors are information. Read the console, hand the error to your co-pilot, and learn the loop that never gets old.'],
    ],
    build: ['Interactive quiz page', 'A quiz that responds when readers answer. Your first page that talks back.'],
    prev: ['section-02.html', 'Section 02'], next: ['section-04.html', 'Section 04'],
  },
  {
    id: 'section-04', file: 'sections/section-04.html', num: '04', part: 'PART I :: FOUNDATIONS',
    title: 'AI as Your Coding Co-Pilot', time: '~45 min', tools: 'Claude',
    legacy: 'weeks/week4.html',
    intro: 'The skill of this decade is not memorizing syntax. It is directing an AI that knows the syntax. This section teaches the prompting workflow the rest of the primer leans on.',
    objectives: [
      'Write prompts with context, constraint, and intent',
      'Iterate on AI output instead of accepting the first draft',
      'Keep a prompt library that compounds',
      'Use Claude to review code, not just write it',
    ],
    blocks: [
      ['The anatomy of a great prompt', 'Context, task, constraints, format. Four parts, no mysticism.'],
      ['Iterative prompting: the real workflow', 'Nobody gets it right in one shot. The conversation is the tool.'],
      ['Building your prompt library', 'Prompts that worked are assets. Where to keep them and how they compound.'],
      ['Using Claude for code review', 'The co-pilot reads your code better than it writes its own. Make review a habit from Section 04 on.'],
    ],
    build: ['Rebuild something with only prompts', 'Take a thing you already made and rebuild it end to end without writing a line by hand.'],
    prev: ['section-03.html', 'Section 03'], next: ['section-05.html', 'Section 05'],
  },
  {
    id: 'section-05', file: 'sections/section-05.html', num: '05', part: 'PART II :: BUILD THINGS',
    title: 'Build Your First Real Website', time: '~60 min', tools: 'VS Code, Claude, Netlify',
    legacy: 'weeks/week5.html',
    intro: 'Everything so far comes together: a real multi-page site, responsive on a phone, deployed on the open internet with your name on it.',
    objectives: [
      'Structure a site across multiple linked pages',
      'Make a layout hold up on a phone',
      'Deploy to Netlify in minutes',
      'Use AI to draft site copy worth keeping',
    ],
    blocks: [
      ['Multi-page site structure', 'Folders, links, and shared navigation: how one page becomes a site.'],
      ['Making it mobile-friendly', 'Most of your visitors are on phones. Responsive basics that cover the real cases.'],
      ['Deploy to Netlify in five minutes', 'From git push to live URL. The moment the internet stops being someone else\'s.'],
      ['Let Claude write your site copy', 'Words are part of the build. Draft with AI, edit like an editor.'],
    ],
    build: ['Three-page portfolio site', 'Live on the internet, linked from your GitHub, shown to at least one human.'],
    prev: ['section-04.html', 'Section 04'], next: ['section-06.html', 'Section 06'],
  },
  {
    id: 'section-06', file: 'sections/section-06.html', num: '06', part: 'PART II :: BUILD THINGS',
    title: 'Landing Pages That Convert', time: '~60 min', tools: 'VS Code, Claude, Netlify',
    legacy: 'weeks/week6.html',
    intro: 'A landing page is a single argument made in one screen. Learn the anatomy, write the copy with AI, and measure whether it works.',
    objectives: [
      'Name the parts of a landing page that does its job',
      'Draft and tighten copy with AI assistance',
      'Build heroes, buttons, and calls to action that earn clicks',
      'Add basic analytics and read them honestly',
    ],
    blocks: [
      ['The anatomy of a great landing page', 'Hero, proof, offer, action. Every converting page is the same skeleton wearing different clothes.'],
      ['AI-assisted copywriting', 'The difference between copy that fills space and copy that moves a reader.'],
      ['Hero sections, buttons, and CTAs', 'The three components that do the persuading, built properly.'],
      ['Adding basic analytics', 'If you cannot measure it, you are guessing. Lightweight analytics without the surveillance.'],
    ],
    build: ['A landing page for your idea', 'Pick something you actually want to exist, and make its one-screen argument.'],
    prev: ['section-05.html', 'Section 05'], next: ['section-07.html', 'Section 07'],
  },
  {
    id: 'section-07', file: 'sections/section-07.html', num: '07', part: 'PART II :: BUILD THINGS',
    title: 'Connecting to APIs', time: '~60 min', tools: 'VS Code, Claude, Replit',
    legacy: 'weeks/week7.html',
    intro: 'APIs are how your page talks to the rest of the world. Fetch live data, read JSON, and keep your keys out of public view.',
    objectives: [
      'Explain what an API is without hand-waving',
      'Fetch live data with JavaScript',
      'Read and navigate JSON responses',
      'Handle API keys without leaking them',
    ],
    blocks: [
      ['What an API is', 'A menu of things another computer will do for you, if you ask in the right format.'],
      ['Fetching data with JavaScript', 'The fetch call: request, response, and the promise in between.'],
      ['Reading JSON', 'The data format of the modern web, and how to walk it without getting lost.'],
      ['API keys and keeping them safe', 'Keys are credentials. Where they go, where they never go, and what happens when people get this wrong.'],
    ],
    build: ['Live weather dashboard', 'Real data from a real API, rendered on a page you built.'],
    prev: ['section-06.html', 'Section 06'], next: ['section-08.html', 'Section 08'],
  },
  {
    id: 'section-08', file: 'sections/section-08.html', num: '08', part: 'PART II :: BUILD THINGS',
    title: 'Build an App with AI Features', time: '~75 min', tools: 'Replit, Claude API',
    legacy: 'weeks/week8.html',
    intro: 'The section where it stops being a website and starts being a product: wire a chat interface to an AI API and give it a personality.',
    objectives: [
      'Understand how AI APIs take prompts and return text',
      'Build a working chat interface',
      'Shape behavior with a system prompt',
      'Keep secrets in environment variables',
    ],
    blocks: [
      ['How AI APIs work', 'Prompt in, completion out, tokens metered. The mental model that makes every AI product legible.'],
      ['Building the chat interface', 'Input, history, response: the three-part loop behind every chatbot you have used.'],
      ['System prompts: give your AI a personality', 'The instructions the user never sees are the product decision that matters most.'],
      ['Environment variables: keeping keys safe', 'Production hygiene from day one. Secrets live in the environment, never in the repo.'],
    ],
    build: ['Your custom AI chatbot', 'Live, shareable, and shaped by a system prompt you wrote.'],
    prev: ['section-07.html', 'Section 07'], next: ['section-09.html', 'Section 09'],
  },
  {
    id: 'section-09', file: 'sections/section-09.html', num: '09', part: 'PART III :: SHIP IT',
    title: 'No-Code + Code: The Hybrid Stack', time: '~45 min', tools: 'Webflow, Airtable',
    legacy: 'weeks/week9.html',
    intro: 'Code where it counts, no-code where it is faster. The hybrid stack is how solo operators ship like teams.',
    objectives: [
      'Decide when to code and when not to',
      'Build visually with Webflow',
      'Use Airtable as a real database',
      'Connect the tools into one system',
    ],
    blocks: [
      ['When to code vs. when to use no-code', 'A decision framework, not a religion. Speed and control trade against each other; know which one the job needs.'],
      ['Webflow basics', 'Visual building with real HTML and CSS underneath, so nothing you learned goes to waste.'],
      ['Airtable as your database', 'Spreadsheet interface, database behavior. Enough structure for most early products.'],
      ['Connecting the tools', 'The integrations that turn separate apps into one working system.'],
    ],
    build: ['Webflow site + Airtable database', 'A site whose content lives in a database you control.'],
    prev: ['section-08.html', 'Section 08'], next: ['section-10.html', 'Section 10'],
  },
  {
    id: 'section-10', file: 'sections/section-10.html', num: '10', part: 'PART III :: SHIP IT',
    title: 'Automations and Workflows', time: '~60 min', tools: 'Make.com',
    legacy: 'weeks/week10.html',
    intro: 'If you do it twice, automate it. Wire apps together with webhooks and put AI steps in the middle.',
    objectives: [
      'Spot the work that should be automated',
      'Build multi-step automations in Make.com',
      'Use webhooks to connect apps in real time',
      'Add AI steps inside an automation',
    ],
    blocks: [
      ['Thinking in automations', 'Triggers, actions, and the habit of noticing repetition.'],
      ['Build automations with Make.com', 'Visual pipelines: when this happens, do that, then that.'],
      ['Webhooks: how apps talk in real time', 'The doorbell of the internet. One URL, instant notification.'],
      ['Adding AI steps to automations', 'Summarize, classify, draft: putting a model inside the pipeline.'],
    ],
    build: ['Automated email digest pipeline', 'A pipeline that gathers, summarizes, and sends without you touching it.'],
    prev: ['section-09.html', 'Section 09'], next: ['section-11.html', 'Section 11'],
  },
  {
    id: 'section-11', file: 'sections/section-11.html', num: '11', part: 'PART III :: SHIP IT',
    title: 'Ship a Full Product', time: '~90 min', tools: 'Everything so far',
    legacy: 'weeks/week11.html',
    intro: 'The capstone. Scope something small enough to finish and real enough to matter, then take it from wireframe to tested, described, and shipped.',
    objectives: [
      'Scope a capstone you can actually finish',
      'Wireframe before building',
      'Test before sharing',
      'Write a product description that sells the work',
    ],
    blocks: [
      ['Scoping your capstone', 'The number one killer of first products is size. Cut until it fits a sitting, then cut again.'],
      ['Wireframe before you build', 'Ten minutes of boxes on paper saves three hours of rebuilding.'],
      ['Testing before you share', 'Click everything, break it yourself, fix what fell over. Then hand it to someone else.'],
      ['Writing your product description', 'What it is, who it is for, why it exists. If you cannot write it, the product is not done.'],
    ],
    build: ['Your capstone', 'An AI-powered mini-product, shipped and described, with your name on it.'],
    prev: ['section-10.html', 'Section 10'], next: ['section-12.html', 'Section 12'],
  },
  {
    id: 'section-12', file: 'sections/section-12.html', num: '12', part: 'PART III :: SHIP IT',
    title: 'You Are a Builder. Now What?', time: '~30 min', tools: 'GitHub, your portfolio',
    legacy: 'weeks/week12.html',
    intro: 'The primer ends; the practice starts. Turn the weekend\'s work into a portfolio, find your people, and pick the next mountain.',
    objectives: [
      'Assemble a portfolio that shows process, not just results',
      'Find communities worth joining',
      'Choose what to learn next, deliberately',
      'Run a retrospective on the whole primer',
    ],
    blocks: [
      ['A portfolio that shows process', 'Employers and clients trust process more than polish. Commits, iterations, and decisions are the portfolio.'],
      ['Communities to join', 'Builders compound in company. Where the good rooms are and how to show up in them.'],
      ['What to learn next', 'Paths from here: deeper code, agents and automation, or shipping products. Pick by what you want to build, not by fashion.'],
      ['The retrospective', 'What was hard, what surprised you, what you would tell yourself at Section 00.'],
    ],
    build: ['Your primer portfolio', 'Every build from these twelve sections in one place, with the process showing.'],
    prev: ['section-11.html', 'Section 11'], next: null,
  },
];

const esc = s => s; // copy is hand-authored; no user input

// ── content port: pull lesson bodies out of the legacy weeks pages ──
function portContent(s) {
  let html;
  try { html = readFileSync(s.legacy, 'utf8'); } catch (e) { return null; }
  const start = html.indexOf('<div class="lesson-section"');
  const end = html.indexOf('<div class="complete-section"');
  if (start < 0 || end < 0 || end <= start) return null;
  let body = html.slice(start, end);

  // brand pass: strip emoji, convert em/en dashes, weeks become sections
  body = body.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{200D}]/gu, '');
  body = body.replace(/<h2>\s+/g, '<h2>');
  body = body.replace(/\s*—\s*/g, ' :: ').replace(/\s*–\s*/g, ' :: ');
  body = body.replace(/\b[Ww]eek (\d+)/g, 'Section $1');
  body = body.replace(/this week/gi, 'this section').replace(/next week/gi, 'next section');
  body = body.replace(/12-week/gi, 'twelve-section').replace(/12 weeks/gi, 'twelve sections');
  // de-vibe: "vibe developer/development" is old identity language; builders now
  body = body.replace(/montani-vibe-projects/g, 'm0ntan1-academy-projects');
  body = body.replace(/Vibe [Dd]evelopment/g, 'Building with AI').replace(/vibe development/g, 'building with AI');
  body = body.replace(/Vibe Developer/g, 'Builder').replace(/vibe developer's/g, "builder's");
  body = body.replace(/vibe developers/g, 'builders').replace(/vibe developer/g, 'builder');

  if (s.id === 'section-12') body = remixSection12(body);
  return body;
}

// Section 12: communities held back as (still building); Anthropic 101 ladder added.
const COURSES_HTML = `
<div class="lesson-section" id="claude-courses">
  <div class="section-number">Continue :: Claude training</div>
  <h2>Follow along into the Claude courses</h2>
  <p>Anthropic runs its own free, self-paced academy with official certificates. These three pick up exactly where this primer leaves off. Free, email signup only.</p>
  <div class="courses">
    <a class="course" href="https://anthropic.skilljar.com/claude-101" target="_blank" rel="noopener">
      <span class="ck">Anthropic Academy :: 01</span>
      <h3>Claude 101</h3>
      <p>Everyday work with Claude: core features, projects, and the habits that compound. The natural next step after this primer.</p>
      <span class="go">Start the course &rarr;</span>
    </a>
    <a class="course" href="https://anthropic.skilljar.com/claude-code-101" target="_blank" rel="noopener">
      <span class="ck">Anthropic Academy :: 02</span>
      <h3>Claude Code 101</h3>
      <p>The co-pilot moves into your terminal. Daily development workflow with Claude Code, from first command to real projects.</p>
      <span class="go">Start the course &rarr;</span>
    </a>
    <a class="course" href="https://anthropic.skilljar.com/claude-platform-101" target="_blank" rel="noopener">
      <span class="ck">Anthropic Academy :: 03</span>
      <h3>Claude Platform 101</h3>
      <p>Build on the Claude Developer Platform: the API fundamentals behind everything you shipped in Sections 07 and 08.</p>
      <span class="go">Start the course &rarr;</span>
    </a>
  </div>
  <p>Each course issues an official Anthropic certificate on completion. Stack them next to your MØNTAN1 Academy certificate.</p>
</div>
`;

function remixSection12(body) {
  // Replace the Communities section's content with a (still building) note,
  // then slot the Claude courses in right after it.
  const h2 = body.indexOf('Communities to Join</h2>');
  if (h2 < 0) return body + COURSES_HTML;
  const secStart = body.lastIndexOf('<div class="lesson-section"', h2);
  const secEnd = body.indexOf('<div class="lesson-section"', h2);
  const replacement = `<div class="lesson-section" id="communities">
  <div class="section-number">Communities</div>
  <h2>Communities to Join</h2>
  <div class="still-building">
    <b>[ Still building ]</b>
    A vetted list of rooms worth your time is being assembled. No link goes here until it is somewhere we would send a neighbor. Check back.
  </div>
</div>

`;
  if (secEnd < 0) return body.slice(0, secStart) + replacement + COURSES_HTML;
  return body.slice(0, secStart) + replacement + COURSES_HTML + '\n' + body.slice(secEnd);
}

// Certificate claim panel (section 12 only). Static-site friendly: the form
// composes an email to the desk. TODO: swap the mailto for a Formspree or
// Netlify Forms endpoint when one is set up.
const CLAIM_HTML = `
  <div class="claim" id="claim">
    <h3>Certificate of completion</h3>
    <h2>Claim your certificate.</h2>
    <p>Finish all twelve sections, then enter your name and email. We will make out your MØNTAN1 Academy certificate and mail it to you, signed and checked.</p>
    <form id="claim-form">
      <input type="text" id="claim-name" placeholder="Your name, as it should appear" required>
      <input type="email" id="claim-email" placeholder="you@example.com" required>
      <button class="btn red" type="submit" id="claim-btn">Request certificate</button>
    </form>
    <div class="locked-note">Unlocks when all 12 sections are marked complete</div>
  </div>
`;

function page(s) {
  const base = s.root ? '' : '../';
  const pager = [
    s.prev ? `<a class="btn ghost" href="${s.prev[0]}">&larr; ${s.prev[1]}</a>` : '',
    s.next ? `<a class="btn ghost" href="${s.next[0]}">${s.next[1]} &rarr;</a>`
           : `<a class="btn ghost" href="${base}index.html">Back to curriculum &rarr;</a>`,
  ].join('\n        ');

  const ported = portContent(s);
  const outline = s.blocks.map(([h, p], i) => `  <div class="block reveal">
    <div class="no">${String(i + 1).padStart(2, '0')}</div>
    <div>
      <h2>${esc(h)}</h2>
      <p>${esc(p)}</p>
      <div class="porting">[ Outline :: full lesson in production ]</div>
    </div>
  </div>`).join('\n');
  const buildBox = `  <div class="build reveal">
    <h3>The build</h3>
    <h2>${esc(s.build[0])}</h2>
    <p>${esc(s.build[1])}</p>
  </div>`;
  const bodyCore = ported !== null ? ported : outline + '\n\n' + buildBox;
  const extras = s.id === 'section-12' ? CLAIM_HTML : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Section ${s.num} :: ${esc(s.title)} :: MØNTAN1 Academy</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/academy.css">
</head>
<body>

<div class="wrap">
  <header class="top">
    <a class="mark" href="${base}index.html">M<span class="o">Ø</span>NTAN1<small>ACADEMY</small></a>
    <nav>
      <a href="${base}index.html">Curriculum</a>
      <a href="${base}setup.html">Setup</a>
    </nav>
    <a class="cta" href="https://m0ntan1.com">MØNTAN1</a>
  </header>

  <section class="lesson-head">
    <div class="eyebrow">[ SECTION ${s.num} :: ${esc(s.part)} ]</div>
    <h1>${esc(s.title)}<span class="red">.</span></h1>
    <p class="intro">${esc(s.intro)}</p>
    <div class="lesson-meta">
      <span><b>Time</b> ${s.time}</span>
      <span><b>Tools</b> ${esc(s.tools)}</span>
      <span><b>Cost</b> $0</span>
    </div>
  </section>

${toolRail(s.tools)}

  <div class="objectives reveal">
    <h3>You will learn</h3>
    <ul>
${s.objectives.map(o => `      <li>${esc(o)}</li>`).join('\n')}
    </ul>
  </div>
${keyVisual(s.id)}
  <!-- Lesson body ported at build time from ${s.legacy} -->
${bodyCore}
${extras}
  <div class="finish">
    <button class="btn red" data-complete="${s.id}">Mark section complete</button>
    <div class="pager">
        ${pager}
    </div>
  </div>

  <footer>
    <span>&copy; 2026 MØNTAN1 Academy :: Free forever</span>
    <span>Drawn: B0SEPHUS G. ALTAMONT :: Checked: MERCER LANG</span>
    <a href="https://m0ntan1.com">m0ntan1.com</a>
  </footer>
</div>

<script src="${base}assets/academy.js"></script>
</body>
</html>
`;
}

mkdirSync('sections', { recursive: true });
for (const s of SECTIONS) {
  writeFileSync(s.file, page(s));
  console.log('wrote', s.file);
}
console.log(`${SECTIONS.length} pages generated.`);
