const MaxHeap = require('./maxHeap')

/**
 * 
 * @param {*String} stringOne 
 * @param {*String} stringTwo 
 * @returns Boolean
 * 
 * Main function takes in two strings from command line and prints results
 */

function isOneToOneMappable() {
    let input = process.argv.slice(2)
    if(input.length < 2) return 'Please enter two character seperated by single space'
    
    let strOne = input[0]
    let strTwo = input[1]

    let strOneHash = {}
    let strTwoHash = {}

    //Can return false right away since one-to-one mapping would not be possible
    if(strOne.length > strTwo.length) return false

    //Count unique characters in both strings
    for (let i = 0; i < strOne.length; i++) {
        let char = strOne[i]
        if(!strOneHash[char]) strOneHash[char] = 0
        strOneHash[char]++
    }

    for (let j = 0; j < strTwo.length; j++) {
        let char = strTwo[j]
        if(!strTwoHash[char]) strTwoHash[char] = 0
        strTwoHash[char]++
    }

    //Take unique character values and create heap 
    let strOneValues = Object.values(strOneHash)
    let strTwoValues = Object.values(strTwoHash)

    
    let strOneHeap = new MaxHeap(strOneValues)
    let strTwoHeap = new MaxHeap(strTwoValues)



    //compare each max heap value subtract them, assign new values, and siftDown()
    //repeat until all values are 0 or negtaive value is reached
    while(strOneHeap.peek() !== 0) {
         valueOne = strOneHeap.peek()
         valueTwo = strTwoHeap.peek()

         //break and return false
         if(valueOne > valueTwo) return false

         let difference = valueTwo - valueOne

         //change value will siftDown() the newly changed value 
         //so heap always reamins valid
         strOneHeap.changeValue(0, 0)
         strTwoHeap.changeValue(0, difference)

    }


    return true

}

console.log(isOneToOneMappable())




