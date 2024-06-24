import logo from './logo.svg';
import './App.css';
import {useState , useEffect} from 'react';
import axios from 'axios'

function App() {

   const [users, setUsers] = useState([])
   const [filterText , setFilterText] = useState('');

   useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      console.log(response.data)
      setUsers(response.data)
    })
     
   }, [])

   const handleChange = (event) =>{
    setFilterText(event.target.value)
   }

   const filteredUsers = users.filter((user)=>
    user.name.toLowerCase().includes(filterText.toLowerCase())
   )
   

  return (
    <div className="container">
      <input type='text'
      value={filterText}
      onChange={handleChange}/>

      <ul>
        {filteredUsers.map((user)=>(
         <li > {user.name}</li>
        )
        )}
      </ul>
    </div>
  );
}

export default App;
