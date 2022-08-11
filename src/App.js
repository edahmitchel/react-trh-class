import "./App.css";
import Counter from "./counter";

// import {Intro} from "./intro";
// import usersdata from "./usersdata";

function App() {
// let usersUi = usersdata.map(user=><Intro ocupation={user.ocuppation} age={user.age} name={user.name} sex={user.sex}/>)
  return (
    <>
    <div className="App">
      <Counter/>
        <h2>test</h2>
      </div>
    </>
  );
  // {usersUi}
}


export default App;
