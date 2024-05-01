let maxMarks = 890
let Obtained = 640
let perSentage =(Obtained*100)/maxMarks 
if(perSentage >=90 && perSentage <99){
    console.log('A+1')
}else if(perSentage >=80 && perSentage <89){
    console.log('A+')
}else if( perSentage >=70 && perSentage <79){
    console.log('A')
}else if(perSentage >=60 && perSentage < 69){
    console.log('B')
}else if(perSentage >=50 && perSentage <59){
    console.log('D')
}else{
    console.log('pssed')
}