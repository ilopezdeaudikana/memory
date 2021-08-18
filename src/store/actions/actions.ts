import { Action, User, Card, Score } from "../../models/models";

export class MemoryActions {
  public static SET_CARDS = '[Memory] Set initial cards';
  public static SELECT_CARD = '[Memory] Select a card';
  public static SET_USER = '[Memory] Set user';
  public static SET_SCORE = '[Memory] Set score';
  public static RESET_VISIBLE_CARDS = '[Memory] Reset visible cards';
  public static RESET_CARDS = '[Memory] Reset visible and paired cards';
  public static TOGGLE_IS_ANIMATION_ON = '[Memory] Toggle is animation on';
}

export const SetCards = (cards: Card[]): Action => ({
  type: MemoryActions.SET_CARDS,
  payload: cards,
});

export const SelectCard = (card: Card): Action => ({
  type: MemoryActions.SELECT_CARD,
  payload: card,
});

export const SetUser = (user: User): Action => ({
  type: MemoryActions.SET_USER,
  payload: user,
});

export const SetScore = (score: Score): Action => ({
  type: MemoryActions.SET_SCORE,
  payload: score,
});

export const ToggleIsAnimationOn = (animate: boolean): Action => ({
  type: MemoryActions.TOGGLE_IS_ANIMATION_ON,
  payload: animate,
});

export const ResetVisibleCards = (): Action => ({
  type: MemoryActions.RESET_VISIBLE_CARDS,
  payload: null,
});

export const ResetCards = (): Action => ({
  type: MemoryActions.RESET_CARDS,
  payload: null,
});