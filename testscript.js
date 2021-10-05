const testcode = (code1, useDebugger) => {
  if (useDebugger){
    debugger;
  }
  runcode(code1);
}

const runcode = (code1) =>{
  console.log("Start");
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


  console.log("Finish");
};
