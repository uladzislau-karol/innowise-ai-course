import { Link } from "react-router";
import { LINKS } from "./constants";

export const Navigation: React.FC = () => {
  return (
    <div>
      {LINKS.map(({ label, path }) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </div>
  );
};
