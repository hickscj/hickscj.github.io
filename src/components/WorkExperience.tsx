import { jobStore } from "../data/JobStore";
import JobCard from "./JobCard";

const WorkExperience = () => {
  const jobs = jobStore.loadJobs();

  console.dir(jobs);

  return (
    <div className="flex flex-row">
      <section className="work-experience float-right">
        <img className="w-45 mr-5 mb-5 ml-0 sepia border-2 float-left" src="img/chad.hicks.jpg" alt="Profile picture of Chad J. Hicks" />
        {Object.values(jobs)
          .sort((a, b) => b.id - a.id)
          .map((job, idx) => {
            if (idx < 5) {
              return <JobCard {...job} />;
            }
          })}
      </section>
    </div>
  );
};

export default WorkExperience;
