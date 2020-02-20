
exports.min = function min (array) {
  if (Array.isArray(array)){
    return array.length === 0 ? 0 : Math.min(...array);
  }
  return 0;
}

exports.max = function max (array) {
  if (Array.isArray(array)){
    return array.length === 0 ? 0 : Math.max(...array);
  }
  return 0;
}

exports.avg = function avg (array) {
  if(Array.isArray(array)){
  return array.length === 0 ? 0 : array.reduce((akk, el) => {
    return akk + el;
  }, 0)/array.length
}
  else return 0;
}
