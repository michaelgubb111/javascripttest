const testcode = (code1, useDebugger) => {
  if (useDebugger){
    debugger;
  }
  runcode(code1);
}

const runcode = (code1) =>{
  // If using debugger and stepping into maps, adding watches for: x, f and fArray could be helpful

  // Create functions to use
  const squareFunc = (input) => {
    return input*input;
  };
  const addOneFunc = (input) => {
    return input+1;
  };
  const returnDogFunc = (input) =>{
    return "Dog";
  };
  
  // Array of functions
  const myFuncArray = [squareFunc,addOneFunc,returnDogFunc];
  // Array of numbers to pass into functions
  const myNumbers = [0,1,2,3,4,5,6,7,8,9,10,500];
  // doFunc: lookup function in fArray using fNumber, return function(singleInput)
  const doFunc = (fArray,singleInput,fNumber) => {
    if (typeof(fArray) === "function"){return fArray(singleInput)}; // If function instead of array passed in evaluate function
    return fArray[fNumber](singleInput);
  };

  // doAllFunc: return array of function(singleInput) for all functions in fArray
  const doAllFunc = (fArray,singleInput) => {
    if (typeof(fArray) === "function"){return fArray(singleInput)}; // If function instead of array passed in evaluate function
    return fArray.map(f => f(singleInput));
  };

  // doFuncToAll: lookup function in fArray using fNumber, return array of function(x) for all x in arrayInputs
  const doFuncToAll = (fArray,arrayInputs,fNumber) => {
    if (typeof(fArray) === "function"){return arrayInputs.map(x => fArray(x))}; // If function instead of array passed in evaluate function
    return arrayInputs.map(x => fArray[fNumber](x));
  };

  // doAllFuncToAll1: return array: for every x in arrayInputs, array of function(x) for every function in fArray
  const doAllFuncToAll1 = (fArray,arrayInputs) => {
    return arrayInputs.map(x => doAllFunc(fArray,x));
  };

  // doAllFuncToAll2: return array: for every function in fArray, array of function(x) for every x in arrayInputs
  const doAllFuncToAll2 = (fArray,arrayInputs) => {
    return fArray.map(f => doFuncToAll(f,arrayInputs));
  };

  // Note: doAllFuncToAll1 and doAllFuncToAll2 return the same values, but structured differently
  // i.e. A[i][j] === B[j][i] if A = doAllFuncToAll1(f,data) and B = doAllFuncToAll2(f,data)

  // Pass 5 to function 0 (squareFunc)
  console.log("5 into func0 using doFunc then directly",doFunc(myFuncArray,5,0),squareFunc(5));
  // Pass 5 to function 1 (addOneFunc)
  console.log("5 into func1 using doFunc then directly",doFunc(myFuncArray,5,1),addOneFunc(5));
  // Pass 5 to function 2 (addOneFunc)
  console.log("5 into func2 using doFunc then directly",doFunc(myFuncArray,5,2),returnDogFunc(5));
  // Map "function(7)" to array of functions
  console.log("7 into all func",doAllFunc(myFuncArray,7));
  // Map function 0 to myNumbers
  console.log("do func 0 to all",doFuncToAll(myFuncArray,myNumbers,0));
  // Apply every function in myFuncArray to all members of myNumbers, returns array same length as MyNumbers, each element is array (length myFuncArray) of results of functions applied to a specific number
  console.log("do all func to all type 1",doAllFuncToAll1(myFuncArray,myNumbers));
  // Apply every function in myFuncArray to all members of myNumbers, returns array same length as myFuncArray, each element is array (length MyNumbers) of results of numbers passed into a specific function
  console.log("do all func to all type 2",doAllFuncToAll2(myFuncArray,myNumbers));
  // Show how doAllFuncToAll1 and doAllFuncToAll2 return the same value with swapped indices
  console.log("type1[7][0] and type2[0][7]",doAllFuncToAll1(myFuncArray,myNumbers)[7][0],doAllFuncToAll2(myFuncArray,myNumbers)[0][7]);

  // Can add new function to myFuncArray
  const makeNegativeFunc = (input) => {
    return -1*input;
  }
  myFuncArray.push(makeNegativeFunc);

  console.log("do all func to all with extra function",doAllFuncToAll2(myFuncArray,myNumbers));

  // Can filter 
  console.log("filter results for input numbers that when squared are greater than 6 and less than 50", doAllFuncToAll1(myFuncArray,myNumbers).filter( x => {
      if((x[0] > 6)&&(x[0] < 50)){return true};
        return false;
  }));

  // Using slice in map to do the same for type2 (indices hard coded, more steps required to find indices with code)
  console.log("filter results (using slice and indices) for input numbers that when squared are greater than 6 and less than 50", doAllFuncToAll2(myFuncArray,myNumbers).map(x => x.slice(3,-3)))

};
