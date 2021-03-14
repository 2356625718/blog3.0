const debounce = (fn: Function, time: number) => {
  let _self: any = fn
  let cl: any
  return function () {
    clearTimeout(cl)
    cl = setTimeout(() => {
      fn.call(_self)
    }, time)
  }
}

export {debounce}