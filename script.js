for(var a=1;a<=10;a++){
    console.log("que 1:",a);   
} 

var b = 1;
while(b<=10){
    b++;
    console.log("que 1 while:",b);
    
}

var c = 1;
do{
    c++;
    console.log("que 1 do-while:",c);   
}
while(c<=10);

for(d=2;d<=20;d+=2){
    console.log("que 2 for loop:",d);
}

let s = 2;
while (s <= 10) {
    console.log("que 2 for while:",s);
    s += 2;
}


var f = 2;
do{
    console.log("que 2 do-while:",f);
    f+=2;
}
while(f<=20);

for(var i=1;i<=20;i++){
    console.log("que 3 loop:",i); 
}

var j=1;
while (j <= 20) {
    j += 2;
    console.log("que 3  while:",j);
    j++;
}



var k = 1;
do {
    console.log("que 3 do-while:",k);
    k+=2;
}
while (k < 20) {
    
}

var marks = 40;
if(marks >= 35 && marks <= 45){
    console.log("grade:D");
    
}
else{
    console.log("grade:not D");
    
}