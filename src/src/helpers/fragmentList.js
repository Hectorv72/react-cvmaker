export default (list, num) => {
  const newList = []
  while (list.length > 0) {
    newList.push(list.splice(0, num))
  }
  return newList
}