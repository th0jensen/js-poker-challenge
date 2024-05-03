// Import the calculation function
const { calculateHand, hasDuplicates } = require('./helper')

function winningPair(firstHand, secondHand) {
  // Store the hands in some easier to manage variables
  const firstHandPoints = calculateHand(firstHand)
  const secondHandPoints = calculateHand(secondHand)
  // Exclude cases with the card 'Q'
  if (firstHand.includes('Q')) {
    return (firstHand = [])
  }
  // Compare both hands and return the winning value
  if (firstHandPoints > secondHandPoints) {
    return firstHand
  }
  if (secondHandPoints > firstHandPoints) {
    return secondHand
  }
}

// Extension criteria

function winningPairFromArray(hands) {
  // Set the highestCount variable
  let highestCount = hands[0]
  // Start a loop iterating through all the arrays
  // in the array
  for (let i = 0; i < hands.length; i++) {
    // Convert the hand into poker points to compare
    const numberHands = calculateHand(hands[i])
    // Compare the current hand with the points of highestCount
    if (numberHands > calculateHand(highestCount)) {
      highestCount = hands[i]
    }
    // Check for ties
    if (hasDuplicates(hands)) {
      highestCount = []
      return highestCount
    }
  }

  return highestCount
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
