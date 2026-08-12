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
            {id:"1",text:"Automated PII extraction from unstructured email data, achieving a 90% accuracy rate and saving 10+ weekly man-hours."}
        ]
    },
    {
        id: "t3",
        title:"Software Engineer Co-op",
        organization: "Siemens Digital Industries Software at Milford, Ohio (Hybrid)",
        dateRange: "Jan - Apr 2024, Aug - Dec 2024, May - Aug 2025",
        description: [
            {id:"1",text:"Engineered 3 features for Teamcenter's Structure Variant Configuration and built 2 Python/SOA tools for its BOM Agent AI."}
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
        title: "Video Game Prototypes",
        organization: "University of Cincinnati (Coursework)",
        dateRange: "Jan - Apr 2026",
        description: [
            {id:"1", text:"Built a video game prototype each week based on the given constraint(s)."},
            {id:"2", text:"Itch.io", link:"https://gba001.itch.io/"}
        ]
    },
    {
        id: "t6",
        title: "Student Associate",
        organization: "University of Cincinnati - VR Room",
        dateRange: "May 2026 - Present",
        description: [
            {id:"1", text:"Physically built and is synchronizing a 300-degree, 20-column curved VR screen using Matrox boxes."}
        ]
    },
    {
        id: "t7",
        title: "Software Engineer (Contract)",
        organization: "Wavwarehouse",
        dateRange: "June 2026 - Present",
        description: [
            {id:"1", text:"Built a royalty-free and dynamic-splits generator for audio samples."},
            {id:"2", text:"Fixed a pagination bug affecting library/playlist navigation."}
        ]
    },
]
</script>

<template>
    <section id="timeline" class="timeline">
        <h2>Timeline</h2>
        <ul>
            <li v-for=" timeline in timeLineEntries" :key="timeline.id" class="entry">
                <h3>{{ timeline.title }}</h3>
                <h4>{{ timeline.organization }} - {{ timeline.dateRange }}</h4>
                <ul>
                    <li v-for="point in timeline.description" :key="point.id" class="point">
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
    padding: var(--space-sm, 0.5rem);
    color: var(--color-head, inherit);
}

.entry{
    margin-bottom: var(--space-md, 1rem);
    color: var(--color-head, inherit);
}

.point{
    color: var(--color-text, inherit);
}
</style>