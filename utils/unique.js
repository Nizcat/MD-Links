

module.exports = function unique(urlArrays) {
    let unique = [...new Set(urlArrays.map(item => item.href))];
    return (unique.length)
}

