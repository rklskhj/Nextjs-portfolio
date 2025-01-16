import { create } from "zustand";

const useProjectStore = create((set, get) => ({
  projects: [],
  currentProject: null,
  setProjects: (projects) => set({ projects }),
  setCurrentProject: (project) => set({ currentProject: project }),
  getProjectById: (id) => {
    const { projects } = get();
    return projects.find((project) => project.id === id);
  },
}));

export default useProjectStore;
