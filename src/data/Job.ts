export interface Job {
  employer: string;
  endDate: string;
  key: number;
  startDate: string;
  title: string;
  description?: string;
  tags?: string[];
}
