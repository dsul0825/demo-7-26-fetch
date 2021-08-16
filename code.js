// alert("this is taking a long time before you click OK")

let usedClues = []
fetch('https://jservice.io/api/random?count=5')
    .then(response => response.json())
    .then(clues => {
       for (let clue of clues) {
            usedClues.push(clue)

           let details = document.createElement("details")
           let summary = document.createElement("summary")

           details.append(summary)
           summary.append(`${clue.category.title}: ${clue.question}`)
           details.append(clue.answer)

           document.body.append(details)

       }
    })

    console.log(usedClues)

// The response is not quite the data we're ultimately looking for.

//  .then(data => console.log(data))










console.log("First synchronous console.log()")
setTimeout(() => console.log("First ASYNC console.log()"), 10)
setTimeout(() => console.log("Second ASYNC console.log()"), 20)
setTimeout(() => console.log("Third ASYNC console.log()"), 0)
console.log("Second synchronous console.log()")

for (let count = 0; count < 1000000; count += 1) {
    ;;;
}

console.log("Whew! The long loop is done.")