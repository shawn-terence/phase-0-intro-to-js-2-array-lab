// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name="Ralph"){
 cats.push(name)
}
function destructivelyPrependCat(name="Bob"){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
 cats.pop([2])
}
function destructivelyRemoveFirstCat(){
    cats.shift([0])
}
function  appendCat(name){
    let nwcat=[...cats,"Broom"]
    return nwcat
}
function prependCat(name){
    let newcats=["Arnold",...cats]
    return newcats;
}
function removeLastCat(){
    const newcats=cats.slice(0,-1)
    return newcats
    
}
function removeFirstCat(){
    const newcats=cats.slice(1)
    return newcats
}