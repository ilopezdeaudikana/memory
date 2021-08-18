import { Card } from './models/models';

export const getCards = (): Card[] => {
  const numbers: number[] = [...Array(60)].map(() =>
    Math.ceil(Math.random() * 60)
  );
  const noDuplicates: number[] = [...new Set(numbers)].slice(0, 10);
  const originalCards: Card[] = noDuplicates.map(
    (n: number, index: number) => ({
      value: n,
      id: index,
    })
  );

  const pairedCards = originalCards
    .concat(
      originalCards.map((item: Card) => {
        return {
          ...item,
          id: item.id + 61,
        };
      })
    )
    .sort(() => {
      return 0.5 - Math.random();
    });
  return pairedCards;
};
