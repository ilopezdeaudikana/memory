import { FormEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetUser } from '../../store/actions/actions';
import { User } from '../../models/models';
import { history } from '../../history';
import styles from './home.module.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    dispatch(SetUser({ name: '', id: 0 }));
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User = { name, id: Math.random() };
    dispatch(SetUser(user));
    history.push('/game');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={styles.user}
    >
      <label htmlFor='name'>User name</label>
      <input
        className={styles.input}
        id='name'
        type='text'
        onChange={handleChange}
        required
      />

      <button className={`${styles.submit} btn`} type='submit' disabled={!name}>
        Enter Game
      </button>
    </form>
  );
};
