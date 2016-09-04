/**
 * Created by dell on 2016/9/4.
 */
function  isNumber(el) {

    return(typeof(el)=='number')
}

function isString(el) {
    return(typeof(el)=='string')
}
function isBoolean(el) {
    return(typeof(el)=='boolean')
}

function isFunction(el) {
    return(typeof (el)=='function')
}

var a=2,
    b='abc',
    c=false;

alert( isNumber(a));  //true
alert(isString(a));         //false
alert(isBoolean(c));    //true
alert(isFunction(isNumber(a))); //false
alert(isFunction(isNumber));    //true


var arr=[3,4,5];
for(var i=0;i<arr.length;i++){
    var s=arr[i]*arr[i];
    console.log(s);
}


var obj = {
    name: 'hunger',
    sex: 'male',
    age: 28
}

for(var k in  obj)
    console.log(obj[k]);
}

