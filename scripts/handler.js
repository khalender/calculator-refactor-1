function calculateHandler(event) {
  
  // read & process user input from event
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  console.log(a)
  // pass user input through core logic
    let res = doMath(op,a,b);
  // render output to DOM for user
  document.querySelector("#result").innerHTML = res;
  // log user action for developers
  // return true for the browser
  return true;
}
