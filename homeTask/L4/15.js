var str = "#ff00FF";

function hexToRGB(str) {
    var newStr = str.replace('#','');
   for (var i = 0; i < newStr.length/2; i++) {
      console.log(newStr.substring(i,i++));
   }

};

hexToRGB(str);
