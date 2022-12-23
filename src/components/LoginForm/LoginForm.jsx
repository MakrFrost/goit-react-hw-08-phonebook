import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { logIn } from 'redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const [typeInput, setTypeInput] = useState('password');
  const [noPassId, setNoPassId] = useState('pass');
  const [closedEyeIcon, setClosedEyeIcon] = useState(true);

  function LookPassword(e) {
    if (e.currentTarget.id === 'pass') {
      setTypeInput('text');
      setNoPassId('noPass');
      setClosedEyeIcon(false);
    } else {
      setTypeInput('password');
      setNoPassId('pass');
      setClosedEyeIcon(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type={typeInput} name="password" id={noPassId} />
        {closedEyeIcon ? (
          <AiFillEyeInvisible id={noPassId} onClick={LookPassword} />
        ) : (
          <AiFillEye id={noPassId} onClick={LookPassword} />
        )}
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}
