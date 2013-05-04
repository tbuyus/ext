describe("overlay", function(){
  
  describe("removeInternalVowels", function(){
    it("should still remove vowels", function (){
      expect(removeInternalVowels("should remove vowels")).toBe("shld rmv vwls");
    });
   });
  
  describe("revertToOriginalCase", function(){
    it("should change 'belinda' to capitals - i.e. BELINDA", function (){
      expect(revertToOriginalCase("belinda","uppercase")).toBe("BELINDA");
     });
    
    it("should leave 'gerald' lowercase", function (){
      expect(revertToOriginalCase("gerald","lowercase")).toBe("gerald");
     });
 
    it("should change 'enrico' to titlecase ('Enrico') ", function (){
      expect(revertToOriginalCase("enrico","titlecase")).toBe("Enrico");
     });
  
    
    
   });

});  