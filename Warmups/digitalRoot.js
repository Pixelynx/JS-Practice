// ***RECURSIVE*** //
//if num is less than 10; return number
  // **within function**
// else return num mod 10 to get the remainder
// divide num by 10 in mathfloor to get whole digit w/o remainder
// add mod result and math.floor result

function digital_root(num) {
  if(num < 10){
    return num;
  } else {
    return digital_root((num % 10) + Math.floor(num / 10));
  }
}

// console.log(digital_root(48))


// ***INTERATIVE*** //

// while num is >= 10; num is now helper function (digitalRootStep)
function digitalRoot(num) {
  while (num >= 10) {
    num = digitalRootStep;
  }
  return num;
}

// helper function
  // curr root num is 0
  // while num is greater than 0
  // add root to num mod 10
  // num now equals math.floor result of num divided by 10

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
     root += num % 10;
     num = Math.floor(num / 10)
  }
  return root;
}

digitalRootStep(48)
