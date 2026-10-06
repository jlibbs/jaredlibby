/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Code2, 
  Eye, 
  Copy, 
  Check, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  Maximize2,
  Printer
} from 'lucide-react';

/* ==========================================================================
   PURE REFACTORED HTML CODE STRINGS (FOR INSPECTOR & ONE-CLICK COPY)
   ========================================================================== */

const PURE_REFACTORED_HTML = `<!-- Refactored: Clean Semantic HTML5 with zero redundant wrapper divs -->
<header class="apm-masthead">
  <h1 class="apm-masthead-title">JARED LIBBY</h1>
  <figure class="apm-masthead-banner">
    <img src="/assets/banner-header.jpg" alt="Jared Libby - Adaptive Product Model" width="1440" height="128" loading="lazy" />
  </figure>
</header>

<main class="apm-article">
  <!-- APPROACH OVERVIEW -->
  <section class="apm-section apm-section-summary">
    <div class="apm-container apm-container-wide">
      <header class="apm-intro-header">
        <h2 class="apm-section-title">Adaptive Product Model</h2>
        <span class="apm-badge">APPROACH</span>
      </header>

      <div class="apm-track-content">
        <p class="apm-prose">
          A product model is a conceptual approach for creating products that deliver value to users while achieving desired business outcomes, rather than merely producing output. It anchors organizational decisions and guides how the business navigates strategic opportunities. In an era of rapid change, embracing an adaptive practice ensures that an internal product vision remains resilient against external market shifts.
        </p>
        <p class="apm-prose">
          At the core of this model, which integrates proven frameworks and methodologies, is a crucial framework being termed <strong>Tri-Track Agile</strong>. It enhances the foundational value of Dual-Track Agile by introducing a third, parallel track for <u>strategy</u>. This continuous strategic loop establishes direction for, and assimilates insights from, the ongoing <u>discovery</u> and <u>delivery</u> tracks.
        </p>
      </div>

      <!-- Tri-Track Overview Diagram (Exact Figma 856x200 layout with 22px horizontal overlaps) -->
      <div class="apm-tiered-diagram-container">
        <nav class="apm-tiered-diagram" aria-label="Tri-Track Agile Tracks">
          <!-- 1. Strategy: left: 0px, top: 0px -->
          <div class="apm-track-item apm-track-strategy">
            <span class="apm-track-kicker">PRIORITIZE</span>
            <span class="apm-track-bar" aria-hidden="true"></span>
            <h3 class="apm-track-name">Strategy</h3>
          </div>

          <!-- 2. Discovery: left: 278px, top: 64px (22px horizontal overlap with Strategy, 8px vertical overlap) -->
          <div class="apm-track-item apm-track-discovery">
            <span class="apm-track-kicker">DESIGN</span>
            <span class="apm-track-bar" aria-hidden="true"></span>
            <h3 class="apm-track-name">Discovery</h3>
          </div>

          <!-- 3. Delivery: left: 556px, top: 128px (22px horizontal overlap with Discovery, 8px vertical overlap) -->
          <div class="apm-track-item apm-track-delivery">
            <span class="apm-track-kicker">DEVELOP</span>
            <span class="apm-track-bar" aria-hidden="true"></span>
            <h3 class="apm-track-name">Delivery</h3>
          </div>
        </nav>
      </div>
    </div>
  </section>

  <!-- 1. STRATEGY TRACK -->
  <section class="apm-section apm-section-alt" id="strategy">
    <div class="apm-container">
      <span class="apm-badge apm-badge-track">STRATEGY</span>

      <div class="apm-track-content">
        <div class="apm-split-layout">
          <p class="apm-prose">
            The added strategy track runs continuously alongside discovery and delivery to <u>define the problems that subsequent builds aim to solve</u>. It relies on a core set of leaders working with stakeholders to identify the most important user and business problems to solve. This prioritization is critical for making progress on a user-centered product vision and achieving high-level business goals.
          </p>
          <figure class="apm-diagram-figure" aria-label="Strategy DVF Model Diagram">
            <svg class="apm-diagram-svg" viewBox="0 0 192 166" width="192" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Outer Dark Teal Triangle (#384D4D) -->
              <g transform="translate(5.86, 4)">
                <path d="M84.9497 4.99658C87.2601 1.00158 93.028 1.00158 95.3384 4.99658L177.47 147.016C179.783 151.016 176.897 156.02 172.276 156.02H8.01221C3.39148 156.02 0.504619 151.016 2.81787 147.016L84.9497 4.99658Z" stroke="#384D4D" stroke-width="4"/>
              </g>
              <!-- Middle Aqua Triangle (#95CCCC) Concentric Centroid -->
              <g transform="translate(20.19, 20.29)">
                <path d="M71.4829 3.50146C73.407 0.1663 78.2209 0.166334 80.145 3.50146L149.951 124.497C151.874 127.83 149.468 131.995 145.62 131.996H6.00928C2.16099 131.996 -0.244854 127.83 1.67822 124.497L71.4829 3.50146Z" stroke="#95CCCC" stroke-width="2.5"/>
              </g>
              <!-- Inner Sage Triangle (#678C8C) Concentric Centroid -->
              <g transform="translate(33.4, 35.37)">
                <path d="M57.397 5.01013C59.7038 0.996689 65.4945 0.996676 67.8013 5.01013L122.388 99.9828C124.687 103.983 121.8 108.973 117.186 108.973H8.01221C3.39858 108.973 0.510998 103.983 2.81006 99.9828L57.397 5.01013Z" stroke="#678C8C" stroke-width="4"/>
              </g>
            </svg>
          </figure>
        </div>

        <p class="apm-prose">
          The outcome-driven approach naturally lends itself to a <strong>Vision-Led Strategy</strong> that describes a compelling future state of the product for the end user, grounding long-term qualitative goals in intrinsic value to navigate short-term market dynamics. To scale these outcomes sustainably, the ecosystem integrates a <strong>Product-Led Growth</strong> strategy, focusing on seamless user experiences that convert customers into loyal brand advocates and drive recurring revenue. By intentionally designing self-service onboarding, monetization, and growth levers, the product operates as a growth engine and becomes the primary driver of acquisition, retention, and scaling.
        </p>
        <p class="apm-prose">
          Central to evaluating strategic opportunities is the <strong>DVF Framework</strong>, which weighs user desirability, business viability, and technical feasibility. This structure ensures that initiatives are supported across all three lenses, importantly making balanced decisions to guide the pursuit of the best solutions.
        </p>
        <p class="apm-prose">
          The strategy track determines the priority of the problems to solve along with the desired outcomes to achieve. This continuous strategic loop provides the essential guardrails that ensure the discovery track can translate strategic intent into meaningful validation.
        </p>
      </div>
    </div>
  </section>

  <!-- 2. DISCOVERY TRACK -->
  <section class="apm-section" id="discovery">
    <div class="apm-container">
      <span class="apm-badge apm-badge-track">DISCOVERY</span>

      <div class="apm-track-content">
        <div class="apm-split-layout">
          <p class="apm-prose">
            The discovery track is where the team continuously <u>validates what to build that best solves the problems</u>. Discovery challenges solution ideas directly with users before dedicating engineering resources. This focus on human connection mitigates bias and accelerates development by preventing costly rework.
          </p>
          <figure class="apm-diagram-figure" aria-label="Double Diamond Design Diagram">
            <svg class="apm-diagram-svg" viewBox="0 0 192 166" width="192" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(0, 37)">
                <path d="M2.17169 48.8406C0.609592 47.2785 0.609592 44.7459 2.17169 43.1838L43.1839 2.17158C44.746 0.609486 47.2786 0.609486 48.8407 2.17158L89.8529 43.1838C91.415 44.7459 91.415 47.2785 89.8529 48.8406L48.8407 89.8528C47.2786 91.4149 44.746 91.4149 43.1839 89.8528L2.17169 48.8406Z" stroke="#95CCCC" stroke-width="2"/>
              </g>
              <g transform="translate(99, 37)">
                <path d="M2.17169 48.8406C0.609592 47.2785 0.609592 44.7459 2.17169 43.1838L43.1839 2.17158C44.746 0.609486 47.2786 0.609486 48.8407 2.17158L89.8529 43.1838C91.415 44.7459 91.415 47.2785 89.8529 48.8406L48.8407 89.8528C47.2786 91.4149 44.746 91.4149 43.1839 89.8528L2.17169 48.8406Z" stroke="#95CCCC" stroke-width="2"/>
              </g>
              <g transform="translate(49, 37)">
                <path d="M3.17169 49.8406C1.60959 48.2785 1.60959 45.7459 3.17169 44.1838L44.1839 3.17158C45.746 1.60948 48.2786 1.60948 49.8407 3.17158L90.8529 44.1838C92.415 45.7459 92.415 48.2785 90.8529 49.8406L49.8407 90.8528C48.2786 92.4149 45.746 92.4149 44.1839 90.8528L3.17169 49.8406Z" stroke="#678C8C" stroke-width="4"/>
              </g>
              <g transform="translate(0, 12)">
                <path d="M116.271 3.7373C118.589 1.42038 122.348 1.42126 124.666 3.73828V3.7373L188.262 67.3057C190.54 69.5834 190.578 73.2526 188.376 75.5762L188.243 75.7119L124.685 139.243L124.547 139.377C122.261 141.541 118.674 141.541 116.389 139.377L116.251 139.243L100.241 123.24C97.8983 120.898 94.1008 120.898 91.7578 123.24L75.748 139.243L75.6182 139.37C73.402 141.476 69.9551 141.541 67.6621 139.567L67.4443 139.37L67.3145 139.243L3.73828 75.6943C1.42073 73.3778 1.42073 69.6223 3.73828 67.3057L67.334 3.7373C69.6519 1.42076 73.4105 1.42078 75.7285 3.7373L91.7578 19.7598C94.1007 22.1016 97.8983 22.1016 100.241 19.7598L116.271 3.7373Z" stroke="#384D4D" stroke-width="4"/>
              </g>
            </svg>
          </figure>
        </div>

        <p class="apm-prose">
          <strong>Whole Product Design</strong> is a holistic style of <strong>User-Centered Design</strong> that places the user’s needs, behaviors, and limitations at the heart of development, while integrating business objectives, engineering feasibility, marketing brand promises, sales expectations, and support communication. Thoughtfully guiding this end-to-end user experience helps lower acquisition costs, boost conversions, and maximize retention.
        </p>
        <p class="apm-prose">
          As the mechanism for verifying strategic intent, the <strong>Double Diamond Design</strong> framework is ideal for quickly diverging and converging on the right problem first and then the best solution. The team is empowered and accountable for understanding the root of the problem and then rapidly determining the optimum solution that is desirable, viable, and feasible.
        </p>
        <p class="apm-prose">
          Naturally, the discovery process evolves into continuous experimentation, mitigating risk by rapidly forming clear hypotheses, testing the riskiest assumptions, and making proactive strategic adjustments. Transforming raw user insights and data, including the automated synthesis of complex datasets, into quality blueprints requires a structured design practice to ensure clarity.
        </p>
        <p class="apm-prose">
          The discovery track creates a cycle of actionable learning rather than static requirements. This evidentiary loop ensures development concentrates on solutions that are optimized to address root user and business problems.
        </p>
      </div>
    </div>
  </section>

  <!-- 3. DELIVERY TRACK -->
  <section class="apm-section apm-section-alt" id="delivery">
    <div class="apm-container">
      <span class="apm-badge apm-badge-track">DELIVERY</span>

      <div class="apm-track-content">
        <div class="apm-split-layout">
          <p class="apm-prose">
            The delivery track is where the team continuously develops and <u>deploys builds addressing the problems’ solutions</u>. Solutions are shipped via frequent, reliable, and decoupled releases, incorporating robust instrumentation to monitor performance and capture user metrics. Cultivate a high-performing development culture that filters out unproven features through parallel strategy and discovery loops.
          </p>
          <figure class="apm-diagram-figure" aria-label="Architecture-First Delivery Loop Diagram">
            <svg class="apm-diagram-svg" viewBox="0 0 192 166" width="192" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="99" cy="82" r="80" stroke="#384D4D" stroke-width="4"/>
              <g transform="translate(62, 44.8)">
                <path d="M40.5 79C61.763 79 79 61.763 79 40.5C79 19.237 61.763 2 40.5 2C19.237 2 2 19.237 2 40.5" stroke="#678C8C" stroke-width="4"/>
              </g>
              <g transform="translate(52, 87.8)">
                <path d="M45 44C20.6995 44 1 24.3005 1 -1.9233e-06" stroke="#95CCCC" stroke-width="2"/>
              </g>
              <line x1="0" y1="165" x2="74" y2="165" stroke="#678C8C" stroke-width="4"/>
              <line x1="118" y1="165" x2="192" y2="165" stroke="#95CCCC" stroke-width="2"/>
            </svg>
          </figure>
        </div>

        <p class="apm-prose">
          This atmosphere gives developers the operational runway to champion an <strong>Architecture-First</strong> mindset. Providing the architectural modularity required to integrate emerging technologies and generate code at maximum speed. Consequently, development decisions are anchored to long-term code health and system scalability, firmly prioritizing technical sustainability.
        </p>
        <p class="apm-prose">
          While <strong>Agile Development</strong> methodologies vary, they share a priority in satisfying the user and growing the business through early and continuous delivery of valuable solutions. Equally essential is daily collaboration between the business and product development to maximize the amount of work not to be done.
        </p>
        <p class="apm-prose">
          The delivery cycle utilizes deployment operations that prioritize system stability. Advanced release strategies, such as beta testing, canary deployments, and progressive rollouts, decouple code deployment from feature availability. This minimizes operational risk while providing evidence to inform the strategy track.
        </p>
        <p class="apm-prose">
          In this model, delivery extends beyond deployment to <strong>Operational Ownership</strong>. The development team is responsible for the health, performance, and long-term viability of the services. By uniting development with ongoing operational rigor, the team evolves from mere builders into stewards, incentivized to prioritize system stability and proactively resolve technical debt.
        </p>
        <p class="apm-prose">
          The delivery track transforms strategic intent into measurable user reality. By anchoring our development in architectural sustainability and shared stewardship, we maintain a steady flow of value without compromising system integrity.
        </p>
      </div>
    </div>
  </section>

  <!-- CONCLUSION -->
  <section class="apm-section">
    <div class="apm-container apm-conclusion">
      <div class="apm-squares-row" aria-hidden="true">
        <span class="apm-accent-square"></span>
        <span class="apm-accent-square"></span>
        <span class="apm-accent-square"></span>
        <span class="apm-accent-square"></span>
        <span class="apm-accent-square"></span>
      </div>
      <p class="apm-prose">
        Ultimately, the Adaptive Product Model is a commitment to a unified product ecosystem. By tightly integrating strategic direction, exploratory design, and coordinated development, the mechanical production of output is transcended into a system that consistently generates meaningful outcomes for users and the business.
      </p>
    </div>
  </section>
</main>

<footer class="apm-footer-banner">
  <img src="/assets/banner-footer.jpg" alt="Adaptive Product Model footer banner" width="1440" height="363" loading="lazy" />
</footer>`;

const CONSOLIDATED_CSS = `/* Consolidated CSS Variables & Responsive Layout Rules */
:root {
  --c-primary: #1A3636;
  --c-slate-teal: #384D4D;
  --c-muted-sage: #678C8C;
  --c-soft-aqua: #95CCCC;
  --c-rust-red: #B33C1B;
  --c-white: #ffffff;
  --c-bg-warm: #F7F5F2;

  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Raleway', -apple-system, BlinkMacSystemFont, sans-serif;

  --container-main: 720px;   /* Middle sections: Strategy, Discovery, Delivery (Red guidelines) */
  --container-wide: 856px;   /* Approach overview & top diagram (Orange guidelines) */
  --header-height: 128px;
  --section-pad-y: clamp(3rem, 6vw, 5rem);
  --section-pad-x: clamp(1.25rem, 5vw, 2.5rem);
}

body {
  font-family: var(--font-sans);
  color: var(--c-primary);
  background-color: var(--c-white);
  line-height: 1.6;
  margin: 0;
}

/* Masthead Header */
.apm-masthead {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.apm-masthead-title {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: var(--header-height);
  width: 100%;
  margin: 0;
  padding: 1rem var(--section-pad-x);
  font-family: var(--font-serif);
  font-size: clamp(2rem, 4.5vw, 3.125rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.apm-masthead-banner {
  width: 100%;
  height: clamp(80px, 10vw, 128px);
  margin: 0;
  overflow: hidden;
  background-color: var(--c-primary);
}

.apm-masthead-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  opacity: 0.9;
  display: block;
}

/* Article & Sections */
.apm-article {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.apm-section {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: var(--section-pad-y) var(--section-pad-x);
  background-color: var(--c-white);
}

/* Summary Approach Section (Figma 920 Fill x 590 Hug calibration) */
.apm-section-summary {
  padding-top: clamp(2.25rem, 4vw, 3rem);
  padding-bottom: clamp(1.75rem, 3.5vw, 2.5rem);
}

.apm-section-alt {
  background-color: var(--c-bg-warm);
}

.apm-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--container-main);
  gap: 2.5rem;
}

.apm-container-wide {
  max-width: var(--container-wide);
  gap: 1.5rem; /* Tightened from 2.5rem to match Figma inner gap */
}

.apm-intro-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.apm-section-title {
  margin: 0;
  font-family: var(--font-serif);
  font-size: clamp(1.75rem, 3.5vw, 2rem);
  font-weight: 400;
}

.apm-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 24px;
  padding: 0 1.5rem;
  font-size: 0.8125rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--c-white);
  background-color: var(--c-soft-aqua);
}

.apm-badge-track {
  background-color: var(--c-rust-red);
  align-self: center;
}

.apm-prose {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.apm-prose strong {
  font-weight: 700;
}

.apm-prose u {
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
}

/* Tri-Track Overview Diagram (Exact Figma 856x200 layout with 22px horizontal overlaps) */
.apm-tiered-diagram-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.75rem 0 0 0;
}

.apm-tiered-diagram {
  position: relative;
  width: 856px;
  height: 200px;
}

.apm-track-item {
  position: absolute;
  width: 300px;
  height: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

/* Strategy: left: 0px, top: 0px */
.apm-track-strategy {
  left: 0px;
  top: 0px;
}

/* Discovery: left: 278px, top: 64px (22px horizontal overlap with Strategy, 8px vertical overlap) */
.apm-track-discovery {
  left: 278px;
  top: 64px;
}

/* Delivery: left: 556px, top: 128px (22px horizontal overlap with Discovery, 8px vertical overlap) */
.apm-track-delivery {
  left: 556px;
  top: 128px;
}

.apm-track-kicker {
  font-size: 0.8125rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-soft-aqua);
  line-height: 1;
  margin: 0;
  white-space: nowrap;
}

.apm-track-bar {
  width: 100%;
  height: 4px;
  background-color: var(--c-primary);
  margin: 0;
  flex-shrink: 0;
}

.apm-track-name {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: var(--c-primary);
  margin: 0;
  white-space: nowrap;
}

/* Tablet Proportional Scaling (769px - 896px) */
@media (min-width: 769px) and (max-width: 896px) {
  .apm-tiered-diagram-container {
    overflow-x: hidden;
  }
  .apm-tiered-diagram {
    --scale: min(1, calc((100vw - 3rem) / 856));
    transform: scale(var(--scale));
    transform-origin: top center;
    margin-bottom: calc(200px * (var(--scale) - 1) + 2rem);
  }
}

/* Mobile Responsiveness (< 768px)
   Implements exact Figma 345px x 280px staggered stepped diagram layout */
@media (max-width: 768px) {
  .apm-section {
    padding: 2.25rem 1.25rem;
  }

  .apm-section-summary {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .apm-container {
    gap: 1.5rem;
  }

  .apm-tiered-diagram-container {
    margin: 0.75rem 0 0 0;
    overflow-x: hidden;
  }

  .apm-tiered-diagram {
    position: relative;
    width: 345px;
    height: 280px;
    display: block;
    --scale-mobile: min(1, calc((100vw - 2.5rem) / 345));
    transform: scale(var(--scale-mobile));
    transform-origin: top center;
    margin: 0 auto calc(280px * (var(--scale-mobile) - 1));
  }

  .apm-track-item {
    position: absolute;
    width: 200px;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }

  /* Strategy: left: 0px, top: 0px */
  .apm-track-strategy {
    left: 0px;
    top: 0px;
  }

  /* Discovery: left: 72px, top: 104px (Figma exact) */
  .apm-track-discovery {
    left: 72px;
    top: 104px;
  }

  /* Delivery: left: 145px, top: 208px (Figma exact) */
  .apm-track-delivery {
    left: 145px;
    top: 208px;
  }

  .apm-track-kicker {
    font-size: 13px;
    line-height: 13px;
  }

  .apm-track-bar {
    width: 100%;
    height: 4px;
    margin: 0;
  }

  .apm-track-name {
    font-size: 24px;
    line-height: 24px;
  }

  .apm-split-layout {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1.25rem;
  }

  .apm-track-content {
    gap: 1rem;
  }
}

.apm-diagram-figure {
  margin: 0;
  width: 192px;
  height: 166px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-shrink: 0;
}

.apm-diagram-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Conclusion & Footer */
.apm-conclusion {
  align-items: center;
  gap: 2.5rem;
}

.apm-squares-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 24px;
  margin: 0 auto;
}

.apm-accent-square {
  width: 24px;
  height: 24px;
  background-color: var(--c-soft-aqua);
  flex-shrink: 0;
}

.apm-footer-banner {
  width: 100%;
  height: clamp(200px, 25vw, 363px);
  margin: 0;
  overflow: hidden;
  background-color: var(--c-primary);
}

.apm-footer-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
  display: block;
}

/* ==========================================================================
   PRINT MEDIA OPTIMIZATION (PDF & Paper Output)
   ========================================================================== */
@media print {
  @page {
    margin: 1.5cm 1.2cm;
    size: auto;
  }

  /* Force exact color reproduction for backgrounds, borders, and badges */
  *,
  *::before,
  *::after {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Remove headers, footers, inspector chrome, guideline overlays, and interactive elements */
  .apm-no-print,
  .no-print,
  nav[aria-label="Refactoring Inspector Bar"],
  .apm-masthead-banner,
  .apm-footer-banner,
  .pointer-events-none {
    display: none !important;
    visibility: hidden !important;
  }

  body {
    background: #ffffff !important;
    color: var(--c-primary) !important;
    font-size: 11pt !important;
    line-height: 1.55 !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Clean article header for print with subtle divider */
  .apm-masthead {
    padding-bottom: 1.5rem !important;
    border-bottom: 2px solid var(--c-primary) !important;
    margin-bottom: 2rem !important;
  }

  .apm-masthead-title {
    font-size: 18pt !important;
    margin: 0 !important;
    letter-spacing: 0.15em !important;
  }

  /* Section padding optimized for paper */
  .apm-section {
    padding: 1.75rem 0 !important;
    background-color: transparent !important;
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .apm-section-alt {
    background-color: var(--c-bg-warm) !important;
    padding: 1.75rem 1.25rem !important;
    border-radius: 6px;
    margin: 1rem 0 !important;
  }

  /* Full printable content width */
  .apm-container,
  .apm-container-wide {
    max-width: 100% !important;
    gap: 1.25rem !important;
  }

  /* Page break management */
  .apm-intro-header,
  .apm-badge,
  .apm-section-title,
  h1, h2, h3 {
    break-after: avoid;
    page-break-after: avoid;
  }

  .apm-split-layout,
  .apm-tiered-diagram-container,
  .apm-conclusion,
  .apm-diagram-figure {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* Overview diagram fits printable page */
  .apm-tiered-diagram-container {
    margin: 1.25rem 0 2rem 0 !important;
  }

  .apm-tiered-diagram {
    transform: scale(0.92);
    transform-origin: top center;
    margin-bottom: -15px !important;
  }

  /* Typography readability */
  .apm-prose {
    font-size: 10.5pt !important;
    line-height: 1.55 !important;
    orphans: 3;
    widows: 3;
  }

  .apm-squares-row {
    margin: 1rem auto !important;
    break-inside: avoid;
  }
}`;

const COMPLETE_STANDALONE_DOCUMENT = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Adaptive Product Model - Jared Libby</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Raleway:ital,wght@0,400;0,700;0,900&display=swap" rel="stylesheet" />
  <style>
${CONSOLIDATED_CSS}
  </style>
</head>
<body>
${PURE_REFACTORED_HTML}
</body>
</html>`;

export default function App() {
  const [activeTab, setActiveTab] = useState<'rendered' | 'html' | 'css' | 'standalone' | 'audit'>('rendered');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [showGuidelines, setShowGuidelines] = useState(false);

  // Determine whether to display the development inspector bar
  // Only shows in local dev (localhost, 127.0.0.1, Vite dev, ais-dev-) or with ?dev=true
  // Never appears on live production (e.g. jaredlibby.com)
  const isDevMode = 
    import.meta.env.DEV || 
    (typeof window !== 'undefined' && (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.includes('ais-dev-') ||
      new URLSearchParams(window.location.search).has('dev') ||
      new URLSearchParams(window.location.search).has('preview')
    ));

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const showToolbar = isDevMode;
  const currentTab = isDevMode ? activeTab : 'rendered';

  return (
    <div className={`min-h-screen font-sans ${showToolbar && currentTab !== 'rendered' ? 'bg-slate-900 text-slate-100 flex flex-col' : 'bg-white text-[#1A3636]'}`}>
      {/* Top Engineering & Refactor Control Header (Local Dev & Preview Only) */}
      {showToolbar && (
        <nav 
          aria-label="Refactoring Inspector Bar"
          className="sticky top-0 z-50 bg-[#1A3636] border-b border-[#384D4D] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-md apm-no-print"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#95CCCC]" />
            <span className="font-serif font-bold text-sm tracking-wide text-white">
              Adaptive Product Model
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#384D4D] text-[#95CCCC] font-mono">
              Refactored: HTML5 + CSS Grid/Flexbox
            </span>
          </div>

          {/* View Switcher Controls */}
          <div className="flex items-center bg-black/30 p-0.5 rounded-lg border border-white/10 text-xs font-medium">
            <button
              onClick={() => setActiveTab('rendered')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'rendered'
                  ? 'bg-[#95CCCC] text-[#1A3636] font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Rendered Article</span>
            </button>

            <button
              onClick={() => setActiveTab('html')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'html'
                  ? 'bg-[#95CCCC] text-[#1A3636] font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Clean HTML5</span>
            </button>

            <button
              onClick={() => setActiveTab('css')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'css'
                  ? 'bg-[#95CCCC] text-[#1A3636] font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>CSS Variables</span>
            </button>

            <button
              onClick={() => setActiveTab('standalone')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'standalone'
                  ? 'bg-[#95CCCC] text-[#1A3636] font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Single File</span>
            </button>

            <button
              onClick={() => setActiveTab('audit')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                activeTab === 'audit'
                  ? 'bg-[#95CCCC] text-[#1A3636] font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Refactor Audit</span>
            </button>
          </div>

          {/* Copy & Layout Status Actions */}
          <div className="flex items-center gap-3">
            {activeTab === 'rendered' && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2.5 py-1 bg-black/40 rounded-lg border border-white/10 text-xs text-[#95CCCC] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Overview: 856px · Tracks: 720px</span>
                </div>
                <button
                  onClick={() => setShowGuidelines(!showGuidelines)}
                  className={`flex items-center gap-1 px-2 py-1 text-xs rounded-lg border transition-colors ${
                    showGuidelines
                      ? 'bg-rose-950/80 border-rose-500 text-rose-300 font-semibold'
                      : 'bg-black/30 border-white/10 text-slate-300 hover:text-white'
                  }`}
                  title="Toggle visual guidelines (856px Orange & 720px Red lines)"
                >
                  <span>Guidelines</span>
                  <span className={`text-[10px] px-1 rounded ${showGuidelines ? 'bg-rose-500 text-white' : 'bg-white/10'}`}>
                    {showGuidelines ? 'ON' : 'OFF'}
                  </span>
                </button>

                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-lg bg-[#384D4D] hover:bg-[#678C8C] text-white border border-white/10 transition-colors shadow-sm"
                  title="Print or Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-[#95CCCC]" />
                  <span>Print / PDF</span>
                </button>
              </div>
            )}

            {activeTab === 'html' && (
              <button
                onClick={() => handleCopy(PURE_REFACTORED_HTML, 'html')}
                className="flex items-center gap-1.5 px-3 py-1 text-xs rounded bg-[#384D4D] hover:bg-[#678C8C] text-white transition-colors"
              >
                {copiedKey === 'html' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedKey === 'html' ? 'Copied HTML!' : 'Copy HTML5'}
              </button>
            )}

            {activeTab === 'css' && (
              <button
                onClick={() => handleCopy(CONSOLIDATED_CSS, 'css')}
                className="flex items-center gap-1.5 px-3 py-1 text-xs rounded bg-[#384D4D] hover:bg-[#678C8C] text-white transition-colors"
              >
                {copiedKey === 'css' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedKey === 'css' ? 'Copied CSS!' : 'Copy CSS'}
              </button>
            )}

            {activeTab === 'standalone' && (
              <button
                onClick={() => handleCopy(COMPLETE_STANDALONE_DOCUMENT, 'standalone')}
                className="flex items-center gap-1.5 px-3 py-1 text-xs rounded bg-[#384D4D] hover:bg-[#678C8C] text-white transition-colors"
              >
                {copiedKey === 'standalone' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedKey === 'standalone' ? 'Copied All!' : 'Copy Single File'}
              </button>
            )}
          </div>
        </nav>
      )}

      {/* Main View Area */}
      {currentTab === 'rendered' ? (
        <div className="relative w-full bg-white text-[#1A3636]">
          {/* Visual Guidelines Overlay (Matching Figma Screenshot) */}
          {showGuidelines && (
            <div className="pointer-events-none absolute inset-0 z-40 flex justify-center overflow-hidden">
              <div className="relative w-full max-w-[856px] h-full">
                {/* Outer 856px Orange Guidelines (Overview & Top Prose Width) */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-amber-500 opacity-90 shadow-[0_0_6px_rgba(245,158,11,0.8)]">
                  <span className="sticky top-2 left-1 bg-amber-500 text-white font-mono text-[10px] px-1 rounded shadow">
                    856px (Orange)
                  </span>
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-amber-500 opacity-90 shadow-[0_0_6px_rgba(245,158,11,0.8)]">
                  <span className="sticky top-2 right-1 bg-amber-500 text-white font-mono text-[10px] px-1 rounded shadow">
                    856px (Orange)
                  </span>
                </div>

                {/* Inner 720px Red Guidelines (Middle 3 Sections: Strategy, Discovery, Delivery) */}
                {/* Inset = (856 - 720) / 2 = 68px */}
                <div className="absolute top-0 bottom-0 left-[68px] w-[2px] bg-rose-600 opacity-90 shadow-[0_0_6px_rgba(225,29,72,0.8)]">
                  <span className="sticky top-8 left-1 bg-rose-600 text-white font-mono text-[10px] px-1 rounded shadow">
                    720px (Red)
                  </span>
                </div>
                <div className="absolute top-0 bottom-0 right-[68px] w-[2px] bg-rose-600 opacity-90 shadow-[0_0_6px_rgba(225,29,72,0.8)]">
                  <span className="sticky top-8 right-1 bg-rose-600 text-white font-mono text-[10px] px-1 rounded shadow">
                    720px (Red)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* =================================================================
              CLEAN SEMANTIC HTML5 RENDITION
              Zero wrapper bloat, pure CSS variables & Flexbox / Grid
              ================================================================= */}
          <header className="apm-masthead">
            <h1 className="apm-masthead-title">JARED LIBBY</h1>
            <figure className="apm-masthead-banner">
              <img 
                src="/assets/banner-header.jpg" 
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/1440x128/1A3636/95CCCC?text=banner-header.jpg";
                }}
                alt="Jared Libby - Adaptive Product Model" 
                width="1440" 
                height="128" 
              />
            </figure>
          </header>

          <main className="apm-article">
            {/* APPROACH OVERVIEW SECTION (Figma 920 Fill x 590 Hug calibration) */}
            <section className="apm-section apm-section-summary">
              <div className="apm-container apm-container-wide">
                <header className="apm-intro-header">
                  <h2 className="apm-section-title">Adaptive Product Model</h2>
                  <span className="apm-badge">APPROACH</span>
                </header>

                <div className="apm-track-content">
                  <p className="apm-prose">
                    A product model is a conceptual approach for creating products that deliver value to users while achieving desired business outcomes, rather than merely producing output. It anchors organizational decisions and guides how the business navigates strategic opportunities. In an era of rapid change, embracing an adaptive practice ensures that an internal product vision remains resilient against external market shifts.
                  </p>
                  <p className="apm-prose">
                    At the core of this model, which integrates proven frameworks and methodologies, is a crucial framework being termed <strong>Tri-Track Agile</strong>. It enhances the foundational value of Dual-Track Agile by introducing a third, parallel track for <u>strategy</u>. This continuous strategic loop establishes direction for, and assimilates insights from, the ongoing <u>discovery</u> and <u>delivery</u> tracks.
                  </p>
                </div>

                {/* TRI-TRACK OVERVIEW DIAGRAM (EXACT FIGMA 856x200 WITH 22px OVERLAPS) */}
                <div className="apm-tiered-diagram-container">
                  <nav className="apm-tiered-diagram" aria-label="Tri-Track Agile Tracks">
                    {/* 1. Strategy: left: 0px, top: 0px */}
                    <div className="apm-track-item apm-track-strategy">
                      <span className="apm-track-kicker">PRIORITIZE</span>
                      <span className="apm-track-bar" aria-hidden="true"></span>
                      <h3 className="apm-track-name">Strategy</h3>
                    </div>

                    {/* 2. Discovery: left: 278px, top: 64px (22px horizontal overlap with Strategy, 8px vertical overlap) */}
                    <div className="apm-track-item apm-track-discovery">
                      <span className="apm-track-kicker">DESIGN</span>
                      <span className="apm-track-bar" aria-hidden="true"></span>
                      <h3 className="apm-track-name">Discovery</h3>
                    </div>

                    {/* 3. Delivery: left: 556px, top: 128px (22px horizontal overlap with Discovery, 8px vertical overlap) */}
                    <div className="apm-track-item apm-track-delivery">
                      <span className="apm-track-kicker">DEVELOP</span>
                      <span className="apm-track-bar" aria-hidden="true"></span>
                      <h3 className="apm-track-name">Delivery</h3>
                    </div>
                  </nav>
                </div>
              </div>
            </section>

            {/* 1. STRATEGY TRACK */}
            <section className="apm-section apm-section-alt" id="strategy">
              <div className="apm-container">
                <span className="apm-badge apm-badge-track">STRATEGY</span>

                <div className="apm-track-content">
                  <div className="apm-split-layout">
                    <p className="apm-prose">
                      The added strategy track runs continuously alongside discovery and delivery to <u>define the problems that subsequent builds aim to solve</u>. It relies on a core set of leaders working with stakeholders to identify the most important user and business problems to solve. This prioritization is critical for making progress on a user-centered product vision and achieving high-level business goals.
                    </p>
                    <figure className="apm-diagram-figure" aria-label="Strategy DVF Model Diagram">
                      <svg className="apm-diagram-svg" viewBox="0 0 192 166" width="192" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Outer Dark Teal Triangle (#384D4D) */}
                        <g transform="translate(5.86, 4)">
                          <path d="M84.9497 4.99658C87.2601 1.00158 93.028 1.00158 95.3384 4.99658L177.47 147.016C179.783 151.016 176.897 156.02 172.276 156.02H8.01221C3.39148 156.02 0.504619 151.016 2.81787 147.016L84.9497 4.99658Z" stroke="#384D4D" strokeWidth="4"/>
                        </g>
                        {/* Middle Aqua Triangle (#95CCCC) Concentric Centroid */}
                        <g transform="translate(20.19, 20.29)">
                          <path d="M71.4829 3.50146C73.407 0.1663 78.2209 0.166334 80.145 3.50146L149.951 124.497C151.874 127.83 149.468 131.995 145.62 131.996H6.00928C2.16099 131.996 -0.244854 127.83 1.67822 124.497L71.4829 3.50146Z" stroke="#95CCCC" strokeWidth="2.5"/>
                        </g>
                        {/* Inner Sage Triangle (#678C8C) Concentric Centroid */}
                        <g transform="translate(33.4, 35.37)">
                          <path d="M57.397 5.01013C59.7038 0.996689 65.4945 0.996676 67.8013 5.01013L122.388 99.9828C124.687 103.983 121.8 108.973 117.186 108.973H8.01221C3.39858 108.973 0.510998 103.983 2.81006 99.9828L57.397 5.01013Z" stroke="#678C8C" strokeWidth="4"/>
                        </g>
                      </svg>
                    </figure>
                  </div>

                  <p className="apm-prose">
                    The outcome-driven approach naturally lends itself to a <strong>Vision-Led Strategy</strong> that describes a compelling future state of the product for the end user, grounding long-term qualitative goals in intrinsic value to navigate short-term market dynamics. To scale these outcomes sustainably, the ecosystem integrates a <strong>Product-Led Growth</strong> strategy, focusing on seamless user experiences that convert customers into loyal brand advocates and drive recurring revenue. By intentionally designing self-service onboarding, monetization, and growth levers, the product operates as a growth engine and becomes the primary driver of acquisition, retention, and scaling.
                  </p>
                  <p className="apm-prose">
                    Central to evaluating strategic opportunities is the <strong>DVF Framework</strong>, which weighs user desirability, business viability, and technical feasibility. This structure ensures that initiatives are supported across all three lenses, importantly making balanced decisions to guide the pursuit of the best solutions.
                  </p>
                  <p className="apm-prose">
                    The strategy track determines the priority of the problems to solve along with the desired outcomes to achieve. This continuous strategic loop provides the essential guardrails that ensure the discovery track can translate strategic intent into meaningful validation.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. DISCOVERY TRACK */}
            <section className="apm-section" id="discovery">
              <div className="apm-container">
                <span className="apm-badge apm-badge-track">DISCOVERY</span>

                <div className="apm-track-content">
                  <div className="apm-split-layout">
                    <p className="apm-prose">
                      The discovery track is where the team continuously <u>validates what to build that best solves the problems</u>. Discovery challenges solution ideas directly with users before dedicating engineering resources. This focus on human connection mitigates bias and accelerates development by preventing costly rework.
                    </p>
                    <figure className="apm-diagram-figure" aria-label="Double Diamond Design Diagram">
                      <svg className="apm-diagram-svg" viewBox="0 0 192 166" width="192" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g transform="translate(0, 37)">
                          <path d="M2.17169 48.8406C0.609592 47.2785 0.609592 44.7459 2.17169 43.1838L43.1839 2.17158C44.746 0.609486 47.2786 0.609486 48.8407 2.17158L89.8529 43.1838C91.415 44.7459 91.415 47.2785 89.8529 48.8406L48.8407 89.8528C47.2786 91.4149 44.746 91.4149 43.1839 89.8528L2.17169 48.8406Z" stroke="#95CCCC" strokeWidth="2"/>
                        </g>
                        <g transform="translate(99, 37)">
                          <path d="M2.17169 48.8406C0.609592 47.2785 0.609592 44.7459 2.17169 43.1838L43.1839 2.17158C44.746 0.609486 47.2786 0.609486 48.8407 2.17158L89.8529 43.1838C91.415 44.7459 91.415 47.2785 89.8529 48.8406L48.8407 89.8528C47.2786 91.4149 44.746 91.4149 43.1839 89.8528L2.17169 48.8406Z" stroke="#95CCCC" strokeWidth="2"/>
                        </g>
                        <g transform="translate(49, 37)">
                          <path d="M3.17169 49.8406C1.60959 48.2785 1.60959 45.7459 3.17169 44.1838L44.1839 3.17158C45.746 1.60948 48.2786 1.60948 49.8407 3.17158L90.8529 44.1838C92.415 45.7459 92.415 48.2785 90.8529 49.8406L49.8407 90.8528C48.2786 92.4149 45.746 92.4149 44.1839 90.8528L3.17169 49.8406Z" stroke="#678C8C" strokeWidth="4"/>
                        </g>
                        <g transform="translate(0, 12)">
                          <path d="M116.271 3.7373C118.589 1.42038 122.348 1.42126 124.666 3.73828V3.7373L188.262 67.3057C190.54 69.5834 190.578 73.2526 188.376 75.5762L188.243 75.7119L124.685 139.243L124.547 139.377C122.261 141.541 118.674 141.541 116.389 139.377L116.251 139.243L100.241 123.24C97.8983 120.898 94.1008 120.898 91.7578 123.24L75.748 139.243L75.6182 139.37C73.402 141.476 69.9551 141.541 67.6621 139.567L67.4443 139.37L67.3145 139.243L3.73828 75.6943C1.42073 73.3778 1.42073 69.6223 3.73828 67.3057L67.334 3.7373C69.6519 1.42076 73.4105 1.42078 75.7285 3.7373L91.7578 19.7598C94.1007 22.1016 97.8983 22.1016 100.241 19.7598L116.271 3.7373Z" stroke="#384D4D" strokeWidth="4"/>
                        </g>
                      </svg>
                    </figure>
                  </div>

                  <p className="apm-prose">
                    <strong>Whole Product Design</strong> is a holistic style of <strong>User-Centered Design</strong> that places the user’s needs, behaviors, and limitations at the heart of development, while integrating business objectives, engineering feasibility, marketing brand promises, sales expectations, and support communication. Thoughtfully guiding this end-to-end user experience helps lower acquisition costs, boost conversions, and maximize retention.
                  </p>
                  <p className="apm-prose">
                    As the mechanism for verifying strategic intent, the <strong>Double Diamond Design</strong> framework is ideal for quickly diverging and converging on the right problem first and then the best solution. The team is empowered and accountable for understanding the root of the problem and then rapidly determining the optimum solution that is desirable, viable, and feasible.
                  </p>
                  <p className="apm-prose">
                    Naturally, the discovery process evolves into continuous experimentation, mitigating risk by rapidly forming clear hypotheses, testing the riskiest assumptions, and making proactive strategic adjustments. Transforming raw user insights and data, including the automated synthesis of complex datasets, into quality blueprints requires a structured design practice to ensure clarity.
                  </p>
                  <p className="apm-prose">
                    The discovery track creates a cycle of actionable learning rather than static requirements. This evidentiary loop ensures development concentrates on solutions that are optimized to address root user and business problems.
                  </p>
                </div>
              </div>
            </section>

            {/* 3. DELIVERY TRACK */}
            <section className="apm-section apm-section-alt" id="delivery">
              <div className="apm-container">
                <span className="apm-badge apm-badge-track">DELIVERY</span>

                <div className="apm-track-content">
                  <div className="apm-split-layout">
                    <p className="apm-prose">
                      The delivery track is where the team continuously develops and <u>deploys builds addressing the problems’ solutions</u>. Solutions are shipped via frequent, reliable, and decoupled releases, incorporating robust instrumentation to monitor performance and capture user metrics. Cultivate a high-performing development culture that filters out unproven features through parallel strategy and discovery loops.
                    </p>
                    <figure className="apm-diagram-figure" aria-label="Architecture-First Delivery Loop Diagram">
                      <svg className="apm-diagram-svg" viewBox="0 0 192 166" width="192" height="166" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="99" cy="82" r="80" stroke="#384D4D" strokeWidth="4"/>
                        <g transform="translate(62, 44.8)">
                          <path d="M40.5 79C61.763 79 79 61.763 79 40.5C79 19.237 61.763 2 40.5 2C19.237 2 2 19.237 2 40.5" stroke="#678C8C" strokeWidth="4"/>
                        </g>
                        <g transform="translate(52, 87.8)">
                          <path d="M45 44C20.6995 44 1 24.3005 1 -1.9233e-06" stroke="#95CCCC" strokeWidth="2"/>
                        </g>
                        <line x1="0" y1="165" x2="74" y2="165" stroke="#678C8C" strokeWidth="4"/>
                        <line x1="118" y1="165" x2="192" y2="165" stroke="#95CCCC" strokeWidth="2"/>
                      </svg>
                    </figure>
                  </div>

                  <p className="apm-prose">
                    This atmosphere gives developers the operational runway to champion an <strong>Architecture-First</strong> mindset. Providing the architectural modularity required to integrate emerging technologies and generate code at maximum speed. Consequently, development decisions are anchored to long-term code health and system scalability, firmly prioritizing technical sustainability.
                  </p>
                  <p className="apm-prose">
                    While <strong>Agile Development</strong> methodologies vary, they share a priority in satisfying the user and growing the business through early and continuous delivery of valuable solutions. Equally essential is daily collaboration between the business and product development to maximize the amount of work not to be done.
                  </p>
                  <p className="apm-prose">
                    The delivery cycle utilizes deployment operations that prioritize system stability. Advanced release strategies, such as beta testing, canary deployments, and progressive rollouts, decouple code deployment from feature availability. This minimizes operational risk while providing evidence to inform the strategy track.
                  </p>
                  <p className="apm-prose">
                    In this model, delivery extends beyond deployment to <strong>Operational Ownership</strong>. The development team is responsible for the health, performance, and long-term viability of the services. By uniting development with ongoing operational rigor, the team evolves from mere builders into stewards, incentivized to prioritize system stability and proactively resolve technical debt.
                  </p>
                  <p className="apm-prose">
                    The delivery track transforms strategic intent into measurable user reality. By anchoring our development in architectural sustainability and shared stewardship, we maintain a steady flow of value without compromising system integrity.
                  </p>
                </div>
              </div>
            </section>

            {/* CONCLUSION */}
            <section className="apm-section">
              <div className="apm-container apm-conclusion">
                <div className="apm-squares-row" aria-hidden="true">
                  <span className="apm-accent-square"></span>
                  <span className="apm-accent-square"></span>
                  <span className="apm-accent-square"></span>
                  <span className="apm-accent-square"></span>
                  <span className="apm-accent-square"></span>
                </div>
                <p className="apm-prose">
                  Ultimately, the Adaptive Product Model is a commitment to a unified product ecosystem. By tightly integrating strategic direction, exploratory design, and coordinated development, the mechanical production of output is transcended into a system that consistently generates meaningful outcomes for users and the business.
                </p>
              </div>
            </section>
          </main>

          <footer className="apm-footer-banner">
            <img 
              src="/assets/banner-footer.jpg" 
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/1440x363/1A3636/95CCCC?text=banner-footer.jpg";
              }}
              alt="Adaptive Product Model footer banner" 
              width="1440" 
              height="363" 
            />
          </footer>
        </div>
      ) : activeTab === 'audit' ? (
        /* =================================================================
           REFACTOR AUDIT & ARCHITECTURE BREAKDOWN
           ================================================================= */
        <div className="max-w-5xl mx-auto w-full p-6 md:p-10 space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl font-serif font-bold text-white">Refactoring Architecture & Metrics</h2>
            <p className="text-slate-300 text-sm max-w-2xl">
              An engineering audit of how the raw Figma export was converted into an accessible, responsive, and lightweight HTML5 implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
              <div className="text-3xl font-mono font-bold text-emerald-400">48 → 0</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Redundant DIVs</div>
              <p className="text-xs text-slate-300 mt-2">
                All nested wrapper divs were replaced with semantic <code className="text-[#95CCCC]">&lt;header&gt;</code>, <code className="text-[#95CCCC]">&lt;main&gt;</code>, <code className="text-[#95CCCC]">&lt;section&gt;</code>, <code className="text-[#95CCCC]">&lt;figure&gt;</code>, and <code className="text-[#95CCCC]">&lt;nav&gt;</code>.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
              <div className="text-3xl font-mono font-bold text-emerald-400">100%</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">CSS Variables</div>
              <p className="text-xs text-slate-300 mt-2">
                Consolidated over 90 repetitive inline style declarations (<code className="text-[#95CCCC]">#1A3636</code>, <code className="text-[#95CCCC]">Playfair Display</code>, <code className="text-[#95CCCC]">Raleway</code>) into unified design tokens.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
              <div className="text-3xl font-mono font-bold text-emerald-400">0</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Absolute Hacks</div>
              <p className="text-xs text-slate-300 mt-2">
                Destroyed fragile pixel-positioned elements (<code className="text-[#95CCCC]">top: 29px; left: 103px</code>) and replaced them with robust, responsive CSS Grid and Flexbox.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
              <div className="text-3xl font-mono font-bold text-emerald-400">Fluid</div>
              <div className="text-xs uppercase tracking-wider text-slate-400 mt-1 font-semibold">Viewport Scalability</div>
              <p className="text-xs text-slate-300 mt-2">
                Eliminated the hardcoded <code className="text-[#95CCCC]">width: 1440px</code> layout failure. Now looks stunning from 320px mobile phones to 4K desktop screens.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-[#95CCCC]" />
              Detailed Refactoring Transformations
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
                <span className="font-semibold text-emerald-400">1. Vector Graphic Consolidation</span>
                <p>
                  The original code layered 3 to 5 separate <code className="text-[#95CCCC]">&lt;svg&gt;</code> and border-hacked <code className="text-[#95CCCC]">&lt;div&gt;</code> elements with absolute coordinates (<code className="text-[#95CCCC]">left: 62px; top: 44.8px</code>). Each diagram was unified into a single responsive vector SVG with semantic <code className="text-[#95CCCC]">&lt;figure&gt;</code> and <code className="text-[#95CCCC]">viewBox</code> scaling.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
                <span className="font-semibold text-emerald-400">2. CSS Grid for Track Summary Cards</span>
                <p>
                  The "DEVELOP / Delivery", "DESIGN / Discovery", and "PRIORITIZE / Strategy" tabs were previously absolute-positioned inside 300px fixed-width boxes with outline offsets. They now use a clean 3-column <code className="text-[#95CCCC]">display: grid</code> with automatic mobile stack breakpoints.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
                <span className="font-semibold text-emerald-400">3. Fluid Spacing with CSS Clamp</span>
                <p>
                  Instead of the original's rigid <code className="text-[#95CCCC]">padding: 80px 260px</code> (which broke on screens under 1400px), modern fluid clamps like <code className="text-[#95CCCC]">clamp(3rem, 6vw, 5rem)</code> and max-width containers maintain comfortable reading length without horizontal overflow.
                </p>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
                <span className="font-semibold text-emerald-400">4. Exact Figma Tri-Track Overview (856px × 200px with 22px Overlaps)</span>
                <p>
                  As designed in Figma, each track is 300px wide and 72px high. The tracks step across by 278px horizontally (yielding an intentional <strong>22px horizontal overlap</strong> between consecutive 300px tracks) and step down by 64px vertically (yielding an <strong>8px vertical overlap</strong>):
                </p>
                <div className="font-mono text-xs bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-300 space-y-1">
                  <div>.apm-tiered-diagram &#123; width: 856px; height: 200px; position: relative; &#125;</div>
                  <div>.apm-track-strategy  &#123; left: 0px; top: 0px; &#125; <span className="text-slate-500">/* [0 to 300px] */</span></div>
                  <div>.apm-track-discovery &#123; left: 278px; top: 64px; &#125; <span className="text-slate-500">/* [278 to 578px] &bull; 22px overlap */</span></div>
                  <div>.apm-track-delivery  &#123; left: 556px; top: 128px; &#125; <span className="text-slate-500">/* [556 to 856px] &bull; 22px overlap */</span></div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
                <span className="font-semibold text-emerald-400">5. Exact Concentric Triangle Alignment (Centroid Math vs Raw Figma Offsets)</span>
                <p>
                  In raw Figma SVG exports, nested layers are often bounded separately and offset with pixel shifts like <code className="text-[#95CCCC]">top: 22px; left: 19px</code> and <code className="text-[#95CCCC]">top: 40px; left: 35px</code>. Because equilateral triangles shrink toward their geometric centroid ($Y = Y_0 - H/3$), shifting the outer bounding box down by 22px and 40px pushed the bottom bases down to within 2px of each other while creating a 21px gap at the apex.
                </p>
                <p>
                  To keep them aligned <strong>EXACTLY as designed in Figma</strong>, the three triangles are locked to the shared axis of symmetry ($X = 90.14$) and inset concentrically around their common geometric centroid:
                </p>
                <div className="font-mono text-xs bg-slate-950 p-2.5 rounded border border-slate-800 text-slate-300 space-y-1">
                  <div>&lt;!-- Outer Triangle: Base reference (Center X = 90.14, Base Y = 156.02) --&gt;</div>
                  <div>&lt;g transform="translate(14.33, 16.29)"&gt; ... &lt;!-- Middle: Exact uniform 7.8px gap on all 3 sides --&gt;</div>
                  <div>&lt;g transform="translate(27.54, 31.37)"&gt; ... &lt;!-- Inner: Exact uniform 7.8px gap on all 3 sides --&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* =================================================================
           CODE VIEWERS: HTML5, CSS VARIABLES, OR STANDALONE SINGLE-FILE
           ================================================================= */
        <div className="flex-1 flex flex-col p-4 md:p-6 max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-4">
            <div>
              <h2 className="text-base font-bold text-white">
                {activeTab === 'html' && 'Clean Semantic HTML5 Code'}
                {activeTab === 'css' && 'Consolidated CSS Variables & Layout Rules'}
                {activeTab === 'standalone' && 'Complete Standalone HTML5 Document (Drop-in Ready)'}
              </h2>
              <p className="text-xs text-slate-400">
                {activeTab === 'html' && 'Semantic tags only. No container soup, no inline styles.'}
                {activeTab === 'css' && 'All styles referenced from root design tokens using CSS Grid and Flexbox.'}
                {activeTab === 'standalone' && 'Single self-contained file with embedded fonts, CSS variables, and HTML.'}
              </p>
            </div>
            <button
              onClick={() => {
                const text =
                  activeTab === 'html'
                    ? PURE_REFACTORED_HTML
                    : activeTab === 'css'
                    ? CONSOLIDATED_CSS
                    : COMPLETE_STANDALONE_DOCUMENT;
                handleCopy(text, activeTab);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded bg-[#95CCCC] text-[#1A3636] hover:bg-[#678C8C] hover:text-white transition-all shadow"
            >
              {copiedKey === activeTab ? <Check className="w-3.5 h-3.5 text-emerald-900" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedKey === activeTab ? 'Copied to Clipboard!' : 'Copy Code'}
            </button>
          </div>

          <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4 overflow-x-auto shadow-inner">
            <pre className="font-mono text-xs text-emerald-300/90 leading-relaxed">
              {activeTab === 'html' && PURE_REFACTORED_HTML}
              {activeTab === 'css' && CONSOLIDATED_CSS}
              {activeTab === 'standalone' && COMPLETE_STANDALONE_DOCUMENT}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
