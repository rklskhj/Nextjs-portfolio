import { create } from "zustand";
import { persist } from "zustand/middleware";

const useProjectStore = create(
  persist(
    (set, get) => ({
      projects: [],
      currentProject: null,
      setProjects: (projects) => set({ projects }),
      setCurrentProject: (project) => set({ currentProject: project }),
      getProjectById: (id) => {
        const { projects } = get();
        return projects.find((project) => project.id === id);
      },
    }),
    {
      name: "project-storage",
    }
  )
);

export default useProjectStore;
