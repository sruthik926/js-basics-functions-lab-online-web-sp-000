// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    return Math.abs((distance) - 42);
}

function distanceFromHqInFeet(distance){
   return distanceFromHqInBlocks(distance) * 264;
}

function  distanceTravelledInFeet(beg, dest){
  return Math.abs((dest - beg)) * 264;

}

function calculatesFarePrice(start, destination){
   let price = 0;
   let distance = distanceTravelledInFeet(start, destination);

  if(distance <= 400) {
     price = 0;
  }
  else if(distance > 400 && distance < 2000){
    price = (distance - 400) * .02;
 } else if (distance > 2000 && distance < 2500){
     price = 25;
 }
  else {
    return 'cannot travel that far';
 }
     return price;
}
