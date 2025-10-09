import { useEffect } from "react";
import { Job } from "../data/Job";
import DOMPurify from "dompurify";

const JobCard = ({ title, startDate, endDate, employer, description, id }: Job) => {
  // Sanitize the description to prevent XSS attacks
  const sanitizedDescription = DOMPurify.sanitize(description || "", {
    ALLOWED_TAGS: ["a", "b", "i", "em", "strong", "p", "br"],
    ALLOWED_ATTR: ["href", "target"],
  });

  return (
    <p className={(id === 11 ? 'clear-both' : '') + ' mb-7'}>
      <h3 className="text-1xl">{startDate} - {endDate}</h3>
      <h3 className="text-base sm:text-xl font-bold">{title} at {employer}</h3>
      <p className="pt-3" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
    </p>
  );
};

export default JobCard;
