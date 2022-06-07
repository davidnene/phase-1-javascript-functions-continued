// code your solution here

/**
 * Implement a function called saturdayFun:
 * It should define a function
 * It uses a default argument, 'roller-skate' when no arguments are passed
 * allows the default argument to be overridden
 */

function saturdayFun (skate="roller-skate") {
    return (
        `This Saturday, I want to ${skate}!`
    )
}

/**
 * Implement a function called mondayWork:
 * It should define a function
 * It uses a default argument, 'go to the office' when no arguments are passed
 * allows the default argument to be overridden
 */

const mondayWork = function (work = "go to the office") {
    return (
        `This Monday, I will ${work}.`
    )
}

/**
 * Implement a function called wrapAdjective:
 * It should return a function
 * This "inner" function should:
 * take a single parameter that should default to "special". Name it however you wish.
 * return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
 * It should take as parameter a String that will be used to create visual flair
 * You may call the parameter whatever you like, but its default value should be "*"
 * Call example: const encouragingPromptFunction = wrapAdjective("!!!")
 */

function wrapAdjective(wrap = "*") {
    return function(wrapper = "special") {
        return (
            `You are ${wrap}${wrapper}${wrap}!`
        )
    }
}



console.log(saturdayFun())
console.log(mondayWork('read'))
console.log(wrapAdjective("%")("a dedicated programmer"))

