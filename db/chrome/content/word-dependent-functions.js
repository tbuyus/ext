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
 
function FreqWord(word){
 value=word;
  if(typeof(value)=="undefined"){value="#@###"+word} else {
    value=word;} 
 //   value=TidyIPA(value);} 
  wordrank=DictionaryEntryFreq(word);
  if(typeof(wordrank)=="undefined"){wordrank=1*400000} 
  if(word.match(/[a-z][a-z][a-z]*/)){value=value.replace(/\#\@\#\#\#/,"/")}
  value=value.replace(/\/pnccc/g,"pnccc");
  value=value.replace(/\#\@\#\#\#/,"");
  var mincolorval=128;
  var cutoffRank=500;
  var logcutoffRank=Math.log(cutoffRank)
  var fcolour=Math.log(wordrank)-logcutoffRank;
  var scaling=(255-mincolorval)/(13-logcutoffRank);
//  var red=mincolorval + parseInt(fcolour*scaling);
//  var green=mincolorval + parseInt(fcolour*scaling);
//  var blue=mincolorval + parseInt(fcolour*scaling);
  
  var red=255 - parseInt(fcolour*scaling);
//  var red=mincolorval + parseInt(fcolour*scaling);
  var green=mincolorval + parseInt(fcolour*scaling);
//  var blue=mincolorval + parseInt(fcolour*scaling);
  var blue=0;

  if(wordrank>=cutoffRank){value="<SPAN style=\"background-color:rgb("+red+","+green+","+blue +");\"" + " title=\"" + fcolour + "\">" + value + "</SPAN>"}

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