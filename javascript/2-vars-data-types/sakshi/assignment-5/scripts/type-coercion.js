let _number = 10;
let _str1 = "123";   
let _str2 = "Apty";         
let _boolean = true;
let _null = null;
let _undefined = undefined;
let _symbol = Symbol("id");
let _object = { name: "Sakshi" };
let _bigint=BigInt(75);

let output = "";
function showResult(a, b) {
  let result;
  try {
    result = a + b;
  } catch (e) {
    result = "Error: " + e.message;
  }
  output += `${String(a)} + ${String(b)} = ${result} <br>`;
}
showResult(_number,_number);
showResult(_number, _str1);
showResult(_number, _str2);
showResult(_number, _boolean);
showResult(_number, _null);
showResult(_number, _undefined);
showResult(_number, _object);
showResult(_number, _symbol);
showResult(_number, _bigint);
output += "<hr>";
showResult(_str1, _str2);
showResult(_str1, _boolean);
showResult(_str1, _null);
showResult(_str1, _undefined);
showResult(_str1, _object);
showResult(_str1, _symbol);
showResult(_str1, _bigint);
output += "<hr>";
showResult(_str2, _boolean);
showResult(_str2, _null);
showResult(_str2, _undefined);
showResult(_str2, _object);
showResult(_str2, _symbol);
showResult(_str2, _bigint);
output += "<hr>";
showResult(_boolean,_boolean);
showResult(_boolean, _null);
showResult(_boolean, _undefined);
showResult(_boolean, _object);
showResult(_boolean, _symbol);
showResult(_boolean, _bigint);
output += "<hr>";
showResult(_null,_null);
showResult(_null, _undefined);
showResult(_null, _object);
showResult(_null, _symbol);
showResult(_null, _bigint);
output += "<hr>";
showResult(_undefined,_undefined);
showResult(_undefined, _object);
showResult(_undefined, _symbol);
showResult(_undefined, _bigint);
output += "<hr>";
showResult(_object, _symbol);
showResult(_object,_object);
showResult(_symbol,_symbol);
showResult(_symbol,_bigint);
document.getElementById("results").innerHTML = output;
