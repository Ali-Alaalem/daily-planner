// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'cleaning', completed: true },
    { name: 'watching TV', completed: false },
    { name: 'Go to cenima', completed: true },
  ];

  return (
    <>
      <h1>Daily Tasks List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : 'not-completed`'}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;