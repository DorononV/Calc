function sum() {
  let result=eval(document.getElementById('t1').value);
  document.getElementById('t1').value=result;
}

function sbros() {
  document.getElementById('t1').value = "";
}

function num0() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "0";
}

function num1() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "1";
}

function num2() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "2";
}

function num3() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "3";
}

function num4() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "4";
}

function num5() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "5";
}

function num6() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "6";
}

function num7() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "7";
}

function num8() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "8";
}

function num9() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "9";
}

function mod() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "%";
}

function division() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "/";
}

function multiply() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "*";
}

function addition() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "+";
}

function subtraction() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + "-";
}

function dot() {
  let a = document.getElementById('t1').value;
  document.getElementById('t1').value = a + ".";
}

function delete_one_symbol() {
  let a = document.getElementById('t1').value;
  var b = a.substr(0,(a.length -1));
  document.getElementById('t1').value = b;
}
