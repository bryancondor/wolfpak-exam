const sliceBySize = (size, array) => {
    const data = [];

    for (let index = 0; index < array.length; index += size) {
        const partArray = array.slice(index, index + size);
        data.push(partArray);
    }

    return data;
}

module.exports = { sliceBySize };