import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetCards, ResetCards } from '../../store/actions/actions';
import { usePairs, useScore } from '../../hooks';
import { Grid } from '../../grid/grid';
import { State } from '../../models/models';
import { getCards } from '../../random-cards';
import { history } from '../../history';

export const Game = () => {
  const [newGame, setNewGame] = useState(false);
  const dispatch = useDispatch();
  const { list } = useSelector((state: State) => state.cards);
  const { name } = useSelector((state: State) => state.user);

  if (!name) {
    history.push('/');
  }

  useEffect(() => {
    const pairedCards = getCards();
    dispatch(SetCards(pairedCards));
  }, [dispatch, newGame]);

  usePairs();

  useScore();

  const restart = () => {
    dispatch(ResetCards());
    setNewGame(!newGame);
  };

  return (
    <>
      <button className='btn' onClick={restart}>New Game</button>
      {list.length === 0 ? <div>...Loading</div> : <Grid list={list} />}
    </>
  );
};
