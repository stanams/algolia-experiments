export function debounce(func, wait, immediate) {
  let timeout
  return function() {
    let context = this
    let args = arguments
    let later = function() {
      timeout = null
      if (!immediate) {
        func.apply(context, args)
      }
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) {
      func.apply(context, args)
    }
  }
}

export function truncate(string, maxLength) {
  if (string.length > maxLength){
    return string.substring(0, maxLength) + '...'
  } else {
    return string
  }
}