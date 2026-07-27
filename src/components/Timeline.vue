<script setup lang="ts">
interface DescriptionPoint{
    id: string,
    text: string,
    link?: string
}
interface TimeLineEntry{
    id: string,
    title:string,
    organization: string,
    dateRange: string,
    description: DescriptionPoint[]
}

const timeLineEntries: TimeLineEntry[] = [
    {
        id: "t1",
        title:"Virtual Office Space",
        organization: "UC Revolution 2022 Hackathon",
        dateRange: "Feb 26-27, 2022",
        description: [
            {id:"1",text:"Co-developed a 3D VR environment enabling interactive visual exploration of academic research; won the Digital Futures Storytelling Prize."},
            {id:"2",text:"Programmed scene transitions, user navigation, and UI flow for main interaction loops using Unity."},
            {id:"3",text:"Devpost Link",link:"https://devpost.com/software/virtual-office-space"}
        ]
    },
    {
        id: "t2",
        title:"Software Engineer Intern",
        organization: "Swingtech (Remote)",
        dateRange: "May 2022 - Oct 2024",
        description: [
            {id:"1",text:"Initiated a virtual reality Fire Safety training module for hospitals using Unity Game Engine and C#, advancing training immersion."},
            {id:"2",text:"Automated PII extraction from unstructured email data, achieving a 90% accuracy rate and saving 10+ weekly man-hours."},
            {id:"3",text:"Developed a demo website serving as a central hub to consolidate company innovation team data and analytics efforts."},
            {id:"4",text:"Worked on a Python-Flask application utilizing AI models to grade student answers based on customizable rubric criteria."}
        ]
    },
    {
        id: "t3",
        title:"Software Engineer Co-op",
        organization: "Siemens Digital Industries Software at Milford, Ohio (Hybrid)",
        dateRange: "Jan - Apr, Aug - Dec 2024, May - Aug 2025",
        description: [
            {id:"1",text:"Debugged and implemented features in both Teamcenter’s Client and Server-Side development units using in-house dev tools programmed in C++, JavaScript, and a React-based framework."},
            {id:"2",text:"Engineered 3 features for Structure Variant Configuration, enhancing Teamcenter’s data retrieval efficiency and customization."},
            {id:"3",text:"Added 2 new tools for Teamcenter’s BOM Agent AI using Python and SOA calls to query and retrieve rollup report data, saving 1+ hours per query."}
        ]
    },
    {
        id: "t4",
        title:"OMID USA AI Farming Drone (Senior Capstone Project)",
        organization: "OMID USA",
        dateRange: "Sept 2025 - Apr 2026",
        description: [
            {id:"1",text:"Integrated a specialized pest detection module into a team-based Flutter application, implementing responsive UI logic and persistent state management."},
            {id:"2",text:"Architected a RESTful API bridge using Google Cloud Run to perform real-time inference on a custom-trained ResNet-18 model, achieving 90%+ accuracy in pest identification."}
        ]
    },
    {
        id: "t5",
        title:"Student Associate",
        organization: "University of Cincinnati",
        dateRange: "May - Aug 2026",
        description: [
            {id:"1",text:"Configured and calibrated software and hardware based on CAVE (Cave Automatic Virtual Environment) for academicpurposes."},
            {id:"2",text:"Researched and Developed VR software using Unreal nDisplay and Unity to enhance classroom engagement and facilitate immersive learning experiences within the CAVE environment."}
        ]    
    },
    {
        id: "t6",
        title:"Software Engineer (Contract)",
        organization: "Wavwarehouse",
        dateRange: "May 2026 - Present",
        description: [
            {id:"1",text:"Implemented additional features and resolved bugs on an existing vue.js website with the help of AI"}
        ]
        /* Implemented only 2 features so far. Recently assinged to add more and fix bugs.*/
    }
]
</script>

<template>
    <section id="timeline" class="timeline">
        <h2>Timeline</h2>
        <ul>
            <li v-for=" timeline in timeLineEntries" :key="timeline.id">
                <h3>{{ timeline.title }}</h3>
                <h4>{{ timeline.organization }} - {{ timeline.dateRange }}</h4>
                <ul>
                    <li v-for="point in timeline.description" :key="point.id">
                        <a v-if="point.link" :href="point.link" target="_blank" rel="noopener noreferrer">
                            {{ point.text }}
                        </a>
                        <span v-else>{{ point.text }}</span>
                    </li>
                </ul>
            </li>
        </ul>       
    </section>
</template>

<style scoped>
.timeline{
    padding: var(--spacing-x1, 4rem) var(--spacing-md, 1.5rem);
    color: var(--color-text, inherit);
}
</style>