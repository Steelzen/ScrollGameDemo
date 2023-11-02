import "./styles.css";
import { Link } from "react-router-dom";

type LinkButtonProps = {
  link: string;
  buttonName: string;
  className: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  link,
  buttonName,
  className,
}) => {
  return (
    <div className={className}>
      <button>
        <Link to={link}>{buttonName}</Link>
      </button>
    </div>
  );
};

export default LinkButton;
