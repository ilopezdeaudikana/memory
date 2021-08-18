import { useSelector } from 'react-redux';
import { State } from '../../models/models';
import { history } from '../../history';
import styles from './score.module.scss';

export const Score = () => {
  const { name } = useSelector((state: State) => state.user);
  const { value } = useSelector((state: State) => state.score);

  if (!name) {
    history.push('/');
  }

  return (
    <div>
      <button
        className='btn'
        onClick={() => {
          history.push('/game');
        }}
      >
        New Game
      </button>

      <div className='container'>
        <section className={styles.score}>
          <div data-testid='congrats' className={styles.congratulations}>
            Congratulations: {name}
          </div>
          <div data-testid='score' className={styles.value}>
            Score: {value}
          </div>
        </section>
      </div>
    </div>
  );
};
