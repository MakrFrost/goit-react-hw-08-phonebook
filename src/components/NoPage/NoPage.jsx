import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <div className="no-page">
      This page was not found, please return <Link to="/"> Homepage </Link>
    </div>
  );
}
