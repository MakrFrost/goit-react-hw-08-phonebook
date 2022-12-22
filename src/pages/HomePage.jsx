import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Hello, nice to meet You here!</h1>
      <p>
        This <b>application</b> was created for active people who have a lot of
        contacts and dont have to much free time.
      </p>
      <ul>
        With my <b>"Phonebook App"</b> you can:
        <li>Create your personal account</li>
        <li>Add contact number to you contacts</li>
        <li>Make a call directly from the app</li>
        <li>Check the total number of your contacts</li>
        <li>See the time and much-much more!</li>
        <h2>
          Let's not waste time and go straight to
          <Link to="/register">registering</Link> your account!
        </h2>
        <h2>
          Or if you have an account, then let's <Link to="/login">log in </Link>
          !
        </h2>
      </ul>
    </div>
  );
}
