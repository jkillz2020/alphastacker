var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var newString = [];

function alphaStacker(){
  for (var i = 0; i < alpha.length; i++) {
    if(i%5 === 0) {
      newString += " " + alpha[i]
    } else {
      newString += alpha[i]
      console.log(newString)
    }
  }
}
alphaStacker()






