
var currentLowerCutoff=0;
var currentUpperCutoff=200000;



function doScheme(scheme){
beforewebpage="hello";
//alert("the scheme you chose was"+scheme);

loadedWebPage=  window.opener.content.document;
//alert(loadedWebPage.documentElement.innerHTML + "\n\n new web page" + beforewebpage); 

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
     case "db-Freq"         :
          parseTextNodes(loadedWebPage,FreqWord,1);
          break;                          
     case "db-Raw"         :
          parseTextNodes(loadedWebPage,RawWord,1);
          break;                          
      case "db-Blocks"         :
          addfont(smsfontdata);
          parseTextNodes(loadedWebPage,colorblocks,0);
          break;                          
                          }
schemeIndex=document.getElementById('db-Scheme').selectedIndex;
layoutIndex=  document.getElementById('db-Layout').selectedIndex;
//alert(loadedWebPage.documentElement.innerHTML + "\n\n new web page" + beforewebpage); 

//prompt("tags",loadedWebPage.documentElement.innerHTML);
//alert("DOSCHEME thinks schemeIndex and layoutIndex are:=" + schemeIndex + ", and " + layoutIndex +" respectively"); 
currentLowerCutoff=lowercutoff;
currentUpperCutoff= uppercutoff;
}

function xpath(query) {return content.document.evaluate(query, document, null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);} //REDUNDANT CODE OR FOR FUTURE MODULARISATION?




function go(){
  //window.opener.content.document.location.reload();
  //alert("GO THINKS scheme index is=" + schemeIndex);
  document.getElementById('db-Scheme').selectedIndex = schemeIndex;
  return newvalue;

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



