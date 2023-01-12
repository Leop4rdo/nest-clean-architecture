
function repeat<T>(callback : (index ?: number) => T, amount : number) {
    const arr = [];

    for (let index = 0; index < amount; index++) {
        arr.push(callback());
    }

    return arr;
}

export default repeat;
