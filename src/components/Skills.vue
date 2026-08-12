<script setup lang="ts">
interface Skill{
    id: string;
    name: string;
    icon?: string;
}

interface SkillCategory{
    id: string;
    name: string;
    skills: Skill[]
}

const categories: SkillCategory[] = 
[
    {
        id: "c1",
        name: "Languages",
        skills:[
            { id: "l1", name: "C++"},
            { id: "l2", name: "C#"},
            { id: "l3", name: "C"},
            { id: "l4", name: "Java"},
            { id: "l5", name: "Python"},
            { id: "l6", name: "SQL"},
            { id: "l7", name: "JavaScript"},
        ]
    },
    {
        id: "c2",
        name: "Software Tools/Frameworks",
        skills:[
            { id: "s1", name: "HTML"},
            { id: "s2", name: "CSS"},
            { id: "s3", name: "React"},
            { id: "s4", name: "Flask"},
            { id: "s5", name: "GCP"},
            { id: "s6", name: "Linux"},
            { id: "s7", name: "Azure"},
            { id: "s8", name: "AWS"},
            { id: "s9", name: "Unity"},
            { id: "s10", name: "Unreal Engine"},
            { id: "s11", name: "Vue"},
            { id: "s12", name: "Svelte"},
            { id: "s13", name: "Blender"}
        ]
    },
    {
        id: "c3",
        name: "Libraries",
        skills:[
            { id: "l1", name: "Pandas"},
            { id: "l2", name: "NumPy"},
            { id: "l4", name: "Pytorch"},
            { id: "l5", name: "Matplotlib"},
            { id: "l6", name: "Flask"},
            { id: "l7", name: "Unity Multiplayer"},
            { id: "l8", name: "Unity VFX"},
        ]
    }
]
</script>

<template>
    <section id="skills" class="skills">
        <h2>Skills</h2>
        <div v-for="category in categories" :key="category.id" class="skill-category">
            <h3>{{ category.name }}</h3>
            <div class="skill-grid">
                <span v-for="skill in category.skills" :key="skill.id" class="skill-pill">
                <img v-if="skill.icon" :src="skill.icon" :alt="skill.name"/>
                {{ skill.name }}
                </span>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills{
    padding: var(--space-sm, 0.5rem);
    color: var(--color-head, inherit);
}

.skill-category{
    margin-bottom: var(--space-md, 1rem);
    color: var(--color-head, inherit);
}

.skill-grid{
    display: grid;
    gap: var(--space-sm, 0.5rem);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.skill-pill{
    padding: var(--space-md, 1rem);
    color: var(--color-text, inherit);
    background: var(--color-primary, inherit);
    border-radius: 5px;
    display: inline-block;
}
</style>