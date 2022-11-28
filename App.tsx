import * as React from 'react';
import './style.css';

export default function App() {
  const [isCon, setIscon] = React.useState(false);
  const [formObject, setFormObject] = React.useState({
    userName: '',
    fullName: '',
    age: null,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setIscon(true);
    console.log(formObject.userName, formObject.fullName, formObject.age);
  };
  return (
    <div className="App">
      <form>
        <label>userName</label>:{' '}
        <input
          type="text"
          onChange={(e) =>
            setFormObject({ ...formObject, userName: e.target.value })
          }
        ></input>{' '}
        <br />
        <label>Full name</label>:{' '}
        <input
          type="text"
          onChange={(e) =>
            setFormObject({ ...formObject, fullName: e.target.value })
          }
        ></input>{' '}
        <br />
        <label>Age</label>:{' '}
        <input
          type="number"
          onChange={(e) =>
            setFormObject({ ...formObject, age: e.target.value })
          }
        ></input>{' '}
        <br />
        <button onClick={handleSubmit}>Submit</button>
        {isCon && (
          <div>
            <p>Request sent to DB:</p>
            <ul>
              <li>{formObject.userName}</li>
              <li>{formObject.fullName}</li>
              <li>{formObject.age}</li>
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}
