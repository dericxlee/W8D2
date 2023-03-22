Array.prototype.uniq = function(){
     let newArr = [];
     this.forEach(el => {
        if (!newArr.includes(el)){
            newArr.push(el);
        } 
     });
     return newArr;
}


// arr = [1,2,2,3,3,3]
// console.log(arr.uniq())

// Array.prototype.twoSum = function(){
//     let newArr = [];
//     let i = 0;
//     while (i < this.length){
//         el1 = this[i];
//         el2 = this[i+1];
//         if (el1 + el2 === 0){
//             newArr.push([i, i+1]);
//         }
//         i++;
//     }
//     return newArr;
// }

Array.prototype.twoSum = function(){
    let newArr = [];
    for (let i = 0; i < this.length; i++){
        for(let j = i+1; j < this.length; j++){
            if (this[i] + this[j] === 0){
                newArr.push([i, j]);
            }
        }
    }
    return newArr;
}


Array.prototype.transpose = function(){
    let newArr = [];
    let row = this[0].length;
    let col = this.length;
    for(let i = 0; i < row; i += 1){
        let subArr = [];
        for(let j = 0; j < col; j += 1){
            subArr.push(this[j][i]);
        }
        newArr.push(subArr);
    }
    return newArr;
}

// arr = [[1, 2], [4, 5]]
// console.log(arr.transpose())

