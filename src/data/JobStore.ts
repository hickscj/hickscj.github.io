import { Job } from "./Job";
import { jobject } from "./jobject";

class JobStore {
    jobs: Job[] = jobject.jobs;

    loadJobs() {
        this.jobs.push({
            key: 12,
            title: 'Software Engineer',
            employer: 'ICF',
            startDate: 'Dec 2021',
            endDate: 'Present',
            description: 'React, Node',
        });
        return this.jobs;
    }
}

export const jobStore = new JobStore();