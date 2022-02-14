const steps = 35

function uniqueWays(s){
  
  let oneStep = []
  let twoSteps = []
  //ones
  for (var i = 0; i < s; i++) {
    oneStep.push(1)
  }
  //two
  if (s%2==0) {
    for (var i = 0; i < s/2; i++) {
      twoSteps.push(2)
    }
  }else{
    let num = s-1
    for (var i = 0; i < num/2; i++) {
      twoSteps.push(2)
    }
    twoSteps.push(1)
  }

  return [oneStep, twoSteps]
}

console.log("----->",uniqueWays(steps));
