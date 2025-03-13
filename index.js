function hasTargetSum(array, target) {
  // Write your algorithm here
  let startingPoint
  let startingPointTwo
  let currentIndex
  let secondIndex
  let currentNumber
  let secondNumber
  let combinedNumber

  if (array.length <= 1){
    return false
  }else {
    startingPoint = 0

    while(startingPoint < array.length){
      currentNumber = array[startingPoint]
      currentIndex = startingPoint
      startingPointTwo = 0
      while(startingPointTwo < array.length){
        secondNumber = array[startingPointTwo]
        secondIndex = startingPointTwo

        if (currentIndex !== secondIndex){
          combinedNumber = currentNumber + secondNumber
          if (combinedNumber === target){
            return true
          }
        }
          startingPointTwo++
      }
    

      startingPoint++
      if (startingPoint === array.length){
        return false
      }
    }
  }
}
/* 
  Write the Big O time complexity of your function here

  
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  First, the function checks if the provided array has at least two items in it. If not,
  the function returns false. If it does, the function then runs through two while loops.
  These while loops will take each individual number in the array and then add
  that number to each other individual number in the array one at time. The code then checks
  if the combined value is equal to the target value. If it is, the function returns true. If
  all of the possible combined values fail to return true, then the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
