<script setup lang="ts">
interface DescriptionPoint {
  id: string;
  text: string;
  link?: string;
}
interface Stint {
  id: string;
  dateRange: string;
  points: DescriptionPoint[];
}

interface Company {
  id: string;
  name: string;
  title: string; // shared across all stints — e.g. "Software Engineering Co-op"
  stints: Stint[];
}

const companies: Company[] = [
  {
    id: "c7",
    name: "Wavwarehouse (Remote)",
    title: "Software Engineer (Contract)",
    stints: [
      {
        id: "1",
        dateRange: "June 2026 - Present",
        points: [
          {
            id: "1",
            text: "Built a royalty-free and dynamic-splits generator for audio samples, automating how royalty terms are calculated and applied.",
          },
          {
            id: "2",
            text: "Fixed a pagination bug that broke navigation when switching between libraries and playlists.",
          },
        ],
      },
    ],
  },
  {
    id: "c6",
    name: "University of Cincinnati - VR Room",
    title: "Student Associate",
    stints: [
      {
        id: "1",
        dateRange: "May 2026 - Aug 2026",
        points: [
          {
            id: "1",
            text: "Researched Unity vs. Unreal Engine to determine the right software foundation for a large-scale immersive VR display.",
          },
          {
            id: "2",
            text: "Physically built a 300-degree immersive screen from 20 columns of dual monitors, each angled 15 degrees inward to form a continuous curved display.",
          },
          {
            id: "3",
            text: "Synchronizing 8 screens using Matrox boxes to drive unified content across the full display (in progress).",
          },
        ],
      },
    ],
  },
  {
    id: "c2",
    name: "Siemens Digital Industries Software at Milford, Ohio (Hybrid)",
    title: "Software Engineer Co-op",
    stints: [
      {
        id: "c3",
        dateRange: "Jan - Apr 2024",
        points: [
          {
            id: "1",
            text: "Debugged and implemented features across Teamcenter's client and server-side codebases using an in-house React-based framework, JavaScript, and C++, submitting changes through Siemens' internal DOUG version-control system.",
          },
          {
            id: "2",
            text: "Implemented a Solution Variant Table on the search page's preview panel, letting users view and select item variants without opening the item in a new page, via a new SOA (Service-Oriented Architecture) client call.",
          },
        ],
      },
      {
        id: "c4",
        dateRange: "Aug - Dec 2024",
        points: [
          {
            id: "1",
            text: "Added Managed and Unmanaged release statuses to Teamcenter's Structure Variant Configuration, giving users control over whether a variant's BOM is auto-generated from configuration rules or manually defined.",
          },
          {
            id: "2",
            text: "Resolved stories and defects across Structure Variant Configuration, improving data retrieval efficiency and customization for configured items.",
          },
        ],
      },
      {
        id: "c5",
        dateRange: "May - Aug 2025",
        points: [
          {
            id: "1",
            text: "Built 2 Python tools for Teamcenter's BOM Agent AI, using SOA calls to create and retrieve rollup reports on demand, saving 1+ hours per manual query.",
          },
          {
            id: "2",
            text: "Designed the AI's tool-calling interface so it maps user questions (e.g. part mass, highest-mass component) to the correct rollup report data without manual lookup.",
          },
        ],
      },
    ],
  },
  {
    id: "c1",
    name: "Swingtech (Remote)",
    title: "Software Engineer Intern",
    stints: [
      {
        id: "swingtech-1",
        dateRange: "May 2022 - Oct 2024",
        points: [
          {
            id: "1",
            text: "Built VR fire-safety and Life Safety Code training simulations in Unity/C# using the XR Interaction Toolkit, supporting both desktop/web and mobile VR, including tutorial modules teaching core VR controls like locomotion and object interaction.",
          },
          {
            id: "2",
            text: "Developed a Flask-based PII detection tool using NLP and OCR (PIL, pandas) to scan uploaded documents and Outlook emails, flagging PII type and location with ~90% accuracy instead of exposing the sensitive data directly.",
          },
          {
            id: "3",
            text: "Built GeniusAI Grader, a Flask web app integrating GPT-4 to auto-grade student answers against teacher-defined rubrics, including LaTeX-aware scanning of handwritten math work, and improved grading accuracy through prompt engineering.",
          },
        ],
      },
    ],
  },
];
</script>

<template>
  <section id="experience" class="experience">
    <h2>Experience</h2>
    <section v-for="company in companies" :key="company.id" class="company">
      <h3>{{ company.name }} - {{ company.title }}</h3>
      <div v-for="stint in company.stints" :key="stint.id" class="stint">
        <h4>{{ stint.dateRange }}</h4>
        <ul>
          <li v-for="point in stint.points" :key="point.id" class="point">
            <a
              v-if="point.link"
              :href="point.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ point.text }}
            </a>
            <span v-else>{{ point.text }}</span>
          </li>
        </ul>
      </div>
    </section>
  </section>
</template>

<style scoped>
.experience {
  padding: var(--space-sm, 0.5rem);
  color: var(--color-head, inherit);
}
.company {
  margin-bottom: var(--space-md, 1rem);
  color: var(--color-text, inherit);
}

.stint {
  margin-bottom: var(--space-md, 1rem);
  color: var(--color-head, inherit);
}
.point {
  color: var(--color-text, inherit);
}
</style>
