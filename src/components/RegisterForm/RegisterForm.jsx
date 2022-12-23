import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  function formSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  }

  return (
    <form onSubmit={formSubmit} className={css.reg_form} autoComplete="on">
      <label className={css.reg_name}>
        Username
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.reg_mail}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={css.reg_pass}>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit">Registered</button>
    </form>
  );
};
