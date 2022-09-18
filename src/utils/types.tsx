export interface ImageType {
  id: string;
  label: string;
  desc: string;
  categories: string[];
  downloadUrl: string;
  links: {
    label: string;
    url: string;
  }[];
}
