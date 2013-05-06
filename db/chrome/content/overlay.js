var player = Components.classes["@mozilla.org/sound;1"].createInstance(Components.interfaces.nsISound);                        
var ios = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService);    

var currentLowerCutoff=0;
var currentUpperCutoff=200000;

function speak(event) {
     theId=event.target.id;
    theSound=theId.substr(3);
    var phoneme = ios.newURI('chrome://db/content/sounds/' + theSound +'.wav', null, null);     
//   var phoneme = ios.newURI('http://www-mmsp.ece.mcgill.ca/documents/audioformats/wave/Samples/AFsp/M1F1-uint8-AFsp.wav', null, null);     
    player.init();
    player.play(phoneme);
   }

function doScheme(scheme){
beforewebpage="hello";
//alert("the scheme you chose was"+scheme);
loadedWebPage=  window.opener.content.document;
lowercutoff= document.getElementById("db-LowerCutOff");
uppercutoff= document.getElementById("db-UpperCutOff");
 
switch(scheme){
     case "db-Augment" : 
         parseTextNodes(loadedWebPage,augmentWord,1);
         break;
      case "db-IPA"           :
         parseTextNodes(loadedWebPage,IPAWord,1);
         break;
      case "db-NoVowels" :
         parseTextNodes(loadedWebPage,removeInternalVowels,1);
           break;
     case "db-Tobs"         :
          parseTextNodes(loadedWebPage,ReformWord,1);
          break;                          
      case "db-Blocks"         :
          addfont(smsfontdata);
          parseTextNodes(loadedWebPage,colorblocks,0);
          break;                          
                          }
schemeIndex=document.getElementById('db-Scheme').selectedIndex;
layoutIndex=  document.getElementById('db-Layout').selectedIndex;
//alert(loadedWebPage.documentElement.innerHTML + "\n\n old web page" + beforewebpage); 

//prompt("tags",loadedWebPage.documentElement.innerHTML);
//alert("DOSCHEME thinks schemeIndex and layoutIndex are:=" + schemeIndex + ", and " + layoutIndex +" respectively"); 
currentLowerCutoff=lowercutoff;
currentUpperCutoff= uppercutoff;
}

function xpath(query) {return content.document.evaluate(query, document, null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);} //REDUNDANT CODE OR FOR FUTURE MODULARISATION?

function colorblocks(text){  
text=text.replace(/([A-Z])/g,  "·$1");
text=text.toLowerCase();
tit=text.toUpperCase();
text=text.replace(/([adgjmptw])/g,"<SPAN CLASS='SMS1'>$1</SPAN>");
text=text.replace(/([behknqruxy])/g,"<SPAN CLASS='SMS2'>$1</SPAN>");
text=text.replace(/([cfilosvz])/g,  "<SPAN CLASS='SMS3'>$1</SPAN>");
text="<SPAN CLASS='SMS' TITLE='"+tit+"'>"+text+"</SPAN>";    
          
return text;
  }

function removeInternalVowels(t){return t.replace(/([^ ])([aeiou][aeiou]*)/gi,"$1");}

// USED BY IPA/REFORM/ & AUGMENT FUNCTIONS - (PRONUNCIATION DEPENDENT SCHEMES)
function DictionaryEntry(word){
  
  ceys=wordCase(word);
  word=word.toLowerCase();
  value=word;
   
//  alert("func\tDictionaryEntry\n param words= " + word);
//  console.log("func\tprocessIndividualWords\t param somewords= " +somewords);

  var statement =mDBConn.createStatement("SELECT * FROM dictionary where tradspell=?1");
  statement.bindUTF8StringParameter(0, word);
  
  while (statement.executeStep()) {
          var value =statement.getString(1);
          var wordrank=statement.getString(2); // use the correct function!
  }
  
  if(wordrank < lowercutoffno){value=word}      //MAYBE THIS FILTERING MIGHT BE BETTER BEFORE
  if(wordrank > uppercutoffno){value=word}      //CALLING THE DATABASE TO REDUCE TIME?
 statement.reset;
 
 value=revertToOriginalCase(value,ceys);
 
 return value;
}

function augmentWord(word){
  value=DictionaryEntry(word);
  //alert("func\tDictionaryEntry\n param words= " + word);
 
  if(typeof(value)=="undefined"){value="#@###"+word} else {
        if(!(layout=='db-InverseGlossLayout')){value=removeShit(addSuperScripts(greySilentLetters(value)));}
          }
  //if(typeof(wordrank)=="undefined"){wordrank=1*400000} 
  if(word.match(/[a-z][a-z][a-z]*/)){value=value.replace(/\#\@\#\#\#/,"/")}
  value=value.replace(/\/pnccc/g,"pnccc");
  value=value.replace(/\#\@\#\#\#/,"");
  return(value);
 }

function go(){
  //window.opener.content.document.location.reload();
  //alert("GO THINKS scheme index is=" + schemeIndex);
  document.getElementById('db-Scheme').selectedIndex = schemeIndex;
  return newvalue;

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
function TidyTobsScheme(t){
   t = t.toLowerCase();
     t = t.replace(/c/gi,"k");
     t = t.replace(/x/gi,"eks");
   t = t.replace(/[áéíóúÁÉÍÓÚ]/g,"c");
     t = t.replace(/[àèìòùħÀÈÌÒÙĦ]/g,"");
     t = t.replace(/[^0-9]0/g,"");
     t = t.replace(/û/gi,"yew");
     t = t.replace(/[őŐ]/g,"u");
     t = t.replace(/x/gi,"u");
     t = t.replace(/ã/g,"e");
     t = t.replace(/r#/g,"r");
  //t=t.replace(/[^ !]*\!/g,"");
  //t=t.replace(/(.)\1/g,"$1");
   t = t.replace(/[êê]/g,"ii");
   t = t.replace(/[î]/g,"ui");
     t = t.replace(/[âÂ]/g,"ei");
     t = t.replace(/[õÕ]/g,"cw");
    // t = t.replace(/ô/g,"O");
     t = t.replace(/ė/g,"i");
     t = t.replace(/[ïê]/g,"ii");
     t = t.replace(/ōū/g,"uu");
    t = t.replace(/[ōū]/gi,"uu");
   //  t = t.replace(/[ŷ]/gi,"ui");
     t = t.replace(/ŕ/gi,"er");
     t = t.replace(/å/g,"or");
     t = t.replace(/öü/g,"oo");
     t = t.replace(/[öüë]/g,"oo");
     t = t.replace(/oooo/g,"oo");
    t = t.replace(/ð/gi,"t");
     t = t.replace(/τ/gi,"th");
     t = t.replace(/ҭ/gi,"thh");
     t = t.replace(/qu/gi,"kw");
     t = t.replace(/ś/gi,"z");
     t = t.replace(/ç/gi,"s");
     t = t.replace(/ā/gi,"ar");
     t = t.replace(/ĝ/gi,"j");
     t = t.replace(/y/gi,"y");
     t = t.replace(/ñ/gi,"ng");
     t = t.replace(/ƒ/gi,"v");
     t = t.replace(/þ/ig,"f");

     t = t.replace(/([$ţćŝ])/gi,"sh");
    t = t.replace(/shsh/gi,"sh");
     
  return t.replace(/([¢ť])/gi,"ch");
  
  
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
          letter1=letter1.toUpperCase();
          rest=lcword.substr(1,wordlength-1);
          word=letter1+rest;
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

// FOLLOWING FORMATING FUNCTIONS CAN COLLIDE IN SUPERSCRIPTED WORDS CONTAINING SILENT LETTERS
function greySilentLetters(txt){
            return txt.replace(/([a-zA-Z])0/g,"<font color=\"gray\">$1<\/font>");
}
function addSuperScripts(txt){
      return txt.replace(/[!]([^ ]*)/g,"<sup>$1</sup>");      
}  

//HAVENT DECIDED HOW TO COPE WITH AMERICAN/BRITISH  PRONUCIATION  DIFFERENCES
// MAYBE I COULD HAVE A RHOTIC/ NON-RHOTIC DIALECT SWITCH AND REMOVE TRAILING R
// FOR NON RHOTIC DIALECTS (LIKE BBC ENGLISH - RECIEVED PRONUNCIATION)
// THERE ARE OTHER UNRESOLVED SIMILAR DECISIONS TO BE MADE OVER 
// 'POT' 'FATHER'  NEED TO SWOTT UP ON THESE DIALECT ISSUES PERHAPS?
// BELOW IS IGNORING 'OR' DIALECT 'DICHOTAMIES' I THINK, BLAH BLAH
// OR KEEP EVERYTHING RHOTIC AND RELY ON NATIVE SPEAKER AURAL INSTINCTS
// TO DROP THIS TRAILING 'R'

function removeShit(txt){
    txt = txt.replace(/o\#/g,"o");
     return txt.replace(/(ør?)\#/g,"$1");

 }

function ResetMenus()
{
 schememenu=document.getElementById("db-Scheme");
 schememenu.setAttribute("disabled","false");
 optionsmenu=document.getElementById("db-Options");
 optionsmenu.setAttribute("disabled","false");
}

function doNothing(t){

return t;
}

// THINK ALL BELOW IS NECESSARY TO ACCESS SQLLITE TABLE THAT CONTAINS LOOKUP TABLE
// MAYBE THE MOZILLA FRAME WORK HAS A BETTER DATA-STRUCTURE TO PUT THIS
// 100k ENTRY TABLE, BUT i COULDNT FIND ONE.
// 2008 THE JAVASCRIPT ASSOCIATIVE ARRAYS WERE CRAPPING OUT AT ABOUT
// 4000 ENTRIES - NOT SURE IF HTML5 LOCAL-STORAGE IS WORTH THINKING ABOUT
// IS THIS EVEN CROSS-DOMAIN USABLE, AND MAYBE BROWSER JAVASCRIPT HAS MOVED 
// ON AND THIS COULD NOW GO IN A JAVASCRIPT ASSOCIATIVE ARRAY (NOW - SPRING 2013 ).

var file = Components.classes["@mozilla.org/file/directory_service;1"]
                    .getService(Components.interfaces.nsIProperties)
                    .get("ProfD", Components.interfaces.nsIFile);
file.append("extensions");
file.append("db@toby");
file.append("spell.sqlite");

var storageService = Components.classes["@mozilla.org/storage/service;1"]
                       .getService(Components.interfaces.mozIStorageService);
var mDBConn = storageService.openDatabase(file);
var statement = mDBConn.createStatement("SELECT * FROM dictionary where tradspell=?1");

