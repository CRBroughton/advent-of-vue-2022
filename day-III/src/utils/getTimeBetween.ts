export const getTimeBetween = (currentDate: number, targetDate: number) => {
  let dateDelta = Math.abs(targetDate - currentDate) / 1000

  const days = Math.floor(dateDelta / 86400)
  dateDelta -= days * 86400

  const hours = Math.floor(dateDelta / 3600) % 24
  dateDelta -= hours * 3600

  const minutes = Math.floor(dateDelta / 60) % 60
  dateDelta -= minutes * 60

  const seconds = Math.trunc(dateDelta % 60)

  return {
    days,
    hours,
    minutes,
    seconds,
  }
}
