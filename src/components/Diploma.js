import { useParams } from "react-router-dom";
import { getCategory } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getCategory(diplomaId);

  return (
    <>
      <h2>{diploma.name} Diploma</h2>

      <ul className="session-list">
        {diploma?.sessions.map((session) => (
          <li className="session" key={session.id}>
            <p className="session-name">{session.name}</p>
            <p>{session.id} | {session.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
