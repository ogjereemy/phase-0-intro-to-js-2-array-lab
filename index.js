// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(){
  cats.push('Ralph')
  
}
function destructivelyPrependCat(){
    cats.unshift('Bob')
    
}
function destructivelyRemoveLastCat(){
    cats.pop()

}
function destructivelyRemoveFirstCat(){
    cats.shift()

}
function appendCat(){
    let spread = [...cats, "Broom"]
    return spread

}
function prependCat(){
    let spread = ['Arnold',...cats]
    return spread
}
function removeLastCat(){
    let sliced = cats.slice(0,2)
    return sliced
}
function removeFirstCat(){
    let copyOfCats = cats.slice();
    copyOfCats.shift(); 
    return copyOfCats
}