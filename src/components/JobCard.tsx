import { Job } from "../data/Job";
import DOMPurify from "dompurify";

const JobCard = ({ title, startDate, endDate, employer, description, tags }: Job) => {
  // Sanitize the description to prevent XSS attacks
  const sanitizedDescription = DOMPurify.sanitize(description || "", {
    ALLOWED_TAGS: ["a", "b", "i", "em", "strong", "p", "br"],
    ALLOWED_ATTR: ["href", "target"],
  });

  return (
    <div className="border-t border-gray-300 p-2 mb-3">
      <h3 className="text-1xl">{startDate} - {endDate}</h3>
      <h3 className="text-2xl font-bold italic">{title} at {employer}</h3>
      <p className="pt-3" dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></p>
    </div>
  );
};

export default JobCard;
