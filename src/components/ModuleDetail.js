import { useParams } from "react-router-dom";
import { getSession } from "../api";  // Ensure this function is correct

export default function ModuleDetail() {
  const { diplomaId, moduleId } = useParams();
  const module = getSession({ sessionId: moduleId, catId: diplomaId });  // Get the session details

  return (
    <div className="module-detail">
      <h3>{module.name}</h3>
      <p>{module.description}</p>  {/* Assuming there's a description field */}
      <p>{module.speaker.name} | {module.speaker.org}</p>
    </div>
  );
}
 