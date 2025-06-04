import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IExperience, IProject, ISkill, IDegree, ICertification, IProfile } from '../types';

// Import mock data
import { projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { skills } from '../data/skills';
import { degrees, certifications } from '../data/education';

interface ThemeState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}

interface DataState {
  experiences: IExperience[];
  projects: IProject[];
  skills: ISkill[];
  degrees: IDegree[];
  certifications: ICertification[];
  profile: IProfile;
  resumeUrl: string;
  
  setExperiences: (experiences: IExperience[]) => void;
  setProjects: (projects: IProject[]) => void;
  setSkills: (skills: ISkill[]) => void;
  setDegrees: (degrees: IDegree[]) => void;
  setCertifications: (certifications: ICertification[]) => void;
  setProfile: (profile: Partial<IProfile>) => void;
  setResumeUrl: (url: string) => void;
  
  addExperience: (experience: IExperience) => void;
  addProject: (project: IProject) => void;
  addSkill: (skill: ISkill) => void;
  addDegree: (degree: IDegree) => void;
  addCertification: (certification: ICertification) => void;
  
  updateExperience: (id: string, experience: Partial<IExperience>) => void;
  updateProject: (id: string, project: Partial<IProject>) => void;
  updateSkill: (id: string, skill: Partial<ISkill>) => void;
  updateDegree: (id: string, degree: Partial<IDegree>) => void;
  updateCertification: (id: string, certification: Partial<ICertification>) => void;
  
  deleteExperience: (id: string) => void;
  deleteProject: (id: string) => void;
  deleteSkill: (id: string) => void;
  deleteDegree: (id: string) => void;
  deleteCertification: (id: string) => void;
}

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

type StoreState = ThemeState & DataState & AuthState;

const defaultProfile: IProfile = {
  name: 'Nouho Sylla',
  title: 'Data Scientist / Analyst',
  image: 'https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  email: 'snouho.ylla@gmail.com',
  phone: '+33 6 13 10 46 26',
  linkedin: 'nouho-sylla',
  github: 'username'
};

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // Theme state
      theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      
      // Data state
      experiences,
      projects,
      skills,
      degrees,
      certifications,
      profile: defaultProfile,
      resumeUrl: '/resume.pdf',
      
      setExperiences: (experiences) => set({ experiences }),
      setProjects: (projects) => set({ projects }),
      setSkills: (skills) => set({ skills }),
      setDegrees: (degrees) => set({ degrees }),
      setCertifications: (certifications) => set({ certifications }),
      setProfile: (profile) => set((state) => ({ profile: { ...state.profile, ...profile } })),
      setResumeUrl: (url) => set({ resumeUrl: url }),
      
      addExperience: (experience) => 
        set((state) => ({ experiences: [...state.experiences, experience] })),
      addProject: (project) => 
        set((state) => ({ projects: [...state.projects, project] })),
      addSkill: (skill) => 
        set((state) => ({ skills: [...state.skills, skill] })),
      addDegree: (degree) => 
        set((state) => ({ degrees: [...state.degrees, degree] })),
      addCertification: (certification) => 
        set((state) => ({ certifications: [...state.certifications, certification] })),
      
      updateExperience: (id, experience) => 
        set((state) => ({ 
          experiences: state.experiences.map(e => 
            e.id === id ? { ...e, ...experience } : e
          ) 
        })),
      updateProject: (id, project) => 
        set((state) => ({ 
          projects: state.projects.map(p => 
            p.id === id ? { ...p, ...project } : p
          ) 
        })),
      updateSkill: (id, skill) => 
        set((state) => ({ 
          skills: state.skills.map(s => 
            s.id === id ? { ...s, ...skill } : s
          ) 
        })),
      updateDegree: (id, degree) => 
        set((state) => ({ 
          degrees: state.degrees.map(d => 
            d.id === id ? { ...d, ...degree } : d
          ) 
        })),
      updateCertification: (id, certification) => 
        set((state) => ({ 
          certifications: state.certifications.map(c => 
            c.id === id ? { ...c, ...certification } : c
          ) 
        })),
      
      deleteExperience: (id) => 
        set((state) => ({ 
          experiences: state.experiences.filter(e => e.id !== id) 
        })),
      deleteProject: (id) => 
        set((state) => ({ 
          projects: state.projects.filter(p => p.id !== id) 
        })),
      deleteSkill: (id) => 
        set((state) => ({ 
          skills: state.skills.filter(s => s.id !== id) 
        })),
      deleteDegree: (id) => 
        set((state) => ({ 
          degrees: state.degrees.filter(d => d.id !== id) 
        })),
      deleteCertification: (id) => 
        set((state) => ({ 
          certifications: state.certifications.filter(c => c.id !== id) 
        })),
        
      // Auth state
      isAuthenticated: false,
      login: () => set({ isAuthenticated: true }),
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({
        theme: state.theme,
        experiences: state.experiences,
        projects: state.projects,
        skills: state.skills,
        degrees: state.degrees,
        certifications: state.certifications,
        isAuthenticated: state.isAuthenticated,
        profile: state.profile,
        resumeUrl: state.resumeUrl,
      }),
    }
  )
);