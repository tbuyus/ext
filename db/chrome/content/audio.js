 var player = Components.classes["@mozilla.org/sound;1"].createInstance(Components.interfaces.nsISound);                        
var ios = Components.classes['@mozilla.org/network/io-service;1'].getService(Components.interfaces.nsIIOService);    

function speak(event) {
     theId=event.target.id;
    theSound=theId.substr(3);
    var phoneme = ios.newURI('chrome://db/content/sounds/' + theSound +'.wav', null, null);     
    player.init();
    player.play(phoneme);
   }
