<script setup lang="ts">
import {
  CIcon,
  CPlusPlusIcon,
  PythonIcon,
  JavaScriptIcon,
  Html5Icon,
  CssIcon,
  ReactIcon,
  FlaskIcon,
  GoogleCloudIcon,
  LinuxIcon,
  UnityIcon,
  UnrealEngineIcon,
  VueDotjsIcon,
  SvelteIcon,
  BlenderIcon,
  PandasIcon,
  NumPyIcon,
  PyTorchIcon,
} from "vue3-simple-icons";
import type { Component } from "vue";

const iconMap: Record<string, Component> = {
  python: PythonIcon,
  c: CIcon,
  cplusplus: CPlusPlusIcon,
  javascript: JavaScriptIcon,
  html5: Html5Icon,
  css: CssIcon,
  react: ReactIcon,
  flask: FlaskIcon,
  gcp: GoogleCloudIcon,
  linux: LinuxIcon,
  unity: UnityIcon,
  unrealengine: UnrealEngineIcon,
  vue: VueDotjsIcon,
  svelte: SvelteIcon,
  blender: BlenderIcon,
  pandas: PandasIcon,
  numpy: NumPyIcon,
  pytorch: PyTorchIcon,
};

interface Skill {
  id: string;
  name: string;
  icon?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    id: "c1",
    name: "Languages",
    skills: [
      { id: "l1", name: "C++", icon: "cplusplus" },
      { id: "l2", name: "C#" },
      { id: "l3", name: "C", icon: "c" },
      { id: "l4", name: "Java" },
      { id: "l5", name: "Python", icon: "python" },
      { id: "l6", name: "SQL" },
      { id: "l7", name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    id: "c2",
    name: "Software Tools/Frameworks",
    skills: [
      { id: "s1", name: "HTML", icon: "html5" },
      { id: "s2", name: "CSS", icon: "css" },
      { id: "s3", name: "React", icon: "react" },
      { id: "s4", name: "Flask", icon: "flask" },
      { id: "s5", name: "GCP", icon: "gcp" },
      { id: "s6", name: "Linux", icon: "linux" },
      { id: "s7", name: "Azure" },
      { id: "s8", name: "AWS" },
      { id: "s9", name: "Unity", icon: "unity" },
      { id: "s10", name: "Unreal Engine", icon: "unrealengine" },
      { id: "s11", name: "Vue", icon: "vue" },
      { id: "s12", name: "Svelte", icon: "svelte" },
      { id: "s13", name: "Blender", icon: "blender" },
    ],
  },
  {
    id: "c3",
    name: "Libraries",
    skills: [
      { id: "l1", name: "Pandas", icon: "pandas" },
      { id: "l2", name: "NumPy", icon: "numpy" },
      { id: "l4", name: "Pytorch", icon: "pytorch" },
      { id: "l5", name: "Matplotlib" },
      { id: "l6", name: "Flask", icon: "flask" },
      { id: "l7", name: "Unity Multiplayer", icon: "unity" },
      { id: "l8", name: "Unity VFX", icon: "unity" },
    ],
  },
];
</script>

<template>
  <section id="skills" class="skills">
    <h2>Skills</h2>
    <div
      v-for="category in categories"
      :key="category.id"
      class="skill-category"
    >
      <h3>{{ category.name }}</h3>
      <div class="skill-grid">
        <span
          v-for="skill in category.skills"
          :key="skill.id"
          class="skill-pill"
        >
          <component :is="iconMap[skill.icon]" v-if="skill.icon" />
          {{ skill.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: var(--space-sm, 0.5rem);
  color: var(--color-head, inherit);
}

.skill-category {
  margin-bottom: var(--space-md, 1rem);
  color: var(--color-head, inherit);
}

.skill-grid {
  display: grid;
  gap: var(--space-sm, 0.5rem);
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
}

.skill-pill {
  padding: var(--space-md, 1rem);
  color: var(--color-text, inherit);
  background: var(--color-primary, inherit);
  border-radius: 5px;
  display: inline-block;
}
</style>
