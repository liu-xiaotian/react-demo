import { useImmer } from 'use-immer'

interface Todo {
  id: number
  text: string
  completed: boolean
}

export default function TodoList() {
  const [todos, setTodos] = useImmer<Todo[]>([])

  const addTodo = (text: string) => {
    setTodos(draft => {
      draft.push({
        id: Date.now(),
        text,
        completed: false
      })
    })
  }

  const toggleTodo = (id: number) => {
    setTodos(draft => {
      const todo = draft.find(t => t.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    })
  }

  const removeTodo = (id: number) => {
    setTodos(draft => {
      const index = draft.findIndex(t => t.id === id)
      if (index > -1) {
        draft.splice(index, 1)
      }
    })
  }

  const clearCompleted = () => {
    setTodos(draft => {
      return draft.filter(todo => !todo.completed)
    })
  }

  return (
    <div className="todo-list">
      <h2>待办事项 ({todos.length})</h2>
      
      <div className="add-todo">
        <input 
          type="text" 
          placeholder="添加新待办..."
          onKeyPress={(e) => {
            if (e.key === 'Enter' && e.currentTarget.value.trim()) {
              addTodo(e.currentTarget.value.trim())
              e.currentTarget.value = ''
            }
          }}
        />
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>

      {todos.some(t => t.completed) && (
        <button onClick={clearCompleted}>清除已完成</button>
      )}
    </div>
  )
}