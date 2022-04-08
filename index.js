function scuberGreetingForFeet(distance){
  // Write your code here!
  console.log(distance)
  

  if (distance <= 400){
    return "This one is on me!"
  } else if (distance > 2000 && distance <=2500) {
    return 'I will gladly take your thirty bucks'
  } else if (distance >2500) {
    return "No can do"
}

function ternaryCheckCity(city){
  city === "NYC" ? "Ok,sounds good," : "No go"
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
    return "thank you so much"
    case "not as generous":
    return "thank you"
    default:
      
    return "bye"
  }
}