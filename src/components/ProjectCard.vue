<script setup lang="ts">
import { ref } from 'vue'
interface ProjectCard {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  status: "completed" | "in-progress" | "planned";
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

const projects: ProjectCard[] = [
  {
    id: "1",
    title: "Ball Royale",
    description:
      "A multiplayer battle royal survival game where players roll around and shrink other opponents with the help of powerups.",
    techStack: ["Unity"],
    status: "in-progress",
  },
  {
    id: "2",
    title: "OMID USA Farming Drone",
    description:
      "Developed a Pest Detection ResNet18 Classification Model with a F1 score of 94%+ and integrated the model" +
      " to a flutter application hosted in google cloud where users can upload the image to the model and see the model's predicted value " +
      " and confidence score.",
    techStack: ["Python", "Pytorch", "Google Cloud", "Dart"],
    status: "completed",
  },
  {
    id: "3",
    title: "Virtual Office Space",
    description:
      "Co-developed a 3D VR environment enabling interactive visual exploration of academic research" +
      " and won the Digital Futures Storytelling Prize in UC Revolution 2022.",
    techStack: ["Unity"],
    status: "completed",
  },
];

const expandedId = ref<string | null>(null)
</script>

<template>
  <section id="projects" class="projects">
    <h2>Featured Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.id" class="project">
        <h3 @click="expandedId = project.id">{{ project.title }}</h3>
        <div v-if="expandedId === project.id" class="info">
          <b v-if="project.status === 'in-progress'"> In Progress </b>
          <p>{{ project.description }}</p>
          <p>
            <b>Tech Stack: </b>
            <i v-for="(tech, index) in project.techStack" :key="index">
              {{ tech }}
              <span v-if="index !== project.techStack.length - 1">, </span>
            </i>
          </p>
          <img
            v-if="project.imageUrl"
            :src="project.imageUrl"
            :alt="project.title"
          />
          <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">Demo</a>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">Github</a>
        </div>
      </li>
    </ul>
  </section>
  
</template>

<style scoped>
.projects{
    padding: var(--space-sm, 0.5rem);
    color: var(--color-head, inherit);
}

.project{
    margin-bottom: var(--space-md, 1rem);
    color: var(--color-head, inherit);
}

.info{
  color: var(--color-text, inherit);
}
</style>