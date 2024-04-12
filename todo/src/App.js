import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import {BsTrash, BsBookmarCheck, BsBookmarkCheckFill} from "react-icons/bs"

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async() => {
      setLoading(true)

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => err)
    
      setLoading(false)
      setTodos(res)
    }
    loadData()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todo = {
      id: Math.random(),
      title,
      time,
      done:false
    }
    
    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type" : "application/json",
      },
    })

    setTodos((prevState) => [...prevState, todo])
    setTime("")
    setTitle("")
  }

  return (
    <div className="App">
      <div className='todo-header'>
        <h1>React todo</h1>
      </div>
      <div className='form-todo'>
        <p>Insira sua proxima tarefa:</p>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='title'>Oq vc vai fazer</label>
            <input type='text' name='title' placeholder='Titulo da tarefa' onChange={(e)=>setTitle(e.target.value)} value={title || ""} required></input>
          </div>
          <div className='form-control'>
            <label htmlFor='time'>Duracao</label>
            <input type='text' name='time' placeholder='Tempo estimado' onChange={(e)=>setTime(e.target.value)} value={time || ""} required></input>
          </div>
          <input type="submit" value={"Criar tarefa"}></input>
        </form>
        
      </div>
      <div className='list-todo'>
        <p>Lista de tarefas:</p>
        {todos.length === 0 && <p>Nao ha tarefas</p>}
        {todos.map((todo) => (
          <div key={todo.id}>
            <h3>{todo.title}</h3>
            <p>Tempo estimado: {todo.time}</p>
            <p>Concluida? {todo.done}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
