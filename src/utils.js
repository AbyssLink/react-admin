export const getTail = (list, amount) => {
  if (amount >= 150) {
    return list;
  } else {
    return list.slice(list.length - amount, list.length);
  }
};
