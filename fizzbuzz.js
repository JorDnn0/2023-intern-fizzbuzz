// This is our main function
function fizzbuzz() {
    const prompt = require("prompt-sync")({ sigint: true });
    let max
    let rules
    let ruleOprs = /[+=\\]/

    // get rules
    console.log("====== Define Rules ======")
    console.log(`
        =fizz means print 'fizz' if a multiple of this number
        +fizz means append 'fizz' if a multiple of this number
        \\means reverse the current string
        
        give input as format: 3=Fizz,17+Buzz`)
    while(true){
        rules = prompt()

        if(/^\d+(?:\\|[+=]\w+)(?:,\d+(?:\\|[+=]\w+))*$/.test(rules)){
            rules = rules.split(",")
            break
        } else{
            console.log("syntax error")
        }
    }

    while(true){
        console.log("====== Select Max Iterations ======")
        max = Number(prompt());
        if(Number.isInteger(max)){
            break
        } else{
            console.log("number is not an int!")
        }
    }

    //TODO: use data structure for rules instead of parsing input rules twice
    for (let num = 0; num<max; num++){
        let s = ""
        let toFlip = false

        //iterate over rules
        for(let rule of rules){
            let [mulOf,strToAdd] = rule.split(ruleOprs)
            if(num%Number(mulOf)==0){
                if(rule.includes("+")){
                    s += ' ' + strToAdd
                } else if(rule.includes("=")){
                    s = strToAdd
                } else if (rule.includes("\\")){
                    toFlip = true
                }
            }
        }
        if(s===""){
            console.log(num)
        } else {
            if(toFlip){
                console.log(s.split(' ').reverse().join(''))
            }
            console.log(s.replace(/\s/g,''))
        }
    }

}

// Now, we run the main function:
fizzbuzz();

