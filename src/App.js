import './App.css';

function App() {
  return (
    <div className="App">
      <button onClick={() => window.location = 'events'}>Go to Events Page</button>
      <button onClick={() => window.location = 'events+users'}>Go to Events+Users Page</button>
      <button onClick={() => window.location = 'users'}>Go to Users Page</button>
    </div>
  );
}

export default App;
