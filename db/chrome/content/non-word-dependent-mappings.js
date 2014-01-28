function colorblocks(text)
{  
text=text.replace(/([A-Z])/g,  "·$1");
text=text.toLowerCase();
tit=text.toUpperCase();
text=text.replace(/([adgjmptw])/g,"<SPAN CLASS='SMS1'>$1</SPAN>");
text=text.replace(/([behknqruxy])/g,"<SPAN CLASS='SMS2'>$1</SPAN>");
text=text.replace(/([cfilosvz])/g,  "<SPAN CLASS='SMS3'>$1</SPAN>");
text="<SPAN CLASS='SMS' TITLE='"+tit+"'>"+text+"</SPAN>";    
          
return text;
  }

function removeInternalVowels(t)
{
return t.replace(/([^ ])([aeiou][aeiou]*)/gi,"$1");
}

function greySilentLetters(txt){
            txt=txt.replace(/([^0-9,])0/g,"<font color=\"gray\">$1<\/font>");
            return txt.replace(/([àèìòùħ])/g,"<font color=\"gray\">$1<\/font>");
}
function addSuperScripts(txt){
      return txt.replace(/[!]([^ ]*)/g,"<sup>$1</sup>");      
}

function removeShit(txt){
    txt = txt.replace(/o\#/g,"o");  //tomeytoe/tomartoe DIALECT WOES
         txt = txt.replace(/\#/g,""); 
	 return txt.replace(/(ør?)\#/g,"$1");

 }
 
function fives(txt){
  txt=txt.replace(/^(zbde)/g,"Ò^$1");
  return txt;
}
