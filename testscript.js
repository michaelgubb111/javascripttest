const testcode = (code1, useDebugger) => {
  if (useDebugger){
    debugger;
  }
  runcode(code1);
}

const runcode = (code1) =>{


  const squareFunc = (input) => {
    return input*input;
  };
  const addOneFunc = (input) => {
    return input+1;
  };
  const returnDogFunc = (input) =>{
    return "Dog";
  };

  const myFuncArray = [squareFunc,addOneFunc,returnDogFunc];

  const myNumbers = [0,1,2,3,4,5,6,7,8,9,10];
  // doFunc: lookup function in fArray using fNumber, return function(fInput)
  const doFunc = (fArray,fInput,fNumber) => {
    if (typeof(fArray) === "function"){return fArray(fInput)};
    return fArray[fNumber](fInput);
  };

  // doAllFunc: return array of function(fInput) for all functions in fArray
  const doAllFunc = (fArray,fInput) => {
    if (typeof(fArrays) === "function"){return fArray(fInput)};
    return fArray.map(x => x(fInput));
  };

  // doFuncToAll: lookup function in fArray using fNumber, return array of function(x) for all x in fInputs
  const doFuncToAll = (fArray,fInputs,fNumber) => {
    if (typeof(fArray) === "function"){return fInputs.map(x => fArray(x))};
    return fInputs.map(x => fArray[fNumber](x));
  };

  // doAllFuncToAll1: for every x in fInputs, return array of function(x) for every function in fArray
  const doAllFuncToAll1 = (fArray,fInputs) => {
    return fInputs.map(x => doAllFunc(fArray,x));
  };

  // doAllFuncToAll2: for every function in fArray, return array of function(x) for every x in fInputs
  const doAllFuncToAll2 = (fArray,fInputs) => {
    return fArray.map(x => doFuncToAll(x,fInputs));
  };

  // Note: doAllFuncToAll1 and doAllFuncToAll2 return the same values, but structured differently

  // Pass 5 to function 0 (squareFunc)
  console.log("5 into func0",doFunc(myFuncArray,5,0));
  // Pass 5 to function 1 (addOneFunc)
  console.log("5 into func1",doFunc(myFuncArray,5,1));
  // Pass 5 to function 2 (addOneFunc)
  console.log("5 into func2",doFunc(myFuncArray,5,2));
  // Map "function(7)" to array of functions
  console.log("7 into all func",doAllFunc(myFuncArray,7));
  // Map function 0 to myNumbers
  console.log("do func 0 to all",doFuncToAll(myFuncArray,myNumbers,0));
  // Apply every function to all members of myNumbers, returns array same length as numbers, containing array of functions applied to that number
  console.log("do all func to all",doAllFuncToAll1(myFuncArray,myNumbers));
  // Apply every function to all members, returns array same length as functions, containg array of numbers passed into that function
  console.log("do all func to all",doAllFuncToAll2(myFuncArray,myNumbers));


  // Can add new function to myFuncArray
  const makeNegativeFunc = (input) => {
    return -1*input;
  }
  myFuncArray.push(makeNegativeFunc);
  console.log("do all func to all with extra function",doAllFuncToAll2(myFuncArray,myNumbers));




  //
  /*console.log("Start");
  //console.log(a);
  if (code1) {
    let a;
    console.log(a);
    //var a;
    //let a;
    a = 5;
    console.log(a);
  }
  //console.log(a);
  //var a;
  //
  //
  //
  //
  //
  //
  //
  //

  let myAnimal = "dog";
  if (myAnimal === "Dog") {
    console.log("My animal is Dog");

    
    //
    //
    //
    //
    //
    //
    //
    //
    const a = "5";
    console.log(a,a==5,a===5);


  }
  //
  if (myAnimal === "dog") {
    console.log("My animal is dog");
    let a = "5";
    console.log(a,a==5,a===5);


  }
  const b = 7;

  console.log("Finish");*/
};
