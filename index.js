function findMinAndRemoveSorted(myArray){
  let minNum = myArray[0]
  let minIndex = 0

  for (let i = 0; i < myArray.length; i++){
    if(myArray[i] < minNum){
      minNum = myArray[i] 
      minIndex = i
    }
  }

  myArray.splice(minIndex, 1)
  return minNum
}


function merge(firstArray, secArray){
  let sortedArray = []
  while(firstArray.length != 0 && secArray.length != 0){
    if(firstArray[0]< secArray[0]){
      sortedArray.push(findMinAndRemoveSorted(firstArray))
    }else {
      sortedArray.push(findMinAndRemoveSorted(secArray))
    }
  }
  return sortedArray.concat(firstArray).concat(secArray);
}

function mergeSort(myArray){
  let midPoint = myArray.length/2
  let fisrtHalf = myArray.slice(0,midPoint)
  let secondHalf =  myArray.slice(midPoint, myArray.length)

  if (myArray.length < 2){
    return myArray
  }else{
    return merge(mergeSort(fisrtHalf),  mergeSort(secondHalf))
  }
}