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

export function validateState(state, validation) {
  let isValid = true;

  const validatedState = Object.keys(state).reduce((validatedState, key) => {
    validatedState[key] = _validateKeyValue(key, state[key]);
    return validatedState;
  }, {});

  function _validateKeyValue(key, value) {
    if (validation[key] && validation[key].rules) {
      validation[key].errors = {};

      if (validation[key].rules.required) {
        const isArr = validation[key].rules.arr;

        if ((isArr && value.length === 0) || (!isArr && !value)) {
          // TODO: use lodash to imutably set the errors
          validation[key].errors.required = 'This field is required';
          isValid = false;
        }
      }
    }

    return validation[key];
  }

  return {
    isValid,
    validatedState
  }
}

export function errorsObjToString(errors = {}) {
  return Object.keys(errors).reduce((errorStr, key) => {
    errorStr += errors[key]
    return errorStr 
  }, '');
}

export function createArrFromLength(length) {
  const arr = [];
  
  for (let i = 0; i < length; i++) {
    arr.push(i);
  }

  return arr;
}