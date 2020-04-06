export const getTail = (list, amount) => {
  if (amount >= list.length) {
    return list;
  } else {
    return list.slice(list.length - amount, list.length);
  }
};
