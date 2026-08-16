import { ref, watchEffect, type Ref } from "vue";

type Section = "Experience" | "Projects" | "Skills";

function isValidSection(value: string | null): value is Section {
  return value === "Experience" || value === "Projects" || value === "Skills";
}

const activeSection: Ref<Section> = ref("Experience");

watchEffect(() => {
  localStorage.setItem("activeSection", activeSection.value);
});

export function useActiveSection() {
  function setActiveSection(section: Section): void {
    activeSection.value = section;
  }
  return { activeSection, setActiveSection };
}
