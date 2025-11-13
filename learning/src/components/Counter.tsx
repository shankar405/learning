
import { useAppSelector, useAppDispatch } from '../app/hook'

import { decrement, increment } from '../features/counter/counterSlice'
const Counter = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
   <div>
        <p>{count}</p>
        <div className='flex flex-col gap-4'>
          <button onClick={()=>dispatch(increment())}>+</button>
          <button disabled={count===0}  onClick={()=>dispatch(decrement())}>-</button>
        </div>
      </div>
  )
}

export default Counter