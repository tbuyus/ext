function TidyTobsSchemeold(t){
   t = t.toLowerCase();
  // t = t.replace(/k/gi,"c");
  // t = t.replace(/x/gi,"ks");
   t = t.replace(/[áéíóúÁÉÍÓÚ]/g,"u");
  // t = t.replace(/[àèìòùħÀÈÌÒÙĦ]/g,"");
  // t = t.replace(/[^0-9]0/g,"");
  // t = t.replace(/û/gi,"yw");
  // t = t.replace(/[őŐ]/g,"u");
  // t = t.replace(/x/gi,"u");
  // t = t.replace(/ã/g,"e");
  // t = t.replace(/r#/g,"r");
  //t=t.replace(/[^ !]*\!/g,"");
  //t=t.replace(/(.)\1/g,"$1");

  // t = t.replace(/[âÂ]/g,"y");
  // t = t.replace(/[õÕ]/g,"w");
  // t = t.replace(/ô/g,"w");
  // t = t.replace(/ė/g,"u");
  // t = t.replace(/[ï]/g,"y");
  // t = t.replace(/[ōū]/gi,"uu");
  // t = t.replace(/[ŷ]/gi,"iy");
  // t = t.replace(/ŕ/gi,"γ");
  // t = t.replace(/å/g,"oγ");
  // t = t.replace(/öü/g,"oo");
  // t = t.replace(/[öüë]/g,"oo");
  // t = t.replace(/ð/gi,"t");
  // t = t.replace(/τ/gi,"th");
  // t = t.replace(/ҭ/gi,"tth");
  // t = t.replace(/q/gi,"c");
  // t = t.replace(/ś/gi,"z");
  // t = t.replace(/ç/gi,"s");
  // t = t.replace(/ā/gi,"γ");
  // t = t.replace(/ĝ/gi,"j");
  // t = t.replace(/y/gi,"y");
  // t = t.replace(/ñ/gi,"ng");
  // t = t.replace(/ƒ/gi,"v");
  // t = t.replace(/þ/ig,"f");

  // t = t.replace(/([$ţ])/gi,"sh");
  //return t.replace(/([¢ť])/gi,"ch");
  
  return t;
}
