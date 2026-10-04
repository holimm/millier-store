export interface BlogType {
  _id?: string;
  title?: string;
  idTitle?: string;
  content?: string;
  chapeau?: string;
  category?: string;
  tags?: string[];
  readTime?: string;
  images?: {
    thumbnail?: string;
    alt?: string;
    credit?: string;
    creditUrl?: string;
  };
  author?: {
    name?: string;
    role?: string;
    date?: string;
  };
  date?: string;
}
