function TidyTobsScheme(t){
   t = t.toLowerCase();
        t = t.replace(/tt/gi,"t");
        t = t.replace(/pp/gi,"p");
        t = t.replace(/ff/gi,"f");
        t = t.replace(/mm/gi,"m");
        t = t.replace(/ss/gi,"s");
        t = t.replace(/ll/gi,"l");


     t = t.replace(/c/gi,"c");
     t = t.replace(/x/gi,"ks");
     t = t.replace(/ã/g,"e");
     t = t.replace(/[ė]/g,"i");
     t = t.replace(/y/g,"Y");
     t = t.replace(/[wǔ]/g,"W");
 
     t = t.replace(/[őŐ]/g,"u");
     t = t.replace(/[áéíóúÁÉÍÓÚ]/g,"x");
   
    // t = t.replace(/[^$][àèìòùħÀÈÌÒÙĦ]/g,"");
     t = t.replace(/[^0-9]0/g,"");
     t = t.replace(/û/gi,"yw"); 
     t= t.replace(/ŕ/gi,"r");
 
     t = t.replace(/r#/g,"r");
  //t=t.replace(/[^ !]*\!/g,"");
  //t=t.replace(/(.)\1/g,"$1");
   t = t.replace(/êê/g,"y");
   t = t.replace(/[îŷ]/g,"y");
     t = t.replace(/[âÂ]/g,"y");
     t = t.replace(/[õÕ]/g,"w");
     t = t.replace(/ô/g,"w");
      t = t.replace(/[ïêɥ]/g,"y");
     t = t.replace(/ōū/g,"");
    t = t.replace(/[ōū]/gi,"");
   //  t = t.replace(/[ŷ]/gi,"ui");
   //  t = t.replace(/ŕ/gi,"er");
     t = t.replace(/å/g,"o");
     t = t.replace(/öö/g,"w");
     t = t.replace(/öü/g,"w");
     t = t.replace(/[öüë]/g,"w");
     t = t.replace(/ǒ/gi,"y");
    t = t.replace(/ð/gi,"t");
     t = t.replace(/τ/gi,"th");
     t = t.replace(/τ/gi,"th");
     
     t = t.replace(/ҭ/gi,"Ϯh");
     t = t.replace(/qu/gi,"kW");
     t = t.replace(/ś/gi,"z");
     t = t.replace(/ç/gi,"s");
     t = t.replace(/ā/gi,"α");
     t = t.replace(/ĝ/gi,"j");
     t = t.replace(/ñ/gi,"ng");
     t = t.replace(/ƒ/gi,"v");
     t = t.replace(/þ/ig,"f");

     t = t.replace(/([ţćŝ])/gi,"sh");
    t = t.replace(/shsh/gi,"sh");
    t = t.replace(/w/g,"ŵ");
      t = t.replace(/W/g,"w");
      t = t.replace(/Y/g,"ý");
      t = t.replace(/([ĉť])/gi,"ch"); 
      t = t.replace(/([^ ])[xaeiouųøAEIOUàèìòùħÀÈÌÒÙĦ]/g,"$1");
  
     
  return      t.replace(/([^ ])[xaeiouųøAEIOUàèìòùħÀÈÌÒÙĦ]/g,"$1");

  
  
}