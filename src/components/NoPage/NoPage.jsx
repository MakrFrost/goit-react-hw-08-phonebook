import { Link } from 'react-router-dom';

export default function NoPage() {
  return (
    <p>
      This page was not found, please return to
      <Link to="/">Homepage</Link>
    </p>
  );
}
