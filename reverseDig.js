function reverse(arr) {
    let revArr = [];
    for (let i = 0; i < arr.length; i++) {
        let rev = (arr[i].reverse());
        revArr.push(rev);
    }
    return revArr;
}

console.log(reverse([12,23,54]));

