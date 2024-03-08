import { Job } from "./Job";
import { jobject } from "./jobject";

class JobStore {
    jobs: Job[] = jobject.jobs;

    loadJobs() {
        return this.jobs;
    }
}

export const jobStore = new JobStore();
