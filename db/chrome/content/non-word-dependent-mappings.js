function colorblocks(text)
{  
//text=text.replace(/([A-Z])/g,  "·$1");
text=text.toLowerCase();
tit=text.toUpperCase();
text=text.replace(/([adgjmptwADGJMPTW])/g,"<#£#£#£#££#1'>$1</#£#£#£#££>");
text=text.replace(/([behknqruxyBEHKNQRUXY])/g,"<#£#£#£#££#2'>$1</#£#£#£#££>");
text=text.replace(/([cfilosvzCFILOSVZ])/g,  "<#£#£#£#££#3'>$1</#£#£#£#££>");
text=text.replace(/\#\£\#\£\#\£\#\£\£\#/g,"SPAN CLASS='SMS");
text=text.replace(/\#\£\#\£\#\£\#\£\£/g,"\SPAN");

tit=tit.replace(/\"/g,"&quot;");
text="<SPAN CLASS='SMS' TITLE=\""+tit+"\">"+text+"</SPAN>";    
          
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

 
function identifyHeteronyms(txt){
    return txt.replace(/([^ ]*)\-(\-HETERONYM\-|\-htrnym\-|heterɔnjm)\-([^ ]*)/g,"\n<button onclick=\"dv=this;dv.parentNode.removeChild(dv);\">$1</button>\n<button onclick=\"dv=this;dv.parentNode.removeChild(dv);\">$3</button>");  
	 

 } 
 
function fives(txt){
  txt=txt.replace(/^(zbde)/g,"Ò^$1");
  return txt;
}
