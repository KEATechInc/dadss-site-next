export const DateHandler = (date) => {
  let year = date.slice(0, 4)
  let month = date.slice(5, 7)
  let day = date.slice(8, 10)

  let newDate = `${month}-${day}-${year}`

  return newDate
}

export default DateHandler
