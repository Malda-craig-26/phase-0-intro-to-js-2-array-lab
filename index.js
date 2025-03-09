// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');
function destructivelyAppendCat() {
    cats.push('Ralph');
}
cats; 
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name];

}
function prependCat(name) {
   return [name, ...cats];
}
[ Array(4) ];
function removeLastCat() {
    return cats.slice(0, -1); 
  }
  function removeFirstCat() {
    return cats.slice(1);
  }
  
    

