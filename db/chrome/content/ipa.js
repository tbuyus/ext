function TidyIPA(t){
  ipa="əɛɪɔɑʃʧʤɵʊʌːɳæ";
  aug="âãåðñõöüėŕőśçþÞþêïɥîôûōūø";
  aug2="ÀÈÌÒÙ ÁÉÍÓÚ ÊÂÎÔÛ Ã Å Æ Ç Ë ÖÜ  Ï Ñ Õ  Ő Ŕ";
  t=t.toLowerCase();
  t= t.replace(/[áéíóúÁÉÍÓÚ]/g,"ɘ");
  t= t.replace(/[àèìòùħÀÈÌÒÙĦ]/g,"");
  t= t.replace(/[^0-9]0/g,"");

  t= t.replace(/[ãE]/g,"e");
  t= t.replace(/r#/g,"r");
  t=t.replace(/[^ !]*\!/g,"");
  t=t.replace(/(.)\1/g,"$1");
   t= t.replace(/a/gi,"æ");
  t= t.replace(/[uőŐU]/g,"ʌ");
  t= t.replace(/öü/g,"uː");
  t= t.replace(/[âÂ]/g,"eɪ");
  t= t.replace(/[õÕ]/g,"aʊ");
  t= t.replace(/[ôÔ]/g,"əʊ");
   t= t.replace(/[iėIųŲ]/g,"ɪ");
  t= t.replace(/[êïɥÊÏ]/g,"iː");
  t= t.replace(/[oO]/g,"ɔ");
  t= t.replace(/[ōū]/gi,"ʊ");
  t= t.replace(/[îŷ]/gi,"aɪ");
  t= t.replace(/ŕ/gi,"ɛː");
  t= t.replace(/ø/g,"ɔː");
  t= t.replace(/[öüë]/g,"uː");
  t= t.replace(/û/gi,"juː");
  t= t.replace(/ð/gi,"t");
  t= t.replace(/τ/gi,"ð");
  t= t.replace(/ҭ/gi,"ɵ");
  t= t.replace(/c/gi,"k");
  t= t.replace(/q/gi,"k");
  t= t.replace(/ǔ/gi,"w");
  t= t.replace(/å/gi,"ɔː");
  t= t.replace(/ś/gi,"z");
  t= t.replace(/ç/gi,"s");
  t= t.replace(/ŝ/gi,"ʒ");
  t= t.replace(/ā/gi,"ɑː");
  t= t.replace(/ĝ/gi,"dʒ");
  t= t.replace(/y/gi,"j");
  t= t.replace(/ñ/gi,"ɳ");
  t= t.replace(/x/gi,"ks");
  t= t.replace(/ƒ/gi,"v");
  t= t.replace(/ñ/ig,"ɳ");
  t= t.replace(/þ/ig,"f");
  t= t.replace(/ŏ/g,"ɔɪ");
//  t= t.replace(/ñ/g,"ɳ");
  t= t.replace(/([$ţć])/gi,"ʃ");
  return t.replace(/([¢ť])/gi,"ʧ");
}

//function TidyTobsScheme(t){
//  console.log(t);
//  return t.replace(/e/xxx/gi);
//}
