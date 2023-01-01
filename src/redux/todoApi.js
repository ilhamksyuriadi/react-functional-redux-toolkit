import axios from "axios";

export const getTodos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos'
    await axios.get(url)
        .then(res => res)
        .catch(err => err)
}