let callback = function(el){
    console.log(el)
}

Array.prototype.myEach = function(callback){
    this.forEach(el => {
        callback(el);
    });
}

callback = function(el){
    return el * 2;
}

Array.prototype.myMap = function(callback){
    let newArr = [];
    this.forEach(el => {
        newArr.push(callback(el));
    });
    return newArr;
}

// arr = [2, 4, 6]

// console.log(arr.myMap(callback))



Array.prototype.myReduce = function(callback, initialValue){
    let acc = this[0] //assuming no initial value
    let arr = this.slice

    if (initialValue){
        acc = initialValue;
        arr = this;
    }

    arr.myEach(el => {
        acc = callback(acc, el)
    })    
    return acc;
}

callback = function(acc, el){
    return acc + el
}

arr = [2, 4, 6]
console.log(arr.myReduce(callback, 5))