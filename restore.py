import os

INDEX_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jared Libby - Product & User Experience Leader</title>
    <meta name="description" content="Product & User Experience Leader - Jared loves to create meaningful interactive solutions with people, for people." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,900;1,400&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <!-- HEADER SECTION: -->
    <header>
        <div class="site-header">JARED LIBBY</div>
        <section class="hero">
            <img src="assets/image-UI-design-work.jpg" alt="Jared Libby working on UI design sketches" class="hero-image" loading="lazy">
            <div class="hero-content">
                <h1 class="hero-title">Product &amp; User Experience Leader</h1>
            </div>
        </section>
    </header>

    <!-- SUMMARY SECTION: -->
    <main>
        <section class="section summary-section" aria-labelledby="summary-heading">
            <div class="container">
                <div class="summary-box">
                    <div class="summary-label" id="summary-heading">SUMMARY</div>
                    <h2 class="summary-title">Jared loves to create meaningful interactive solutions with people, for people.</h2>
                    <div class="summary-content">
                        <p class="summary-col">As a hands-on product leader with over 25 years of award-winning experience, he views design as encompassing the entire product, placing users at the heart of growth while integrating business objectives, engineering feasibility, marketing brand promises, sales expectations, and support communication. He believes that great design thrives on collaboration and iteration, transforming strategic vision and market opportunities into compelling, end-to-end user experiences.</p>
                        <p class="summary-col">On a practical level, he researches users, sparks discussions, forms hypotheses, challenges assumptions, brings clarity through definition, designs interfaces, ensures quality, and embraces change. He strikes a balance between the three cornerstones of interactive solutions: leading with the <strong>user</strong> in mind, managing from the <strong>business</strong> perspective, and supporting the <strong>technology</strong> side. Driven by a natural empathy for users, he focuses deeply on the art and science of designing interfaces that are easy to use.</p>
                    </div>
                    <img src="assets/image-summary.jpg" alt="Design process sketches" class="summary-image" loading="lazy">
                </div>
            </div>
        </section>
    </main>

    <!-- PRODUCT MODEL SECTION: -->
    <section class="product-model-section" aria-labelledby="product-model-heading">
        <div class="container">
            <div class="product-model-content">
                <header class="section-header">
                    <h2 class="section-title" id="product-model-heading">Product Model</h2>
                    <div class="section-label">APPROACH</div>
                </header>

                <div class="intro-text">
                    <p>Grounded in a foundation of industry best practices and extensive experience, Jared's <a href="adaptiveproductmodel/index.html" class="highlight-underline">Adaptive Product Model</a> is a conceptual approach for creating interactive solutions that deliver value to users while achieving desired business outcomes, rather than merely producing output. At its core is <strong>Tri-Track Agile</strong>, which introduces a continuous strategy loop alongside parallel discovery and delivery tracks:</p>
                </div>

                <div class="model-cards">
                    <article class="card" tabindex="0">
                        <div class="card-icon">
                            <img src="../assets/diagram-strategy-track.svg" alt="Strategy Track diagram" width="189" height="166" />
                        </div>
                        <h3 class="card-title">Strategy</h3>
                        <p class="card-text">Continuously defines the priority of user and business problems to solve, pairing a Vision-Led Strategy and Product-Led Growth with the DVF Framework to establish strategic guardrails.</p>
                    </article>

                    <article class="card" tabindex="0">
                        <div class="card-icon">
                            <img src="../assets/diagram-discovery-track.svg" alt="Discovery Track diagram" width="189" height="166" />
                        </div>
                        <h3 class="card-title">Discovery</h3>
                        <p class="card-text">Continuously validates what to build using Whole Product Design and Double Diamond Design, challenging solution ideas directly with users before dedicating engineering resources.</p>
                    </article>

                    <article class="card" tabindex="0">
                        <div class="card-icon">
                            <img src="../assets/diagram-delivery-track.svg" alt="Delivery Track diagram" width="189" height="166" />
                        </div>
                        <h3 class="card-title">Delivery</h3>
                        <p class="card-text">Continuously develops and deploys builds through decoupled releases, combining agile execution with an Architecture-First mindset to ensure technical sustainability and system scalability.</p>
                    </article>
                </div>

                <div class="outro-text">
                    <p>Tightly integrating these three tracks transcends the mechanical production of output into a unified system that consistently generates sustained, meaningful outcomes.</p>
                </div>
                <a href="adaptiveproductmodel/index.html" class="btn-primary">ADAPTIVE PRODUCT MODEL</a>
            </div>
        </div>
    </section>
   
    <!-- CORE DISCIPLINES SECTION: -->
    <section class="core-disciplines-section" aria-labelledby="core-disciplines-heading">
        <div class="container">
            <div class="core-disciplines-content">
                <header class="section-header">
                    <h2 class="section-title" id="core-disciplines-heading">Core Disciplines</h2>
                    <div class="section-label">EXPERTISE</div>
                </header>

                <div class="discipline-intro">
                    <div class="discipline-divider" aria-hidden="true"></div>
                    <p class="discipline-intro-text">Modern strategy bridges the gap between business objectives and user behavior. Continually aligning market intelligence with usage data creates a shift from speculative planning to evidence-based agility, which Jared focuses on through:</p>
                    <div class="discipline-divider" aria-hidden="true"></div>
                </div>

                <div class="discipline-list">
                    <article class="discipline-item">
                        <div class="discipline-icon" aria-hidden="true">
                            <img src="../assets/graphic-opportunity-assessment.svg" alt="Opportunity Assessment skill" width="174" height="116" />
                        </div>
                        <div class="discipline-text">
                            <h3 class="discipline-title">Opportunity Assessment</h3>
                            <p class="discipline-desc">Evaluates market dynamics with user demands to prioritize critical user and business problems. Analyzing strategic fit, establishing financial models, and evaluating competitive differentiation mitigates risk before committing resources to initiatives.</p>
                        </div>
                    </article>

                    <article class="discipline-item">
                        <div class="discipline-icon" aria-hidden="true">
                            <img src="../assets/graphic-performance-analysis.svg" alt="Performance Analysis skill" width="174" height="116" />
                        </div>
                        <div class="discipline-text">
                            <h3 class="discipline-title">Performance Analysis</h3>
                            <p class="discipline-desc">Has transitioned from static retrospective reporting to leveraging real-time interpretation of quantitative usage data and live business telemetry. Combining user behavior metrics with product performance generates the essential feedback loop to adaptively steer strategic cycles.</p>
                        </div>
                    </article>
                </div>

                <div class="discipline-intro">
                    <div class="discipline-divider" aria-hidden="true"></div>
                    <p class="discipline-intro-text">Jared also transforms raw user insights and data into a cohesive experience across the entire user lifecycle relying on various degrees of these design disciplines to work in tandem throughout discovery:</p>
                    <div class="discipline-divider" aria-hidden="true"></div>
                </div>

                <div class="discipline-list">
                    <article class="discipline-item">
                        <div class="discipline-icon" aria-hidden="true">
                            <img src="../assets/graphic-user-research.svg" alt="User Research skill" width="174" height="116" />
                        </div>
                        <div class="discipline-text">
                            <h3 class="discipline-title">User Research</h3>
                            <p class="discipline-desc">Has moved away from heavy, front-loaded efforts toward AI-assisted continuous discovery loops for synthesizing analytics with feedback and analyzing dynamic personas. Observing the market, forming hypotheses, and rapidly testing the riskiest assumptions.</p>
                        </div>
                    </article>

                    <article class="discipline-item">
                        <div class="discipline-icon" aria-hidden="true">
                            <img src="../assets/graphic-information-design.svg" alt="Information Design skill" width="174" height="117" />
                        </div>
                        <div class="discipline-text">
                            <h3 class="discipline-title">Information Design</h3>
                            <p class="discipline-desc">Handles organizing functionality and content via information architecture, not just for human navigation, but ensuring it's optimized for LLMs, Retrieval-Augmented Generation (RAG), and semantic search engines. Establishing a shared glossary helps provide consistent terminology across the user's entire product experience.</p>
                        </div>
                    </article>

                    <article class="discipline-item">
                        <div class="discipline-icon" aria-hidden="true">
                            <img src="../assets/graphic-interaction-design.svg" alt="Interaction Design skill" width="176" height="117" />
                        </div>
                        <div class="discipline-text">
                            <h3 class="discipline-title">Interaction Design</h3>
                            <p class="discipline-desc">Rapidly develops prototypes to validate core functionality and content. Prototyping has transitioned from high-maintenance clickthrough screens to high-fidelity interactive prototypes that mirror real production components and logic, allowing for true usability validation and streamlined development flow.</p>
                        </div>
                    </article>

                    <article class="discipline-item">
                        <div class="discipline-icon" aria-hidden="true">
                            <img src="../assets/graphic-visual-design.svg" alt="Visual Design skill" width="176" height="117" />
                        </div>
                        <div class="discipline-text">
                            <h3 class="discipline-title">Visual Design</h3>
                            <p class="discipline-desc">Produces modern design systems that help products scale through strict W3C-compliant design token architecture and unified design engineering pipelines that automatically sync to production codebases. Forming style guides, design patterns, and a library of reusable assets ensures cohesion across the entire product experience as well.</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>

 <!-- FOOTER SECTION: -->
 <footer class="site-footer">
     <section class="cta-section" aria-labelledby="cta-heading">
         <img src="assets/banner-footer.jpg" alt="" class="cta-bg-image" loading="lazy">
         <div class="container">
             <div class="cta-content">
                 <h2 class="cta-title" id="cta-heading">From startups to enterprise SaaS, view Jared’s career journey and track record.</h2>
                 <a href="../background/index.html" class="btn-primary">BACKGROUND</a>
             </div>
         </div>
     </section>
 </footer>

</body>
</html>"""

STYLE_CSS = """:root {
  /* layout */
  --header-height: 128px;
  --container-wide: 1200px;

  /* colour/primitive */
  --color-white: #ffffff;
  --color-black: #475554;
  --color-brand-50: #eff7f7;
  --color-brand-100: #e5f3f3;
  --color-brand-200: #d9eded;
  --color-brand-300: #c0e6e5;
  --color-brand-400: #b4d9d9;
  --color-brand-500: #95cccc;
  --color-brand-600: #869d9d;
  --color-brand-700: #637575;
  --color-brand-800: #475554;
  --color-brand-900: #293131;
  --color-brand-950: #0f1212;
  --color-neutral-50: #f6f5f4;
  --color-neutral-100: #efeeec;
  --color-neutral-200: #e7e4df;
  --color-neutral-300: #d9d5cf;
  --color-neutral-400: #c8c5bf;
  --color-neutral-500: #b5b0a8;
  --color-neutral-600: #8e8b88;
  --color-neutral-700: #6a6866;
  --color-neutral-800: #4d4b49;
  --color-neutral-900: #2d2c2b;
  --color-neutral-950: #111010;
  --color-rust-red-50: #fff0ea;
  --color-rust-red-100: #ffd7c8;
  --color-rust-red-200: #ffbaa4;
  --color-rust-red-300: #f19982;
  --color-rust-red-400: #cd7963;
  --color-rust-red-500: #b33c1b;
  --color-rust-red-600: #774638;
  --color-rust-red-700: #5c342a;
  --color-rust-red-800: #44271f;
  --color-rust-red-900: #2b1813;
  --color-rust-red-950: #120b09;

  /* colour/semantic */
  --color-background: var(--color-white);
  --color-surface: var(--color-white);
  --color-overlay: var(--color-neutral-950);
  --color-foreground: var(--color-neutral-950);
  --color-foreground-muted: var(--color-neutral-600);
  --color-primary: var(--color-brand-500);
  --color-primary-foreground: var(--color-white);
  --color-primary-hover: var(--color-brand-600);
  --color-primary-pressed: var(--color-brand-700);
  --color-neutral: var(--color-neutral-100);
  --color-neutral-foreground: var(--color-neutral-900);
  --color-danger: var(--color-brand-500);
  --color-danger-foreground: var(--color-white);
  --color-danger-hover: var(--color-brand-600);
  --color-danger-pressed: var(--color-brand-700);
  --color-border: var(--color-neutral-200);
  --color-border-hover: var(--color-neutral-300);
  --color-border-focus: var(--color-brand-500);
  --color-input-border: var(--color-neutral-300);
  --color-toggle-off: var(--color-neutral-300);
  --color-toggle-on: var(--color-brand-500);
  --color-indicator: var(--color-white);
  --color-disabled: var(--color-neutral-100);
  --color-disabled-foreground: var(--color-neutral-400);
  --color-success: var(--color-brand-500);
  --color-success-foreground: var(--color-brand-50);
  --color-warning: var(--color-brand-500);
  --color-warning-foreground: var(--color-brand-50);
  --color-info: var(--color-brand-500);
  --color-info-foreground: var(--color-brand-50);

  /* typography/primitive */
  --type-font-family-raleway: Raleway;
  --type-font-family-playfair: Playfair Display;
  --type-font-size-xs: 12px;
  --type-font-size-sm: 14px;
  --type-font-size-base: 16px;
  --type-font-size-lg: 18px;
  --type-font-size-xl: 20px;
  --type-font-size-2xl: 24px;
  --type-font-size-3xl: 30px;
  --type-font-size-4xl: 36px;
  --type-font-size-5xl: 48px;

  /* typography/semantic */
  --type-heading-xl-size: var(--type-font-size-5xl);
  --type-heading-xl-weight: 700;
  --type-heading-lg-size: var(--type-font-size-4xl);
  --type-heading-lg-weight: 400;
  --type-heading-md-size: var(--type-font-size-3xl);
  --type-heading-md-weight: 400;
  --type-heading-sm-size: var(--type-font-size-2xl);
  --type-heading-sm-weight: 700;
  --type-body-size: var(--type-font-size-base);
  --type-body-weight: 400;
  --type-body-sm-size: var(--type-font-size-sm);
  --type-body-sm-weight: 400;
  --type-label-size: var(--type-font-size-sm);
  --type-label-weight: 900;
  --type-caption-size: var(--type-font-size-xs);
  --type-caption-weight: 400;
  --type-code-size: var(--type-font-size-sm);
  --type-code-weight: 400;

  /* spacing/primitive */
  --spacing-spacing-0-25: 1px;
  --spacing-spacing-0-5: 2px;
  --spacing-spacing-1: 4px;
  --spacing-spacing-1-5: 6px;
  --spacing-spacing-2: 8px;
  --spacing-spacing-2-5: 10px;
  --spacing-spacing-3: 12px;
  --spacing-spacing-3-5: 14px;
  --spacing-spacing-4: 16px;
  --spacing-spacing-5: 20px;
  --spacing-spacing-6: 24px;
  --spacing-spacing-7: 28px;
  --spacing-spacing-8: 32px;
  --spacing-spacing-9: 36px;
  --spacing-spacing-10: 40px;
  --spacing-spacing-11: 44px;
  --spacing-spacing-12: 48px;
  --spacing-spacing-14: 56px;
  --spacing-spacing-16: 64px;
  --spacing-spacing-20: 80px;
  --spacing-spacing-24: 96px;

  /* radius/primitive */
  --radius-radius-xs: 0px;
  --radius-radius-sm: 0px;
  --radius-radius-md: 2px;
  --radius-radius-lg: 4px;
  --radius-radius-xl: 8px;
  --radius-radius-2xl: 12px;
  --radius-radius-full: 9999px;

  /* transitions */
  --transition-smooth: 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  font-family: var(--type-font-family-raleway);
  color: var(--color-foreground);
  background: var(--color-background);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--type-font-family-playfair);
  font-weight: 700;
}

strong, b {
  font-weight: 700;
}

.site-header {
  height: var(--header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-background);
  font-size: var(--type-heading-xl-size);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-xl-weight);
  color: var(--color-brand-800);
  text-align: center;
}

.hero {
  position: relative;
  height: 368px; /* Restored original height for home */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--color-brand-800);
}

.hero img {
  position: absolute;
  bottom: -290px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-width: 1440px;
  height: auto;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 920px;
  padding: 0 var(--spacing-spacing-10);
  margin: 0 auto;
}

.hero-title {
  color: var(--color-white);
  font-size: var(--type-heading-lg-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-heading-xl-weight);
}

/* Subheader Variant */
.hero-sub {
  position: relative;
  height: 128px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: var(--color-brand-800);
}

.hero-sub img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-sub .hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 920px;
  padding: 0 var(--spacing-spacing-10);
  margin: 0 auto;
}

.hero-sub .hero-title {
  color: var(--color-white);
  font-size: var(--type-heading-lg-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-heading-xl-weight);
}

/* Common Components */
.tag {
  background: var(--c-rust-red);
  color: var(--c-white);
  font-size: 13px;
  font-family: var(--font-sans);
  font-weight: 800;
  text-transform: uppercase;
  line-height: 24px;
  padding: 0 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 287px;
  max-width: 100%;
  letter-spacing: 0.5px;
}

.section {
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  width: 100%;
  max-width: var(--container-wide);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Summary Section */
.summary-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6);
  background: var(--color-white);
  display: flex;
  justify-content: center;
}

.summary-box {
  background: var(--color-neutral-50);
  padding: var(--spacing-spacing-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.summary-label {
  background: var(--color-rust-red-500);
  color: var(--color-white);
  padding: 0 var(--spacing-spacing-4);
  font-size: var(--type-font-size-sm);
  font-family: var(--type-font-family-raleway);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 240px;
}

.summary-title {
  text-align: center;
  font-size: var(--type-heading-lg-size);
  font-weight: var(--type-heading-lg-weight);
  font-family: var(--type-font-family-playfair);
  color: var(--color-brand-800);
  max-width: 100%;
  line-height: 1.15;
}

.summary-content {
  display: flex;
  gap: var(--spacing-spacing-10);
  width: 100%;
  text-align: left;
}

.summary-col {
  flex: 1;
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
}

.summary-col strong {
  font-weight: 700;
}

.summary-image {
  width: 100%;
  height: 275px;
  object-fit: cover;
  display: block;
}

/* Product Model Section */
.product-model-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6);
  background: var(--color-neutral-50);
  display: flex;
  justify-content: center;
}

.product-model-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-8);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-4);
  text-align: center;
  width: 100%;
}

.section-title {
  font-size: var(--type-heading-lg-size);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-lg-weight);
  color: var(--color-brand-800);
  line-height: 1.15;
}

.section-label {
  background: var(--color-rust-red-500);
  color: var(--color-white);
  padding: 0 var(--spacing-spacing-4);
  font-size: var(--type-font-size-sm);
  font-family: var(--type-font-family-raleway);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 240px;
}

.intro-text p, .outro-text p {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  text-align: left;
}

.intro-text, .outro-text {
  padding: 0 124px;
  width: 100%;
}

.highlight-underline {
  color: var(--color-rust-red-500);
  font-weight: 700;
  text-decoration: underline;
}

.intro-text p strong:not(.highlight-underline) {
  font-weight: 700;
}

.model-cards {
  display: flex;
  gap: var(--spacing-spacing-4);
  justify-content: center;
  width: 100%;
}

.card {
  background: var(--color-white);
  padding: var(--spacing-spacing-6) var(--spacing-spacing-5) var(--spacing-spacing-6) var(--spacing-spacing-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0;
  min-width: 0;
  gap: var(--spacing-spacing-5);
  text-align: center;
  border-radius: var(--radius-radius-md);
  transition: transform var(--transition-smooth), box-shadow var(--transition-smooth);
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.card:focus-visible {
  outline: 2px solid var(--color-brand-500);
  outline-offset: 2px;
}

.card-icon {
  width: 189px;
  height: 166px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-icon svg {
  max-width: 100%;
  max-height: 100%;
}

.card-title {
  font-size: var(--type-font-size-2xl);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-sm-weight);
  color: var(--color-brand-800);
}

.card-text {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  text-align: left;
}

/* Sectors Section */
.sectors-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6);
  background: var(--color-white);
  display: flex;
  justify-content: center;
}

.sectors-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.sectors-intro {
  padding: 0 124px;
  text-align: left;
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  width: 100%;
}

.sectors-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-6);
  width: 100%;
}

.sectors-label {
  background: var(--color-brand-800);
  color: var(--color-white);
  padding: 0 var(--spacing-spacing-4);
  font-size: var(--type-font-size-sm);
  font-family: var(--type-font-family-raleway);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 240px;
}

.sectors-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-spacing-2) var(--spacing-spacing-8);
  width: 100%;
}

.sector-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-spacing-2);
  color: var(--color-brand-800);
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: 700;
  line-height: 1.5;
}

.sector-item img {
  flex-shrink: 0;
  object-fit: contain;
}

/* Accomplishments Section */
.accomplishments-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6);
  background: var(--color-neutral-50);
  display: flex;
  justify-content: center;
}

.accomplishments-container {
  background: var(--color-brand-300);
  padding: var(--spacing-spacing-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-6);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.accomplishments-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-6);
  width: 100%;
}

.accomplishments-title {
  color: var(--color-brand-800);
  font-size: var(--type-heading-lg-size);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-lg-weight);
  text-align: center;
  line-height: 1.15;
}

.accomplishments-intro {
  color: var(--color-brand-800);
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  text-align: center;
  line-height: 1.5;
  padding: 0 124px;
  width: 100%;
}

.accomplishments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-spacing-4);
  width: 100%;
}

.accomplishment-card {
  background: var(--color-white);
  padding: var(--spacing-spacing-4);
  display: flex;
  align-items: center;
  gap: var(--spacing-spacing-6);
}

.accomplishment-icon {
  flex-shrink: 0;
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.accomplishment-icon img {
  max-width: 100%;
  height: auto;
}

.accomplishment-text {
  color: var(--color-brand-800);
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  line-height: 1.5;
  text-align: left;
}

/* Experience Section */
.experience-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-12);
  background: var(--color-white);
  display: flex;
  justify-content: center;
}

.experience-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.experience-title {
  color: var(--color-brand-800);
  font-size: var(--type-heading-lg-size);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-lg-weight);
  text-align: center;
  line-height: 1.15;
}

.experience-text {
  color: var(--color-brand-800);
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  line-height: 1.5;
  padding: 0 124px;
  width: 100%;
}

.experience-text p {
  margin-bottom: var(--spacing-spacing-4);
}

.experience-text p:last-child {
  margin-bottom: 0;
}

.experience-divider {
  width: 100%;
  height: 1px;
  background: var(--color-brand-500);
}

.experience-timeline {
  max-width: 100%;
  height: auto;
}

/* Brands Section */
.brands-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-6);
  background: var(--color-neutral-50);
  display: flex;
  justify-content: center;
}

.brands-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-5);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.brands-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-4);
  padding-bottom: var(--spacing-spacing-8);
  width: 100%;
}

.brands-label {
  background: var(--color-brand-800);
  color: var(--color-white);
  padding: 0 var(--spacing-spacing-4);
  font-size: var(--type-font-size-sm);
  font-family: var(--type-font-family-raleway);
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  line-height: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 240px;
}

.brands-title {
  color: var(--color-brand-800);
  font-size: var(--type-heading-lg-size);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-lg-weight);
  text-align: center;
  line-height: 1.15;
}

.brands-divider {
  width: 100%;
  height: 1px;
  background: var(--color-brand-500);
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
}

.brand-logo {
  height: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.brand-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

/* Approach Section */
.approach-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-12);
  background: var(--color-white);
  display: flex;
  justify-content: center;
}

.approach-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.approach-label {
  background: var(--color-brand-300);
  color: var(--color-brand-800);
}

.approach-intro {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-spacing-6);
  width: 100%;
}

.approach-intro p {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  text-align: left;
}

.approach-intro p strong {
  font-weight: 700;
}

.track-diagram {
  width: 100%;
  max-width: 856px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-spacing-6);
  margin-top: var(--spacing-spacing-8);
}

.track-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-1-5);
  flex: 1;
}

.track-step:nth-child(2) {
  transform: translateY(24px); /* Staggered downward */
}

.track-step:nth-child(3) {
  transform: translateY(48px); /* Staggered further downward */
}

.track-label {
  font-size: 10px; /* Matching the small visual size from SVGs */
  font-family: var(--type-font-family-raleway);
  font-weight: 900;
  color: var(--color-brand-500);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.track-line {
  width: 100%;
  height: 4px;
  background: var(--color-brand-800);
}

.track-name {
  font-size: var(--type-font-size-2xl);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-lg-weight);
  color: var(--color-brand-800);
  margin-top: var(--spacing-spacing-2);
}

/* Common Track Sections (Strategy, Discovery, Delivery) */
.track-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-12);
  display: flex;
  justify-content: center;
}

.strategy-track {
  background: var(--color-neutral-50);
}

.discovery-track {
  background: var(--color-white);
}

.delivery-track {
  background: var(--color-neutral-50);
}

.track-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  padding: 0 124px;
}

.track-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-spacing-4);
  width: 100%;
}

.track-row {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--spacing-spacing-6);
  width: 100%;
}

.track-text {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-spacing-4);
}

.track-text p {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  text-align: left;
}

.track-text p strong {
  font-weight: 700;
}

u {
  text-decoration: underline;
  text-decoration-color: #95cccc;
  text-decoration-style: dotted;
  text-underline-offset: 4px;
}

.track-image {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

/* Conclusion Section */
.conclusion-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-12);
  background: var(--color-white);
  display: flex;
  justify-content: center;
}

.conclusion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  padding: 0 var(--spacing-spacing-10);
  margin: 0 auto;
}

.conclusion-divider {
  display: block;
}

.conclusion-text {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  text-align: left;
  width: 100%;
}

/* Core Disciplines Section */
.core-disciplines-section {
  padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-12);
  background: var(--color-white);
  display: flex;
  justify-content: center;
}

.core-disciplines-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.discipline-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-6);
  width: 100%;
}

.discipline-intro-text {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
  text-align: left;
  max-width: 672px;
}

.discipline-divider {
  width: 100%;
  height: 1px;
  background: var(--color-brand-500);
}

.discipline-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-spacing-10);
  width: 100%;
}

.discipline-item {
  display: flex;
  gap: var(--spacing-spacing-10);
  align-items: flex-start;
  width: 100%;
}

.discipline-icon {
  width: 174px;
  height: 117px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.discipline-icon svg {
  max-width: 100%;
  max-height: 100%;
}

.discipline-text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-spacing-6);
  flex: 1;
}

.discipline-title {
  font-size: var(--type-font-size-2xl);
  font-family: var(--type-font-family-playfair);
  font-weight: var(--type-heading-sm-weight);
  color: var(--color-brand-800);
  line-height: 1.15;
}

.discipline-desc {
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-body-weight);
  color: var(--color-brand-800);
  line-height: 1.5;
}

/* CTA Footer */
.site-footer {
  width: 100%;
}

.cta-section {
  position: relative;
  min-height: 256px;
  background: var(--color-brand-800);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  padding: var(--spacing-spacing-20) 0;
}

.cta-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  mix-blend-mode: luminosity;
  opacity: 0.8;
}

.cta-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-spacing-10);
  width: 100%;
  max-width: 920px;
  padding: 0 var(--spacing-spacing-6);
  margin: 0 auto;
}

.cta-title {
  color: var(--color-white);
  font-size: var(--type-font-size-2xl);
  font-family: var(--type-font-family-raleway);
  font-weight: var(--type-heading-sm-weight);
  line-height: 1.25;
}

.btn-primary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: var(--color-brand-300);
  color: var(--color-brand-800);
  font-size: var(--type-body-size);
  font-family: var(--type-font-family-raleway);
  font-weight: 700;
  text-transform: uppercase;
  padding: 14px 18px;
  border-radius: var(--radius-radius-lg);
  box-shadow: -12px -12px 0px var(--color-rust-red-500);
  outline: 4px solid var(--color-white);
  text-decoration: none;
  transition: all var(--transition-smooth);
}

.btn-primary:hover {
  background: var(--color-neutral-50);
  outline-color: var(--color-neutral-50);
  box-shadow: -12px -12px 0px var(--color-rust-red-500);
  color: var(--color-rust-red-500);
  transform: none;
}

.btn-primary:focus-visible {
  background: var(--color-brand-300);
  outline-color: var(--color-brand-800);
  box-shadow: -12px -12px 0px var(--color-rust-red-500);
  color: var(--color-brand-800);
  transform: none;
}

.btn-primary:active {
  box-shadow: 0px 0px 0px var(--color-rust-red-500);
  transform: translate(-12px, -12px);
}

.btn-primary:disabled,
.btn-primary[disabled] {
  background: var(--color-brand-800);
  outline-color: var(--color-brand-800);
  box-shadow: -12px -12px 0px var(--color-rust-red-500);
  color: var(--color-brand-600);
  cursor: not-allowed;
  transform: none;
}

/* Mobile Media Query */
@media (max-width: 768px) {
  .site-header {
    height: 96px;
    font-size: var(--type-heading-lg-size);
    padding: var(--spacing-spacing-6);
    line-height: 40px; /* Restored original line-height */
  }
  
  .hero {
    height: 96px; /* Restored original home height */
    align-items: center;
  }
  
  .hero img {
    bottom: -81px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    min-width: 100vw;
    height: auto;
  }
  
  .hero-title {
    font-size: var(--type-font-size-2xl); /* Restored original font size */
    line-height: 30px;
    margin-top: 0;
  }
  
  .hero-content {
    padding: 0 var(--spacing-spacing-6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }

  .hero-sub {
    height: 96px;
    align-items: center;
  }
  
  .hero-sub .hero-title {
    font-size: var(--type-heading-sm-size);
    line-height: 1.25;
    margin-top: 0;
  }
  
  .hero-sub .hero-content {
    padding: 0 var(--spacing-spacing-6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
  }
  
  .section {
    padding: 24px;
  }
  
  .summary-section {
    padding: var(--spacing-spacing-6);
  }
  
  .summary-box {
    padding: var(--spacing-spacing-6);
    gap: var(--spacing-spacing-6);
  }
  
  .summary-title {
    font-size: var(--type-font-size-2xl);
  }
  
  .summary-content {
    flex-direction: column;
    gap: var(--spacing-spacing-6);
  }
  
  .summary-image {
    height: 97px;
  }
  
  .product-model-section {
    padding: var(--spacing-spacing-6) var(--spacing-spacing-6) var(--spacing-spacing-8);
  }

  .product-model-content {
    gap: var(--spacing-spacing-6);
  }

  .section-header {
    gap: var(--spacing-spacing-3);
  }

  .section-title {
    font-size: var(--type-font-size-2xl);
  }

  .intro-text, .outro-text {
    padding: 0;
  }
  
  .model-cards {
    flex-direction: column;
    gap: var(--spacing-spacing-6);
  }
  
  .card {
    padding: var(--spacing-spacing-6) var(--spacing-spacing-5) var(--spacing-spacing-6) var(--spacing-spacing-5);
  }
  
  .card-icon {
    width: 160px;
    height: 138px;
  }

  .sectors-section {
    padding: var(--spacing-spacing-6);
  }

  .sectors-content {
    gap: var(--spacing-spacing-6);
  }

  .sectors-intro {
    padding: 0;
  }

  .sectors-block {
    gap: var(--spacing-spacing-4);
  }

  .sectors-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-spacing-2);
  }

  .accomplishments-section {
    padding: var(--spacing-spacing-6);
  }

  .accomplishments-container {
    padding: var(--spacing-spacing-4);
    gap: var(--spacing-spacing-4);
  }

  .accomplishments-header {
    gap: var(--spacing-spacing-6);
  }

  .accomplishments-title {
    font-size: var(--type-font-size-2xl);
  }

  .accomplishments-intro {
    padding: 0;
    text-align: left;
  }

  .accomplishments-grid {
    grid-template-columns: 1fr;
  }

  .accomplishment-card {
    flex-direction: column;
  }

  .accomplishment-icon {
    width: auto;
  }

  .experience-section {
    padding: var(--spacing-spacing-6) var(--spacing-spacing-6) var(--spacing-spacing-8);
  }

  .experience-content {
    gap: var(--spacing-spacing-6);
  }

  .experience-title {
    font-size: var(--type-font-size-2xl);
  }

  .experience-text {
    padding: 0;
  }

  .brands-section {
    padding: var(--spacing-spacing-10) var(--spacing-spacing-6) var(--spacing-spacing-6);
  }

  .brands-content {
    gap: var(--spacing-spacing-6);
  }

  .brands-header {
    padding-bottom: var(--spacing-spacing-4);
  }

  .brands-title {
    font-size: var(--type-font-size-2xl);
  }

  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .approach-section {
    padding: var(--spacing-spacing-6) var(--spacing-spacing-6) var(--spacing-spacing-8);
  }

  .approach-content {
    gap: var(--spacing-spacing-6);
  }

  .track-diagram-img {
    margin-top: var(--spacing-spacing-4);
  }

  .track-section {
    padding: var(--spacing-spacing-6) var(--spacing-spacing-6) var(--spacing-spacing-8);
  }

  .track-content {
    padding: 0;
    gap: var(--spacing-spacing-6);
  }

  .track-body {
    gap: var(--spacing-spacing-6);
  }

  .track-row {
    flex-direction: column;
    align-items: center;
  }

  .track-image {
    width: 189px;
    height: 166px;
  }

  .conclusion-section {
    padding: var(--spacing-spacing-6) var(--spacing-spacing-6) var(--spacing-spacing-8);
  }

  .conclusion-content {
    padding: 0;
    gap: var(--spacing-spacing-6);
  }

  .discipline-list {
    gap: var(--spacing-spacing-8);
  }
  
  .discipline-item {
    flex-direction: column;
    gap: var(--spacing-spacing-6);
    align-items: center;
    text-align: left;
  }
  
  .discipline-title {
    text-align: center;
    width: 100%;
  }

  .tag {
    width: 100%;
  }
  
  .cta-section {
    min-height: auto;
    padding: var(--spacing-spacing-10) var(--spacing-spacing-6);
    background: var(--color-brand-800);
  }

  .cta-title {
    font-size: var(--type-heading-sm-size);
    font-family: var(--type-font-family-playfair);
    font-weight: var(--type-heading-sm-weight);
  }
}

/* Netlify Badge Hide */
[id^="netlify-"],
[class^="netlify-"],
a[href*="netlify.com"] {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  pointer-events: none !important;
}
"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(INDEX_HTML)

with open("style.css", "w", encoding="utf-8") as f:
    f.write(STYLE_CSS)

print("Files restored successfully.")
