import { FormEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { User } from '../../models/models';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.scss';
import { setUser } from '../../store/slices/user-slice';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  useEffect(() => {
    dispatch(setUser({ name: '', id: 0 }));
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user: User = { name, id: Math.random() };
    dispatch(setUser(user));
    navigate('/game');
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
