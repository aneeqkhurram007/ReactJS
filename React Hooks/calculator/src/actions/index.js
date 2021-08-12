export const incNumber = (num) => { return { type: "INCREMENT", payload: num } }
export const decNumber = (num) => { return { type: "DECREMENT", payload: num } }
export const mulNumber = (num) => { return { type: "MULTIPLY", payload: num } }
export const divNumber = (num) => { return { type: "DIVIDE", payload: num } }