var dt = new Date();
//console.log("Current Date and Time: ",dt);
// console.log(typeof dt);
// console.log(Date);
// console.log(dt);

sdt = dt.toString();
//console.log(sdt);
// console.log(sdt.length);

stringHour = sdt.substr(16,2);
numHour = Number(stringHour)
//console.log(typeof numHour);

if(numHour < 11 ){
	console.log("Good Morning");
}else if(numHour < 13){
	console.log("Good Noon");
}else if(numHour < 15){
	console.log("Good After noon");
}else if(numHour < 21){
	console.log("Good Evening");
}else if(numHour <= 23){
	console.log("Good Night");
}
	
// console.log(typeof stringDate);
console.log(numHour);
