 function augmentWord(word){
  value=DictionaryEntry(word);
  //alert("func\tDictionaryEntry\n param words= " + word);
 
  if(typeof(value)=="undefined"){value="#@###"+word} else {
        if(!(layout=='db-InverseGlossLayout')){value=removeShit(greySilentLetters(addSuperScripts(value)));}
          }
  //if(typeof(wordrank)=="undefined"){wordrank=1*400000} 
  if(word.match(/[a-z][a-z][a-z]*/)){value=value.replace(/\#\@\#\#\#/,"/")}
  value=value.replace(/\/pnccc/g,"pnccc");
  value=value.replace(/\#\@\#\#\#/,"");
  return(value);
 }
 
 
 function IPAWord(word){
  value=DictionaryEntry(word);
  if(typeof(value)=="undefined"){value="#@###"+word} else {
   value=TidyIPA(value);}
  if(typeof(wordrank)=="undefined"){wordrank=1*400000} 
  if(word.match(/[a-z][a-z][a-z]*/)){value=value.replace(/\#\@\#\#\#/,"/")}
  value=value.replace(/\/pnccc/g,"pnccc");
  value=value.replace(/\#\@\#\#\#/,"");

  // alert(word+":="+value);
  statement.reset; 
  return(value);
 }

 function ReformWord(word){
 value=DictionaryEntry(word);
  if(typeof(value)=="undefined"){value="#@###"+word} else {
    value=TidyTobsScheme(value);} 
 //   value=TidyIPA(value);} 
  if(typeof(wordrank)=="undefined"){wordrank=1*400000} 
  if(word.match(/[a-z][a-z][a-z]*/)){value=value.replace(/\#\@\#\#\#/,"/")}
  value=value.replace(/\/pnccc/g,"pnccc");
  value=value.replace(/\#\@\#\#\#/,"");

  // alert(word+":="+value);
  statement.reset; 
  return(value);
 }