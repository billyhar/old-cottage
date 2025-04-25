export interface Content {
  id: string;
  title: string;
  content: string;
  content_type: string;
  created_at: string;
  updated_at: string;
}

export type ContentInput = Omit<Content, 'id' | 'created_at' | 'updated_at'>;

export type ContentUpdate = Partial<ContentInput> & {
  id: string;
}; 