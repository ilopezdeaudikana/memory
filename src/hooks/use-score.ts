import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State, DurationRef } from '../models/models';
import { SetScore, ResetCards } from '../store/actions/actions';
import { useHistory } from 'react-router-dom';
import { useInterval } from '../hooks';

export const useScore = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { paired, list } = useSelector((state: State) => state.cards);
  const [durationIntervalRef, durationRef] = useInterval(
    (durationRef: DurationRef) => {
      durationRef.current++;
    },
    1000,
  );
  useEffect(() => {
    if (paired.length > 0 && paired.length === list.length) {
      clearInterval(
        durationIntervalRef.current as ReturnType<typeof setInterval>
      );
      const currentDuration = durationRef ? durationRef.current: 0;
      dispatch(SetScore({ value: Math.round((1 / (currentDuration as number) ) * 10000) }));
      const timeout = setTimeout(() => {
        history.push('/score');
        dispatch(ResetCards());
      }, 1000);
      return () => clearInterval(timeout);
    }
  }, [paired, durationIntervalRef, list.length, dispatch, history, durationRef]);
};
