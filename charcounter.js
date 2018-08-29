
// var obj = {};

// function countLetters(string){
//   for(var i = 0; i < string.length; i++){
//     obj[string.charAt(i)];
//   }
//   return obj
// }

// countLetters("lighthouse in the house")

function countLetters(str) {
  var a = str.split(" ").join("")

var obj = {}

  for (var j = 0; j < a.length; j++){
    var count=0
    for(var i = 0; i < a.length; i++){
      if(a[j]===a[i]){
        count+=1
        obj[a[i]]=count
      }
    }
  }
  return obj
}
console.log(countLetters('lighthouse in the house'));