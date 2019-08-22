function cryptosquare(input) {
  input = input.toLowerCase();
  var reg = /^[a-z]+$/;
  var sentence = "";
  // var output = "";
  var crypto = "";
  // var rowArray = [];
  // var colArray = [];
  var space = 5;

  for(let i=0; i<input.length; i++) {
    if(reg.test(input.charAt(i))) {
      sentence += input.charAt(i);
    }
  }

  var rows = Math.ceil(Math.sqrt(sentence.length));
  var cols = Math.floor(Math.sqrt(sentence.length));

  // for(var i=0; i<sentence.length; i+=cols) {
  //   for(var j=0; j<cols; j++) {
  //     rowArray.push(sentence[j+i]);
  //   }
  //   colArray.push(rowArray);
  //   rowArray = [];
  // }
  //
  // for(var i=0; i<rows-1; i++) {
  //   for(var j=0; j<rows; j++) {
  //     if(space === 0) {
  //       output += " ";
  //       space = 5;
  //     }
  //     if(colArray[j][i]) {
  //       output += colArray[j][i];
  //
  //     }
  //     space--;
  //   }
  // }
  // space = 5;

  for(let a=0; a<rows-1; a++) {
      for(let i=0; i<sentence.length; i+=cols) {
        if(sentence[i+a]) {
          crypto += sentence[i+a];
          space--;
          if(space === 0) {
            crypto += " ";
            space = 5;
          }
        }
      }
    }

    // console.log(output);
    console.log(crypto);
}
