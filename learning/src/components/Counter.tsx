

interface props{
    count:number
    setCount:React.Dispatch<React.SetStateAction<number>>
}
const Counter = ({count,setCount}:props) => {
     function increment(){
 setCount((prev)=>prev+1)
 }
 function decrement (){
 setCount((prev)=>prev-1)
 }
  return (
   <div>
        <p>{count}</p>
        <div>
          <button onClick={increment}>+</button>
          <button disabled={count===0} onClick={decrement}>-</button>
        </div>
      </div>
  )
}

export default Counter