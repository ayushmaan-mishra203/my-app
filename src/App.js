import  './page.html';
import './App.css';

function RedirectToNewPage() {
  window.location.assign('/page.html');
}



function App() {
  return (
    <div className="App">
      
     <div class="box">
    
    <h1 className="h1" >Login</h1>
    <input className="input1" type="text" placeholder="Username"/>
    <input className="input2" type="password" placeholder="Password"/>
    <button className="button" onClick={RedirectToNewPage}>Enter Marketplace</button>
    <span class="textbutton">Create An Account</span>
    <h4 class="text">Dont have an account??</h4>

   </div>   
    </div>
  );
}

export default App;
