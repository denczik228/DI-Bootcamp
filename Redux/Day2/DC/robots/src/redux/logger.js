export const myLogger = (store) => (next) => (action) => {
  // console.log(store)
  console.log('previous state =>', store.getState())
  console.log('action =>', action)
  next(action)
  console.log('next state =>',store.getState())

  next(action)
}