import "./App.css";

function App() {
  return (
    <>
    <div className="App">
    <Intro
    name="uyai"
    email="segun@gmail.com"
    age = {4}/>
     <Intro
    name="etimbuk"
    email="posi@gmail.com"
    age = {9}/>
        <h2>test</h2>
      </div>
    </>
  );
}

function Intro({email,age,name}) {
  return (
    <div>
      <h1>my name is {name}</h1>
      <p>i am {age} years old</p>
      <p>email:{email}</p>
    </div>
  );
}

export default App;
