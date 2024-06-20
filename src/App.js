
import Users from "./Users";
import Login from "./Login";


export const Introduction = () =>{
  return(
   <h1> We are AdaLab</h1>
  )
}


const App = () => {
  return (
    <div>
      <Login/>
      <Users/>
    </div>
  );
};


export default App;