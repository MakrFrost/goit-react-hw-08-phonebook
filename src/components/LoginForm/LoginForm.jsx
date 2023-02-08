import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdOutlineEmail } from 'react-icons/md';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

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
    <form onSubmit={handleSubmit} autoComplete="on" className={css.log_form}>
      <label className={css.log_mail}>
        Email
        <input type="email" name="email" />
        <MdOutlineEmail className={css.log_icon_mail} />
      </label>
      <label className={css.log_pass}>
        Password
        <input type={typeInput} name="password" id={noPassId} />
        {closedEyeIcon ? (
          <AiFillEyeInvisible
            id={noPassId}
            onClick={LookPassword}
            className={css.reg_icon_nopass}
          />
        ) : (
          <AiFillEye
            id={noPassId}
            onClick={LookPassword}
            className={css.reg_icon_pass}
          />
        )}
      </label>
      <button type="submit" className={css.log_btn}>
        Log In
      </button>
    </form>
  );
}
