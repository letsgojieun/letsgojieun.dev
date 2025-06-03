export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  tags: string[];
}

export interface Post extends PostMeta {
  content: string;
}
