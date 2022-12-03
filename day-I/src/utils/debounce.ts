export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(fn: T, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>

  return function (...args: Parameters<T>) {
    clearInterval(timer)
    timer = setTimeout(() => fn.apply(args), timeout)
  }
}

