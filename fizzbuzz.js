// This is our main function
function fizzbuzz() {
    const prompt = require("prompt-sync")({ sigint: true });
    let max = 0
    // get integer input
    while(true){
        console.log("====== Select Max Number ======")
        max = Number(prompt());
        if(Number.isInteger(max)){
            break
        } else{
            console.log("number is not an int!")
        }
    }

    for (let i = 0; i<max; i++){
        let s = ""
        if(i%3===0) {
            s = 'Fizz'
        }
        if(i%13===0){
            s += 'Fezz'
        }
        if(i%11===0) {
            if (s === "Fezz") {
                s += 'Bong'
            } else {
                s = 'Bong'
            }
        }
        if(i%5===0){
            s += 'Buzz'
        }
        if(i%7===0) {
            s += 'Bang'
        }
        if(i%17===0&s!=""){
            s = s.split(/(?=[A-Z])/).reverse().join('');
        }
        if(s===""){
            console.log(i)
        } else {
            console.log(s)
        }
    }

}

// Now, we run the main function:
fizzbuzz();

