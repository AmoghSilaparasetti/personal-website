<script setup lang="ts">
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
</script>

<template>
  <h2>Featured Projects</h2>
  <ul>
    <li v-for="project in projects" :key="project.id">
      <h3>{{ project.title }}</h3>
      <b v-if="project.status === 'in-progress'"> In Progress </b>
      <p>{{ project.description }}</p>
      <p>
        <b>Tech Stack: </b>
        <i v-for="(tech, index) in project.techStack" :key="index">
          {{ tech }}
        </i>
      </p>
      <img
        v-if="project.imageUrl"
        :src="project.imageUrl"
        :alt="project.title"
      />
      <a v-if="project.demoUrl" :href="project.demoUrl">Demo</a>
      <a v-if="project.githubUrl" :href="project.githubUrl">Github</a>
    </li>
  </ul>
</template>
