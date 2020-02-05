function calculateHandler(event) {
  // read & process user input from event
  var a = parseInt(document.querySelector("#value1"));
  var b = parseInt(document.querySelector("#value2"));
  var op = document.querySelector("#operator").value;
  
  // pass user input through core logic
    doMath(op,a,b);
  // render output to DOM for user

  // log user action for developers

  // return true for the browser
  return true;
}
