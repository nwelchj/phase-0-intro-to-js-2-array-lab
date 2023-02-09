// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat (cat){
    cats.push(cat); 
}
function  destructivelyPrependCat (cat){
    cats.unshift(cat);
}
function  destructivelyRemoveLastCat (cat){
    cats.pop(cat);
}
function destructivelyRemoveFirstCat (cat){
    cats.shift (cat);
}
function appendCat(cat){
    const allcats = [ ...cats]
    allcats.push(cat);
    return allcats
}
function prependCat (cat){
    const allcats = [ ...cats]
    allcats.unshift(cat);
    return allcats
    
}
function removeLastCat (cat){
    const allcats = [ ...cats]
    allcats.pop(cat);
    return allcats
}
function removeFirstCat (cat){
    const allcats = [ ...cats]
    allcats.shift(cat);
    return allcats
}