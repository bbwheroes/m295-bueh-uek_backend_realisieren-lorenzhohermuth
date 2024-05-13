const args = process.argv.slice(2)
let sum = 0
args.forEach( (elm) => {
	sum += parseInt(elm)
})
console.log(sum)
