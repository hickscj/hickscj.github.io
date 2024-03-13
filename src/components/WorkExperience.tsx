import React from "react";
import { jobStore } from "../data/JobStore";
import JobCard from "./JobCard";

const WorkExperience: React.FC = () => {
  const jobs = jobStore.loadJobs();

  return (
    <section className="work-experience">
      {Object.values(jobs)
        .sort((a, b) => b.key - a.key)
        .map((job, idx) => {
          if (idx < 5) {
            return <JobCard {...job} />;
          }
        })}
    </section>
  );
};

export default WorkExperience;
