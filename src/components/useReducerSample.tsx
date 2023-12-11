import { useReducer } from "react";

// reducerが受け取るactionの型を定義します
type Action =  { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'DOUBLE' } | { type: 'RESET' }

// 現在の状態とactionに基づいて次の状態を返します
const reducer = (currentCount: number, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default :
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  const [count, dispatch] = useReducer(reducer,initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DOUBLE' })}>✖2</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default Counter