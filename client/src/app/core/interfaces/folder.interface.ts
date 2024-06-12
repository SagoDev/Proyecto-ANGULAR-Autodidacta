export interface Folder {
    id: string;
    name: string;
    links: Link[];
  }
  
  export interface Link {
    id: string;
    title: string;
    url: string;
  }