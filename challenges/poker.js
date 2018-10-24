/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  const value1 = calculatePokerHandValue(hand1);
  const value2 = calculatePokerHandValue(hand2);

  if (value1 > value2) return 'Player 1 wins';
  if (value1 < value2) return 'Player 2 wins';
  return 'Draw';
}

function calculatePokerHandValue(hand) {
  return Math.max(...hand) + calculatePokerRankValue(hand);
}

function calculatePokerRankValue(hand) {
  const cardCount = getCardCount(hand);

  if (isFourOfAKind(cardCount)) return 10 ** 7;
  if (isFullHouse(cardCount)) return 10 ** 6;
  if (isStraight(cardCount)) return 10 ** 5;
  if (isThreeOfAKind(cardCount)) return 10 ** 4;
  if (isTwoPair(cardCount)) return 10 ** 3;
  if (isOnePair(cardCount)) return 10 ** 2;
  return 0;
}

function getCardCount(hand) {
  const cache = {};

  for (let i = 0; i < 5; i++) {
    const card = hand[i];
    if (cache[card] === undefined) cache[card] = 0;
    cache[card] += 1;
  }

  return cache;
}

function isFourOfAKind(handCount) {
  return Object.values(handCount).includes(4);
}

function isFullHouse(handCount) {
  const counts = Object.values(handCount);

  return counts.includes(2) && counts.includes(3);
}

function isStraight(handCount) {
  const cards = Object.keys(handCount);

  if (cards.length < 5) return false;

  cards.sort(() => -1);

  for (let i = 0; i < 4; i++) {
    if (parseInt(cards[i]) !== parseInt(cards[i + 1]) - 1) return false;
  }

  return true;
}

function isThreeOfAKind(handCount) {
  const counts = Object.values(handCount);

  return counts.includes(3) && !counts.includes(2);
}

function isTwoPair(handCount) {
  return Object.values(handCount).filter((count) => count === 2).length === 2;
}

function isOnePair(handCount) {
  const counts = Object.values(handCount);

  return counts.includes(2) && counts.filter(count => count === 1).length === 3;
}

const hand1 = [5, 5, 3, 4, 5];
const hand2 = [2, 2, 2, 5, 5];

console.log(poker(hand1, hand2));

module.exports = poker;
