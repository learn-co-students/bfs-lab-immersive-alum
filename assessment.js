var symbols = "[(()){}]"

function checkSymbols(string){
  let stack = [];
  let symbols = string.split("")
  let open = ["[", "(", "{"];
  let close = ["]", ")", "}"];

  while(symbols.length !== 0){
    stack.push(symbols.shift())
    for (i = 0; i < symbols.length; i++){
      if (symbols[i] === "]"){
      }
    }
  }
}


function isPalindrome(string){

}


function reverse(string){
  if (string.length === 1){
    return string
  } else {
    return string.slice(-1) + reverse(string.substring(0, string.length -1))
  }
}


function isPalindrome(string){
  if (string.slice(0,1) === string.slice(-1)){
    if (string.length > 2){
      return isPalindrome(string.slice(1,-1))
    } else {
      return true
    }
    } else {
    return false
  }
}

[ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ]


5
[-10, 3, 0, 5, -4]
[2, -1, 0, 2, -8]
[9, -2, -5, 6, 0]
[9, -7, 4, 8, -2]
[3, 7, 8, -5, 0]



11
  5
  -12

    4
  5
10

a = [[-10, 3, 0, 5, -4], [2, -1, 0, 2, -8], [9, -2, -5, 6, 0],[9, -7, 4, 8, -2],[3, 7, 8, -5, 0]]

function diagnoal(n, a){
  let sumLeft = 0;
  let sumRight = 0;
  for (i = 0, j = n-1; i < n; i++, j--){
    // console.log("left", a[i][i]);
    // console.log("right",a[i][j] );
    sumLeft += a[i][i];
    sumRight += a[i][j];
  }
  console.log(sumLeft, "left");
  console.log("right", sumRight);
  console.log(sumRight - sumLeft)
}

diagnoal(5, a)


function isPalindrome(string){
	if (string.slice(0,1) === string.slice(-1)){
		if (string.length > 2) {
			return isPalindrome(string.slice(1,-1))
      } else {
       return true
     }
    } else {
      return false
    }
  }

  function relativeFractions(n, a){
    var positive = 0;
    var negative = 0;
    var zeros = 0;

      for (i = 0; i < a.length; i++){
        if (a[i] > 0){
          positive +=1
        } else if (a[i] < 0) {
          negative +=1
        } else {
          zeros +=1
        }
      }
      console.log((positive / n).toFixed(6);
      console.log((negative / n).toFixed(6));
      console.log((zeros / n).toFixed(6));
    }


    function returnHash(n){
      var str = "#"
      if(n === 1){
        console.log(str)
      } else {
        debugger
       console.log(str.repeat(n))
       returnHash(n - 1)
      }
    }

    function stairCase(n) {
      for (i = 1; i <= n; i++){
        console.log(" ".repeat(n - i), "#".repeat(i))
      }
    }

    function returnHash(n){
      var str = "#"
      if(n === 1){
        return str
      } else {
       return str.repeat(n) + returnHash(n - 1)
      }
    }


    function minMax(arr) {
      let total = 0;
      let currentMax = arr[0];
      let currentMin = arr[0];

        for (i = 0; i < arr.length; i++){
          total += arr[i];
          if (arr[i] > currentMax){
            currentMax = arr[i]
          }
          if (arr[i] < currentMin){
            currentMin = arr[i]
          }
        }
        console.log(total - currentMax, total - currentMin)
    }


    function candles(n, arr){
      var count = 0;
      var max = arr[0];
        for (i = 0; i < arr.length; i++){
          if(arr[i] >= max){
            max = arr[i]
          }
        }
        for (i = 0; i < arr.length; i++){
          if (arr[i] === max){
            count++
          }
        }
        return count
    }


    var pmTime = "07:05:45PM"
    var amTime = "07:05:45AM"

  function timeConversion(s) {
    var time = s.split("");
    var hour = time[0] + time[1];
    var result = "";
      if (time[time.length - 2] === "P"){
        if (time[1] === "2" && time[0] === "1"){
          result = `${time[0]}${time[1]}:${time[3]}${time[4]}:${time[6]}${time[7]}`
        } else {
          hour = 12 + parseInt(hour)
          result = `${hour}:${time[3]}${time[4]}:${time[6]}${time[7]}`
        }
      } else {
          if(time[0] === "1"){
            result = `00:${time[3]}${time[4]}:${time[6]}${time[7]}`
          } else {
            result = `0${time[1]}:${time[3]}${time[4]}:${time[6]}${time[7]}`
          }
        }
      return result;
  }





  function super_reduced_string(s){
    var string = s.split("");
    var current = string[0];
    var hasDuplicates;
    debugger

    if (string.length === 0 ){
      return "Empty String"
    } else {
      for (i = 1; i < string.length; i++){
        if (string[i] === current){
          debugger
          string.splice(i, 1)
          hasDuplicates = true
          i = 1
          current = string[i]
        }
      }
    }
    debugger
    if (hasDuplicates === true){
      debugger
      return super_reduced_string(string.join(""))
    } else {
      debugger
      return string.join("")
    }

  }


  super_reduced_string("aaabccddd")







  function super_reduced_string(s){
    var string = s.split("");
    var current = string[0];
    var hasDuplicates;
    var newArr = [];
    debugger

    if (string.length === 0 ){
      return "Empty String"
    } else {
      for (i = 1; i < string.length; i++){
        if (string[i] === current){
          debugger
          string.splice(i, 1)
          hasDuplicates = true
        } else {
          debugger
        }
      }
    }
    if (hasDuplicates === true){
      debugger
      return super_reduced_string(string.join(""))
    } else {
      debugger
      return string.join("")
    }

  }


  function duplicates(s){
    var string = s.split("");
    var count = 0
    var current = string[count];

      for (i = 1; i < string.length; i++){
        if (string[i-1] === current){
          debugger
          string.splice(i, 1)
          i = 1
        } else if (i === string.length -1) {
          debugger
          i = 1
          current = string[count+=1]
        } else {
          debugger
        }
      }
      return string
  }

  function duplicates(s){
    var string = s.split("");
      for (var i = 0; i < string.length; i++){
        debugger
        if (string[i] === string[i+1]){
          string.splice(i,1);
          string.splice(i,1);
          debugger
          i = 0;
        } else {
          debugger
        }
      }
      return string
  }


  function duplicates(s){
    var string = s.split("");
    var counter = 0;
      while (counter !== string.length){
        if (string[counter] === string[counter+1]){
          string.splice(counter,1);
          string.splice(counter,1);
          counter = 0;
        } else {
          counter +=1
        }
      }
      if (string.length === 0){
        return "Empty String"
      } else {
        return string.join("")}
  }

var arr = [2,5,4,7,6,3]

  function bigSort(n, array, sorted = []) {
    let min = parseInt(array[0]);
    let index = 0;
      if (array.length === 1){
        return sorted.concat(array[0])
      }
      for (i = 0; i < array.length; i++){
        if (parseInt(array[i]) < min){
          min = parseInt(array[i]);
          index = i
        }
      }
      sorted.push(`${min}`)
      array.splice(index, 1)
      return bigSort(n, array, sorted)
  }

  var a = [ '31415926535897932384626433832795', '1', '3', '10', '3', '5' ]


  function bigSort(n, array) {
    let min = array[0];
    let index = 0;
      if (array.length === 1){
        console.log(array[0])
        return true
      }
      for (i = 0; i < array.length; i++){
        if (array[i].length < min.length){
          min = array[i];
          index = i
        } else if (array[i].length === min.length && array[i] !== min) {
          let a = array[i].split("");
          let b = min.split("")
            for (j = 0; j < b.length; j++){
              if (a[j] < b[j]){
                min = array[index]
                index = i
              }
            }
        }
      }
      console.log(min)
      array.splice(index, 1)
      return bigSort(n, array)
  }




  function bigSort(n, array) {
    let sorted = [];

      while (array.length !== 1){
        let min = array[0];
        let index = 0;
        for (i = 0; i < array.length; i++){
          if (array[i].length < min.length){
            min = array[i]
            index = i
          } else if (array[i].length === min.length && min !== array[i]) {
            for (j = 0; j < array[i].length; j++){
              if (array[i][j] < min[j]){
                min = array[i]
                index = i
              }
            }
          }
        }
        sorted.push(min)
        array.splice(index,1)
      }
    sorted.push(array[0])
    for (i = 0; i < sorted.length; i++){
      console.log(sorted[i])
    }
  }

  var a = [ '31415926535897932384626433832795', '1', '3', '10', '3', '5' ]

  bigSort(1,a)
