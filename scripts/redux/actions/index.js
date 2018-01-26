

export const counterADD = () => {
  return {
    type: 'COUNTER_ADD',
  }
}

export const counterSUBTRACT = () => {
  return {
    type: 'COUNTER_SUBTRACT',
  }
}

export const textCHANGE = newtext => {
  console.log('value of newtext is ', newtext);
  return{
    type: 'TEXT_CHANGE',
    text: newtext
  }
}
