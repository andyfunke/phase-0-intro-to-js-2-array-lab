// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const catsCopy = [...cats,name];
    // catsCopy.push(name);
    return catsCopy;
}

function prependCat(name){
        const catsCopy = [name,...cats];
        return catsCopy;
}

function removeLastCat(name){
    const catsCopy = [...cats];
    catsCopy.pop();
    return catsCopy;
}

function removeFirstCat(name){
    return cats.slice(1);
}