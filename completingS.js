function showQuestion(){
  document.getElementById("questions").innerHTML = "";
  document.getElementById("answers").innerHTML = "";
  setQuestion();
  document.getElementById("answers").style.color = "white";
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
}

function showAnswers(){
  document.getElementById("answers").style.color = "black";
}

function setQuestion(){
  do{
    var a = getRndInteger(-3, 3);
  }while(a==0);

  do{
    var b = 2*a*getRndInteger(-6, 6);
  }while(b==0);

  do{
    var c = getRndInteger(-12, 30);
  }while(c==0 || 2*a*c == Math.abs(b));

  var question = document.createTextNode("$y=" + value2FirstCoe(a) + "x^2" + value2Coe(b) + "x" + value2Constant(c) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var step1 = document.createTextNode("$y=" + value2FirstCoe(a) + "x^2" + value2Coe(b) + "x" + value2Constant(c) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(step1);
  document.getElementById("answers").appendChild(x);

  if (a!=1){
    var step2 = document.createTextNode("\xa0\xa0\xa0$=" + value2FirstCoe(a) + "(x^2" + value2Coe(b/a) + "x)" + value2Constant(c) + "$");
    var x = document.createElement("div");
    x.setAttribute("style", "margin-top:10px");
    x.appendChild(step2);
    document.getElementById("answers").appendChild(x);
    var step3 = document.createTextNode("\xa0\xa0\xa0$=" + value2FirstCoe(a) + "[x^2" + value2Coe(Math.sign(b/a)) + "2(x)(" + Math.abs(0.5*b/a) + ")+(" + Math.abs(0.5*b/a) + ")^2-(" + Math.abs(0.5*b/a) + ")^2]" +  value2Constant(c) + "$");
    var x = document.createElement("div");
    x.setAttribute("style", "margin-top:10px");
    x.appendChild(step3);
    document.getElementById("answers").appendChild(x);
    var step4 = document.createTextNode("\xa0\xa0\xa0$=" + value2FirstCoe(a) + "[x^2" + value2Coe(Math.sign(b/a)) + "2(x)(" + Math.abs(0.5*b/a) + ")+(" + Math.abs(0.5*b/a) + ")^2]-(" + Math.abs(0.5*b/a) + ")^2(" + a + ")" +  value2Constant(c) + "$");
    var x = document.createElement("div");
    x.setAttribute("style", "margin-top:10px");
    x.appendChild(step4);
    document.getElementById("answers").appendChild(x);
    var step5 = document.createTextNode("\xa0\xa0\xa0$=" + value2FirstCoe(a) + "(x" + value2Coe(Math.sign(b/a)) + Math.abs(0.5*b/a) + ")^2" + value2Constant(-(0.5*b/a)*(0.5*b/a)*a+c) + "$");
    var x = document.createElement("div");
    x.setAttribute("style", "margin-top:10px");
    x.appendChild(step5);
    document.getElementById("answers").appendChild(x);
  } else{
    var step2 = document.createTextNode("\xa0\xa0\xa0$=" + value2FirstCoe(a) + "x^2" + value2Coe(Math.sign(b)) + "2(x)(" + Math.abs(0.5*b/a) + ")+(" + Math.abs(0.5*b/a) + ")^2-(" + Math.abs(0.5*b/a) + ")^2" + value2Constant(c) + "$");
    var x = document.createElement("div");
    x.setAttribute("style", "margin-top:10px");
    x.appendChild(step2);
    document.getElementById("answers").appendChild(x);
    var step3 = document.createTextNode("\xa0\xa0\xa0$=(x" + value2Constant(0.5*b/a) + ")^2" + value2Constant(-0.5*0.5*b*b/a/a+c) + "$");
    var x = document.createElement("div");
    x.setAttribute("style", "margin-top:10px");
    x.appendChild(step3);
    document.getElementById("answers").appendChild(x);
  }




}









// returns H.C.F. of x and y
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// returns a random integer between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}
