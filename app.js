/*





*/
for (let i = 1; i <=20; i++){
  console.log(i);
}
for(i=0;i<=200;i+=2){
  console.log(i);
}

for (let i = 0; i <20; i++){
  console.log("Love me, pet me! HSSSSSS!");
  if(i%2==0){
    num=(Math.floor(Math.random()*3)+1);

    if(num==1 ){
      console.log("...human...why you taking pictures of me?...");
    }
    else if(num==2){
      console.log("...the catnip made me do it...");
    }
    else if(num==3){
      console.log("...why does the red dot always get away...");

    }
    }

}
for(i=1;i<=100;i++){
  if (i%5===0 && i%3==0) {
    console.log('FizzBuzz')
  }
  else if(i%3===0 && i%5!=0){
    console.log('Fizz');
  }
  else if (i%5===0 && i%3!=0) {
    console.log('Buzz')
  }
else{
  console.log(i);
}
}
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];
shahzad[0]="Gamboy";
daniel[1]=187;
ryan[2]="Denver";

reuben.pop();
reuben.push("chicago");
jim.pop();
jim.push("LA","NYC","Boston");
jim.splice(2,1);

ninjaTurtle=["Donatello", "Leonardo", "Raphael","Michaelangelo"];
for (let i = 0; i < ninjaTurtle.length; i++) {
  console.log(ninjaTurtle[i].toUpperCase());
}

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
kristynShoe=kristynsCloset[0];
thomsCloset.push(kristynShoe);


function getOutfit(outfitnum){
tOutfits=[];

for (var i = 0; i < thomsCloset.length; i++) {
 if(i==0){

   tOutfits.push(thomsCloset[i][outfitnum]);
 }
 else if(i==1){

   tOutfits.push(thomsCloset[i][outfitnum]);
 }
else if(i==2){

   tOutfits.push(thomsCloset[i][outfitnum]);
 }


}
return tOutfits;


}
console.log(" Kristyn and Thom have their outfits ready for class "+getOutfit(1)+" and "+getOutfit(2)+
getOutfit(3));
for (var i = 0; i <kristynsCloset.length; i++) {
console.log( "WHIRR: Now washing "+kristynsCloset[i]);
}
inventory={};
  inventory['shirts']=thomsCloset[0];
  inventory['pants']=thomsCloset[1];
  inventory['accessories']=thomsCloset[2];
console.log(inventory);
sum=0;
for (var i = 0; i <1000 ; i++) {
  if (i%5===0 && i%5==0) {
    sum+=i;
  }
  else if(i%3===0){
    sum+=i;
  }
  else if (i%5===0) {
    sum+=i;
  }

}
console.log(sum);
