import axios from "axios";

export async function getStaticProps(){
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const todos = await response.json();

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.data;

    return{
        props: {todos}
    }
}

export default function Todos({todos}){
    return(
        <>
            <h1>Teste</h1>
            {todos.map(todo=> <div key={todo.id}>{todo.title}</div>)}
        </>
    )
}