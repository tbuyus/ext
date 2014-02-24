function TidyTobsScheme(t){
     ceys=wordCase(t);
     i=t;
     t = t.toLowerCase();
     t = t.replace(/ /g,"");
     t=t.replace(/[a-zãėųőōūêïýâîŷöüëûôõŕāøåðĉťĝþçŝţπτśĩñυáéíóú]0/g,"");
     
       t = t.replace(/^muy$/g,"m"); 

       t = t.replace(/^m[ŷê]$/g,"m"); 
       t = t.replace(/^iś$/g,"z");       
	t = t.replace(/^had$/g,"d");
	t = t.replace(/^of\!uv$/g,"v"); 
       t = t.replace(/^and$/g,"n"); 
       t = t.replace(/^î$/g,"I"); 
       t = t.replace(/^før\#$/g,"f"); 
        t = t.replace(/^hê$/g,"e"); 
        t = t.replace(/^bê$/g,"b"); 
        t = t.replace(/^can$/g,"C"); 
         t = t.replace(/^was\!woś$/g,"w"); 
         t = t.replace(/^havè$/g,"h"); 
         t = t.replace(/^just$/g,"j"); 
         t = t.replace(/^pūt$/g,"p"); 
         t = t.replace(/^ārè$/g,"r"); 
         t = t.replace(/^ŝħê$/g,"s"); 
         t = t.replace(/^tö$/g,"t"); 
         t = t.replace(/^up$/g,"u"); 
         t = t.replace(/^yöù$/g,"y"); 
         t = t.replace(/^lîkè$/g,"l"); 
        t = t.replace(/^cōùd$/g,"k"); 
        t = t.replace(/^get$/g,"g"); 
        t = t.replace(/^ør\#$/g,"or"); 
   
     
     t = t.replace(/ār/g,"r");
     t = t.replace(/ā/g,"r");
     t = t.replace(/ør/g,"r");
     t = t.replace(/ø/g,"r");
     
     
     t = t.replace(/c/g,"k");
     t = t.replace(/x/g,"ks");
     t = t.replace(/ã/g,"e");
     t = t.replace(/[ėų]/g,"i");
     t = t.replace(/y/g,"Y");
     t = t.replace(/[wǔ]/g,"W");
 
     t = t.replace(/[őŐ]/g,"u");
     t = t.replace(/[á]/g,"a");
     t = t.replace(/[í]/g,"i");
     t = t.replace(/[é]/g,"e");
     t = t.replace(/[ó]/g,"o");
     t = t.replace(/[ú]/g,"u");
     t = t.replace(/[Á]/g,"A");
     t = t.replace(/[É]/g,"E");
     t = t.replace(/[Í]/g,"I");
     t = t.replace(/[Ó]/g,"O");
     t = t.replace(/[Ú]/g,"U");


   
//     t = t.replace(/([^$])[àèìòùÀÈÌÒÙ]/g,"$1");
     t = t.replace(/û/g,"yw"); 
     t= t.replace(/ŕ/g,"ur");
 
     t = t.replace(/r#/g,"r");
     t=t.replace(/[^ !]*\!/g,"");
  //t=t.replace(/(.)\1/g,"$1");
   t = t.replace(/[êýï]/g,"iy");
   t = t.replace(/[îŷ]/g,"uy");
     t = t.replace(/[âÂ]/g,"ey");
     t = t.replace(/[õÕ]/g,"aw");
     t = t.replace(/ô/g,"uw");
     t = t.replace(/ōū/g,"u");
    t = t.replace(/[ōū]/g,"u");
   //  t = t.replace(/[ŷ]/g,"ui");
   //  t = t.replace(/ŕ/g,"er");
     t = t.replace(/å/g,"o");
     t = t.replace(/öö/g,"ew");
     t = t.replace(/öü/g,"ew");
     t = t.replace(/[öüë]/g,"ew");
     t = t.replace(/[ǒσ]/g,"oy");
    t = t.replace(/ð/g,"t");
     t = t.replace(/τ/g,"dh");
     
     t = t.replace(/π/g,"th");
     t = t.replace(/qυ/g,"kW");
     t = t.replace(/q/g,"k");
     t = t.replace(/ś/g,"z");
     t = t.replace(/ç/g,"s");
     t = t.replace(/ā/g,"α");
     t = t.replace(/ĝ/g,"j");
     t = t.replace(/ñ/g,"q");
     t = t.replace(/ƒ/g,"v");
     t = t.replace(/þ/ig,"f");

     t = t.replace(/([ţćŝ])/g,"sh");
    t = t.replace(/shsh/g,"sh");
    t = t.replace(/w/g,"w");
      t = t.replace(/[Wυ]/g,"w");
      t = t.replace(/[Yŏĩ]/g,"y");
      t = t.replace(/C/g,"c");

      t = t.replace(/([ĉť])/g,"ch"); 
      t=t.replace(/[àèìòùħ]/g,"");

       front=t.substring(0,1);
       rest=t.substring(1);
       rest=rest.replace(/[àèìòùħaeiou#]/g,"");
       f=front+rest;
       
      f=revertToOriginalCase(f,ceys);
     
  return      f;

  
  
}