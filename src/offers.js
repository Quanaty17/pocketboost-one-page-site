/* ============================================================
   POCKETBOOST OFFERS: edit this file to add, change or remove codes.
   Nothing here is fetched live. Every code is entered by hand,
   so check each one at SHEIN checkout before you publish it.

   Each line below is: [discount, label, category, code]
   - Codes with the SAME label share one card, and the card shows
     the LOWEST discount in the group.
   - The category decides which filter button the card appears under.
   - SHEIN_LINK is your affiliate link. Every card uses it.
   ============================================================ */
var SHEIN_LINK="https://onelink.shein.com/58/661u6munhh4y";
var OFFERS=[];
[["90%","Everything","Fashion","JL6S9"],["80%","Various Items","Fashion","2U6994E"],["60%","New Users","Fashion","XP3V9EB"],["80%","Women’s Clothing","Fashion","8Q29272"],["80%","Bags & Shoes","Fashion","6M5PR82"],["80%","Clearance Sale","Fashion","886J64B"],["90%","Best Sellers","Fashion","PD7KTR4"],["80%","Men’s Clothes","Fashion","63L7842"],["50%","Kids Clothes","Fashion","TDJJU8V"],["90%","Beauty","Beauty","8DMCGP6"],["80%","SHEIN Curve","Fashion","RWW4RBC"],["40%","Human Hair","Beauty","D75BXYZ"],["90%","Gym Wear","Fashion","4PUX4EH"],["90%","Everything","Fashion","KZRN9"],["80%","Women’s Fashion","Fashion","4CGHM"],["30%","Human Hair","Beauty","DATD6"],["80%","Women’s Clothing","Fashion","3RKFX"],["90%","Electronics","Electronics","9VSSR"],["90%","Various Items","Fashion","5SKGT"],["90%","Beauty","Beauty","JYXG2"],["80%","Lingerie","Fashion","2XTZK"],["90%","SHEIN Curve","Fashion","6XUFF"],["70%","Electronics","Electronics","9GDQV"],["60%","New Users","Fashion","4KPDT"],["70%","Sportswear","Fashion","6TYRP"]].reverse().forEach(function(c){
  OFFERS.splice(0,0,{store:"SHEIN",cat:c[2],color:"#222222",tag:c[0]+" off",label:c[1],pct:parseInt(c[0],10),title:c[0]+" off "+c[1]+" at SHEIN",desc:"Paste a code into the promo box at SHEIN checkout. Offer terms may change.",code:c[3],url:SHEIN_LINK});
});
