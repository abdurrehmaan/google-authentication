import './App.css';
import { signInWithGoogle } from './services/firebase'


function App() {
  return (
    <div className="App">
      <h1>Google Authentication</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
      <h1>{localStorage.getItem('name')}</h1>  
      <h1>{localStorage.getItem('email')}</h1>  
      <img src={localStorage.getItem('profilePic')}/>
    </div>
  );
}

export default App;
