function dwarfRollCall(names) {
     var returnString = ""
     for(var i = 0; i < Math.floor(names.length / 2); i++) {
        var subString = `${i + 1}. ${names[i]} `
        returnString = returnString + subString
      }
  return returnString;
}

function summonCaptainPlanet(planeteerCalls){
  var arr = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    var upperCaseString = planeteerCalls[i].toUpperCase();
    var finalString= upperCaseString + "!";
  arr.push(finalString);
  }
  return arr;
}

function longPlaneteerCalls(words) {
  var returnStatement = false;
  for (var i = 0; i < words.length; i++) {
     if(words[i].length > 4) {
     returnStatement = true;
     }
  }
  return returnStatement;
  }

function findTheCheese (foods) {
  var cheeseArray = ["cheddar", "gouda", "camembert"];
    for(var i = 0; i < foods.length; i++) {
      if(cheeseArray.includes(foods[i])) {
        return foods[i];
       } 
    }
     return "no cheese!"
}

function wordsWithB(words) {
  var arr = [];
  for(var i = 0; i < words.length; i++) {
    if(words[i].startWith("b")) {
    arr.push(words[i]);
    }
   
  }
    return arr;
}