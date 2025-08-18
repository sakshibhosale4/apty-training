let _number = 10;
let _str1 = "123"; 
let _str2 = "Apty";       
let _boolean = true;
let _null = null;
let _undefined = undefined;
let _symbol = Symbol("id");
let _object = { name: "Sakshi" };
let _bigint=BigInt(75);
function safeConvert(converter, value) {
    try {
        return converter(value);
    } catch (err) {
        return "Error: " + err.message;
    }
}
let result = "";

result += `<strong>String (_str1="123")</strong><br>`;
result += `To String: ${String(_str1)}<br>`;
result += `To Number: ${Number(_str1)}<br>`;
result += `To Boolean: ${Boolean(_str1)}<br><br>`;

result += `<strong>String (_str2="Apty")</strong><br>`;
result += `To String: ${String(_str2)}<br>`;
result += `To Number: ${Number(_str2)}<br>`;
result += `To Boolean: ${Boolean(_str2)}<br><br>`;

result += `<strong>Number (_number=10)</strong><br>`;
result += `To String: ${String(_number)}<br>`;
result += `To Number: ${Number(_number)}<br>`;
result += `To Boolean: ${Boolean(_number)}<br><br>`;

result += `<strong>Number (_bigint=75)</strong><br>`;
result += `To String: ${String(_bigint)}<br>`;
result += `To Number: ${Number(_bigint)}<br>`;
result += `To Boolean: ${Boolean(_bigint)}<br><br>`;

result += `<strong>Boolean (_boolean=true)</strong><br>`;
result += `To String: ${String(_boolean)}<br>`;
result += `To Number: ${Number(_boolean)}<br>`;
result += `To Boolean: ${Boolean(_boolean)}<br><br>`;

result += `<strong>Undefined (_undefined)</strong><br>`;
result += `To String: ${String(_undefined)}<br>`;
result += `To Number: ${Number(_undefined)}<br>`;
result += `To Boolean: ${Boolean(_undefined)}<br><br>`;

result += `<strong>Null (_null)</strong><br>`;
result += `To String: ${String(_null)}<br>`;
result += `To Number: ${Number(_null)}<br>`;
result += `To Boolean: ${Boolean(_null)}<br><br>`;

result += `<strong>Symbol (_symbol)</strong><br>`;
result += `To String: ${safeConvert(String, _symbol)}<br>`;
result += `To Number: ${safeConvert(Number, _symbol)}<br>`;
result += `To Boolean: ${Boolean(_symbol)}<br><br>`;

result += `<strong>Object (_object)</strong><br>`;
result += `To String: ${String(_object)}<br>`;
result += `To Number: ${Number(_object)}<br>`;
result += `To Boolean: ${Boolean(_object)}<br><br>`;

document.getElementById("results").innerHTML = result;
