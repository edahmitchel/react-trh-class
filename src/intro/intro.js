export function Intro({ocupation,age,name,sex}) {
    return (
      <div>
        <h1>my name is {name}</h1>
        <p>i am {age} years old</p>
        <p>sex:{sex}</p>
        <p className="colored">ocuppation:{ocupation}</p>
      </div>
    );
  }
