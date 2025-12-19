export interface NavItem {
  id: number;
  url: string;
  label: string;
}
export interface Service {
  id: number;
  image: string;
  title: string;
  info: string;
}
export interface ServiceItem {
  mainTitle: {
    title1:string,
    title2:string,
  };
  Services: Service[];
}
export interface project {
  id: number;
  title: string;
  demo: string;
  code: string;
  image: string;
  tools: React.ComponentType[];
}



export interface ProjectItem {
  mainTitle: {
    title1:string,
    title2:string,
    code:string,
    demo:string
  };
  projects: project[];
}
export interface skill {
  id: number;
  icon:string;
  title: string;
  info: string;
}
export interface SkillsItem {
  mainTitle: {
    title1:string,
    title2:string,
    title3:string,
    title4:string,
  };
  skills: skill[];
}
export interface blog {
  id: number;
  image:string;
  title: string;
  keyWords: { Icon: string; name: string }[];
  body:string
}
export interface BlogsItem {
  mainTitle: {
    title1:string,
    title2:string
  };
  blogs: blog[];
}
