export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
  screenshots: string[];
  link: string;
}

export interface Skill {
  name: string;
  years: number;
}
