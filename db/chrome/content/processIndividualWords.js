function processIndividualWords(somewords,func)
{ 
//need to cater for mouse glossing
//  alert("func\tprocessIndividualWords\n param somewords= " +somewords);
//  console.log("func\tprocessIndividualWords\t param somewords= " +somewords);
 
  somewords=somewords.replace(/[a-zA-Z][a-zA-Z0]*/g,func);
  return somewords;
}