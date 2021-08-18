import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    ResetVisibleCards,
    ToggleIsAnimationOn,
  } from '../store/actions/actions';
  import { State } from '../models/models';

export const usePairs = () => {
  const dispatch = useDispatch();
  const { visible } = useSelector((state: State) => state.cards);

  useEffect(() => {
    if (visible.length === 2 && visible[0].value !== visible[1].value) {
      dispatch(ToggleIsAnimationOn(true));
      const timeout = setTimeout(() => {
        dispatch(ResetVisibleCards());
      }, 600);
      return () => clearInterval(timeout);
    }
  }, [visible, dispatch]);
};
