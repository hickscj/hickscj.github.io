export interface Job {
  id: number;
  employer: string;
  endDate: string;
  startDate: string;
  title: string;
  description?: string;
  tags?: string[];
}
