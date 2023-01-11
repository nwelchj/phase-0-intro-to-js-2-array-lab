// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
  cats.push (name);
}

function destructivelyPrependCat(name){
  cats.unshift (name)
}
function  destructivelyRemoveFirstCat(name){
  cats.shift(name)
}

function destructivelyRemoveLastCat(name){
  cats.pop(name)
}

function appendCat (name){
  const cats1=[...cats];
  cats1.push(name)
}

function prependCat(name){

}

function removeLastCat(){

}
function removeFirstCat(){



}