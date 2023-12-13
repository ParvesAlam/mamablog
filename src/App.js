
import './App.css';
import {UserProvider} from './context/UserContext';
import Layout from './Layout/Layout';


function App() {
  return (
    <UserProvider>
      <Layout/>
    </UserProvider>
 
    
  )
}

export default App;
