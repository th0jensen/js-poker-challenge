// The values of each card type
const POKER_POINTS = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

// Calculate the total value of the hand
function calculateHand(hand) {
  let handPoints = 0
  // Iterate throughout the hand
  for (let i = 0; i <= hand.length; i++) {
    // Assign the points of that letter
    const key = POKER_POINTS[hand[i]]
    if (key) {
      // Add the points to the total tally
      handPoints += key
    }
  }
  return handPoints
}

// Check if there are any pairs
function hasPair(hand) {
  if (hand[0] === hand[1]) {
    return true
  } else {
    return false
  }
}

// Check if there are any three of a kinds
function hasThreeOfAKind(hand) {
  if (hand[0] === hand[1]) {
    if (hand[1] === hand[2]) {
      return true
    }
  } else {
    return false
  }
}

module.exports = {
  POKER_POINTS,
  calculateHand,
  hasPair,
  hasThreeOfAKind
}
