function TidyTobsScheme(t){
     ceys=wordCase(t);
     i=t;
     t = t.toLowerCase();
     t = t.replace(/ /g,"");
     t=t.replace(/[a-z]0/g,"");
     
       t = t.replace(/^muy$/gi,"m"); 

       t = t.replace(/^m[ŷê]$/gi,"m"); 
       t = t.replace(/^iś$/gi,"z");       
	t = t.replace(/^had$/gi,"d");
	t = t.replace(/^of\!uv$/gi,"v"); 
       t = t.replace(/^and$/gi,"n"); 
       t = t.replace(/^î$/gi,"I"); 
       t = t.replace(/^før\#$/gi,"f"); 
        t = t.replace(/^hê$/gi,"e"); 
        t = t.replace(/^bê$/gi,"b"); 
        t = t.replace(/^can$/gi,"C"); 
         t = t.replace(/^was\!woś$/gi,"w"); 
         t = t.replace(/^havè$/gi,"h"); 
         t = t.replace(/^just$/gi,"j"); 
         t = t.replace(/^pūt$/gi,"p"); 
         t = t.replace(/^ārè$/gi,"r"); 
         t = t.replace(/^ŝħê$/gi,"s"); 
         t = t.replace(/^tö$/gi,"t"); 
         t = t.replace(/^up$/gi,"u"); 
         t = t.replace(/^yöù$/gi,"y"); 
         t = t.replace(/^lîkè$/gi,"l"); 
        t = t.replace(/^cōùd$/gi,"k"); 
        t = t.replace(/^get$/gi,"g"); 
   
     
     t = t.replace(/ār/gi,"r");
     t = t.replace(/ā/gi,"r");
     t = t.replace(/ør/g,"r");
     t = t.replace(/ø/g,"r");
     
     
     t = t.replace(/c/g,"k");
     t = t.replace(/x/gi,"ks");
     t = t.replace(/ã/g,"e");
     t = t.replace(/[ė]/g,"i");
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
     t = t.replace(/û/gi,"yw"); 
     t= t.replace(/ŕ/gi,"r");
 
     t = t.replace(/r#/g,"r");
     t=t.replace(/[^ !]*\!/g,"");
  //t=t.replace(/(.)\1/g,"$1");
   t = t.replace(/[êýï]/g,"iy");
   t = t.replace(/[îŷ]/g,"uy");
     t = t.replace(/[âÂ]/g,"ey");
     t = t.replace(/[õÕ]/g,"aw");
     t = t.replace(/ô/g,"uw");
     t = t.replace(/ōū/g,"u");
    t = t.replace(/[ōū]/gi,"u");
   //  t = t.replace(/[ŷ]/gi,"ui");
   //  t = t.replace(/ŕ/gi,"er");
     t = t.replace(/å/g,"o");
     t = t.replace(/öö/g,"ew");
     t = t.replace(/öü/g,"ew");
     t = t.replace(/[öüë]/g,"ew");
     t = t.replace(/[ǒσ]/gi,"oy");
    t = t.replace(/ð/gi,"t");
     t = t.replace(/τ/gi,"th");
     
     t = t.replace(/π/gi,"Ϯh");
     t = t.replace(/qυ/gi,"kW");
     t = t.replace(/ś/gi,"z");
     t = t.replace(/ç/gi,"s");
     t = t.replace(/ā/gi,"α");
     t = t.replace(/ĝ/gi,"j");
     t = t.replace(/ñ/gi,"q");
     t = t.replace(/ƒ/gi,"v");
     t = t.replace(/þ/ig,"f");

     t = t.replace(/([ţćŝ])/gi,"sh");
    t = t.replace(/shsh/gi,"sh");
    t = t.replace(/w/g,"w");
      t = t.replace(/[Wυ]/g,"w");
      t = t.replace(/[Yŏ]/g,"y");
      t = t.replace(/C/g,"cy");

      t = t.replace(/([ĉť])/gi,"ch"); 
      t=t.replace(/[àèìòùħ]/g,"");

       front=t.substring(0,1);
       rest=t.substring(1);
       rest=rest.replace(/[àèìòùħaeiou]/g,"");
       f=front+rest;
       
      f=revertToOriginalCase(f,ceys);
     
  return      f;

  
  
}