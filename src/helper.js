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
  for (let i = 0; i <= hand.length; i++) {
    const key = POKER_POINTS[hand[i]]
    if (key) {
      handPoints += key
    }
  }
  return handPoints
}

// Check if there are any ties
function hasDuplicates(array) {
  // Create a hash table to store the values as we count
  const valuesSoFar = Object.create(null)
  // Iterate throughout the entire array
  for (let i = 0; i < array.length; ++i) {
    // Convert the hand into points
    const value = calculateHand(array[i])
    // Check if the value has already been counted
    if (value in valuesSoFar) {
      return true
    }
    valuesSoFar[value] = true
  }
  return false
}

module.exports = {
  POKER_POINTS,
  calculateHand,
  hasDuplicates
}
