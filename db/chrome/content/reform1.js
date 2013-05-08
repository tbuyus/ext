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