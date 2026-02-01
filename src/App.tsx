import { useImmer } from 'use-immer'

export default function Counter() {
  const [count, setCount] = useImmer(0)
  const [isVisible, setIsVisible] = useImmer(true)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="counter">
      {isVisible && (
        <>
          <h2>计数器: {count}</h2>
          <div className="controls">
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>重置</button>
          </div>
        </>
      )}
      <button onClick={toggleVisibility}>
        {isVisible ? '隐藏' : '显示'}计数器
      </button>
    </div>
  )
}