// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

console.log(removeLastCat(cats));
removeFirstCat(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const AppendedCat = cats.slice();
    AppendedCat.push(name);
    return AppendedCat;
}

function prependCat(name) {
    const PrependedCat = cats.slice();
    PrependedCat.unshift(name);
    return PrependedCat;
}

function removeLastCat() {
    const LastCatRemoved = cats.slice();
    LastCatRemoved.pop();
    return LastCatRemoved;
}

function removeFirstCat() {
    const FirstCatRemoved = cats.slice();
    FirstCatRemoved.shift();
    return FirstCatRemoved;
}