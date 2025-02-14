export type Qualifications = {
    education: string;
    skills: string[];
    experience: string;
  }
  
  export type Vacancies = {
    id: number;
    jobTitle: string;
    vacancies: number;
    deadline: string;
    functionalDesignation: string;
    department: string;
    location: string;
    responsibilities: string[];
    qualifications: Qualifications;
  }