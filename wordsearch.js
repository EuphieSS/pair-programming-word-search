const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  };

  const transpose = function(matrix) {
    let newMatrix = [];
    const loopCount = matrix[0].length;
    let x = 0;
    while (x < loopCount) {
      let innerArr = [];
      for (let i = 0; i < matrix.length; i++) {
        innerArr.push(matrix[i].shift());
      }
      x++;
      newMatrix.push(innerArr);
    }
    return newMatrix;
  };

  const verticalArr = transpose(letters);
  const verticalJoin = verticalArr.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  };

  return false;
};

module.exports = wordSearch