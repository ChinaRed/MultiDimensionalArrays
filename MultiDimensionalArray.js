module.exports = {

generator_1d : function (first1d) {
// create empty array
var ArrayGen1d = [];

// gives empty array length 3 if nothing is given as argument
if (first1d === undefined) {
  first1d = 3;
}

// gives an empty array if argument is a anything but a number, 
// if number is provided it gives array with x number of elements
if (typeof first1d !== 'number'){ 
  first1d = 0;

} 

  for (var i = 0; i < first1d; i++){ 

    var random = Math.random();
    ArrayGen1d.push(Math.round(random));

  }

return ArrayGen1d;
},



generator_2d : function (first2d , second2d) {

// create an empty array
var gen2dArray = [];

if (first2d === undefined) {
  first2d = 3;  
}

if (second2d === undefined){ 
  second2d = 3;

} 
// push the array from gen1d into each empty array of gen2d
  for  (var i = 0; i < first2d; i++) {
    gen2dArray.push(this.generator_1d(second2d));
    
  }
  return gen2dArray;
},
  



generator_3d : function (first3d, second3d, third3d) {

var gen3dArray = [];

if (first3d === undefined) {
  first3d = 3;  
}

if (second3d === undefined){ 
  second3d = 3;
}

if (third3d === undefined){ 
  third3d = 3;
}

// push the array from gen1d into each empty array of gen2d
  for  (var i = 0; i < first3d; i++) {
    gen3dArray.push(this.generator_2d(second3d,third3d));
    
  }
  return gen3dArray;
},





counter : function() {

  return ;
},


};

