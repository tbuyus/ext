 
//IS THIS REALLY THE MOST EFFICIENT WAY TO ACHIEVE THIS?
function revertToOriginalCase(lcword,wcase){
    //alert("hi from revert to Originall Case\nlcword:= " + lcword + "\nwcase:= " + wcase);
    wordlength=lcword.length;
    switch (wcase)
        {
         case "uppercase":
          word=lcword.toUpperCase();
          return(word);
          break
         case "titlecase": 
          letter1=lcword.charAt(0);
          letter1Upper=letter1.toUpperCase();
	 
          rest=lcword.substr(1,wordlength-1);
          word=letter1Upper+rest;
//	  alert("titlecase"+"\nletter1:="+letter1+"\nletter1Upper;="+letter1Upper+"rest:="+rest+"\nword:="+word);
          return(word);
          break
         default:
          word=lcword;
          return(word);
        }

}

//IS THIS REALLY THE MOST EFFICIENT WAY TO ACHIEVE THIS?
function wordCase(t){
   // alert("hi from word case");
  output="not sure yet";
  tlength=t.length;
  firstletter=t.charAt(0);
  lastletter=t.charAt(tlength-1);
  if(firstletter.match(/[A-Z]/)){
    output="uppercase";
    if (tlength > 1){if (lastletter.match(/[a-z]/)){ output="titlecase"}}
  }
  else output="lowercase";
//alert(output);
 if(firstletter=="&"){output="titlecase"}
return (output);
}



