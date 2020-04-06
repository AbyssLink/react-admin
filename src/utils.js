export const getTail = (list, amount) => {
  if (amount >= 300) {
    return list;
  } else {
    return list.slice(list.length - amount, list.length);
  }
};
