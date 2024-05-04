// Import the calculation function
const { calculateHand, hasPair, hasThreeOfAKind } = require('./helper')

function winningPair(firstHand, secondHand) {
  // First check if both hands are pairs
  if (hasPair(firstHand) && hasPair(secondHand)) {
    if (calculateHand(firstHand) > calculateHand(secondHand)) {
      // If firstHand has the most points, then that is the winner
      return firstHand
    } else if (calculateHand(firstHand) < calculateHand(secondHand)) {
      // If secondHand has the most points, then that is the winner
      return secondHand
    }
  } else if (hasPair(firstHand)) {
    // If firstHand is the only pair, then that is the winner
    return firstHand
  } else if (hasPair(secondHand)) {
    // If secondHand is the only pair, then that is the winner
    return secondHand
  } else {
    // If there are no pairs return []
    return (firstHand = [])
  }
}

// Extension criteria

function winningPairFromArray(hands) {
  // First we check for any pairs
  const pairsArray = []
  // Iterate throughout the hands and find the pairs
  for (let i = 0; i < hands.length; i++) {
    // Add the pairs to the array
    if (hasPair(hands[i])) {
      pairsArray.push(hands[i])
    }
  }
  // If the array has more than one value, calculate the winner
  if (pairsArray.length > 1) {
    let winnerHand = []
    // Iterate throughout the array
    for (let i = 0; i < pairsArray.length; i++) {
      // Find the winner!
      const numberHand = calculateHand(pairsArray[i])
      if (numberHand > calculateHand(winnerHand)) {
        winnerHand = pairsArray[i]
      }
    }
    return winnerHand
  }
  // If the array does not have more than one value
  // return the value that is there
  return pairsArray
}

function winning3CardHand(hands) {
  // First we check for any pairs
  let threeArray
  const pairsArray = []
  // Iterate throughout the hands and find the pairs
  for (let i = 0; i < hands.length; i++) {
    // Check if the hand has 3 cards
    if (hands[i].length > 2) {
      // Check if the hand has three of a kind
      if (hasThreeOfAKind(hands[i])) {
        threeArray = hands[i]
      }
    } else {
      // Check if the hand has a pair
      if (hasPair(hands[i])) {
        pairsArray.push(hands[i])
      }
    }
  }
  // Return three of a kind if there are any
  if (threeArray) {
    return threeArray
  }
  // Calculate pairs
  if (pairsArray.length > 1) {
    let winnerHand = []
    // Iterate throughout the array
    for (let i = 0; i < pairsArray.length; i++) {
      // Find the winner!
      const numberHand = calculateHand(pairsArray[i])
      if (numberHand > calculateHand(winnerHand)) {
        winnerHand = pairsArray[i]
      }
    }
    return winnerHand
  }
  // If the array does not have more than one value
  // return the value that is there
  return pairsArray
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
