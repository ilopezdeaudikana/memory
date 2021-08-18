export interface Action {
  type: string;
  payload: any;
}

export interface Card {
  id: number;
  value: number;
}

export interface User {
  id: number;
  name: string;
}

export interface Score {
  value: number;
}

export interface CardsState {
  list: Card[];
  paired: Card[];
  visible: Card[];
  isAnimationOn: boolean
}

export interface State {
  cards: CardsState;
  user: User,
  score: Score
}

export interface IntervalRef {
  current: ReturnType<typeof setInterval> | null;
}

export interface DurationRef {
  current: number;
}
