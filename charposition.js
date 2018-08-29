// function charPosition(str) {
//   var a = str.split(" ").join("")
//   var obj = {}

//   for (var i = 0; i < a.length; i++){
//     console.log(i)
//   }

//   return obj
// }
// console.log(charPosition('lighthouse in the house'));






function countLetters(str) {
  var a = str.split(" ").join("")
  var charArray =[];
  var obj = {}

    for(var i = 0; i < a.length; i++){
      if(obj[a[i]]){
        obj [a[i]].push(i);
      } else {
        obj [a[i]] = [i]
      }
    }
  return obj
}
console.log(countLetters('lighthouse in the house'));