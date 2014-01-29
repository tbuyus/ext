 // USED BY IPA/REFORM/ & AUGMENT FUNCTIONS - (PRONUNCIATION DEPENDENT SCHEMES)
function DictionaryEntry(word){
 
  ceys=wordCase(word);
 //   alert("Value before:="+word+"\nCeys:="+ceys);

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
 value=value.replace(/ /g,"");
 value=revertToOriginalCase(value,ceys);
//alert("Value after:="+value+"\nCeys:="+ceys);
 return value;
}

function DictionaryEntryFreq(word){
  
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
 
 return wordrank;
}

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
