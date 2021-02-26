import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const personName = [
    { name: 'Mofasser Hossain', job: 'Web Designer & Developer' },
    { name: 'Sayed Rabet', job: 'Automobile Engineer' },
    { name: 'Asif Al Mahbub', job: 'Future Doctor' },
    { name: 'Rakibul Islam', job: 'Graphics Designer' },
    { name: 'Mohammad Rayhan', job: 'SEO & Digital Marketer' },
    { name: 'Hafizul Islam Sakib', job: 'Digital Marketer' },
    { name: 'Mahbub Hasan', job: 'Web Designer & Developer' },
    { name: 'AH Nafiz', job: 'Web Designer' },
  ];
  return (
    <div className="App">
      <div className="container">
        <Title title="Friend List And Job"></Title>
        <header className="App-header">
          {personName.map((person) => (
            <Person person={person}></Person>
          ))}
        </header>
        <Counter></Counter>
      </div>
    </div>
  );
}

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Movie</button>
      <button onClick={() => setCount(count - 1)}>Remove Movie</button>
      <h5 style={{ color: 'white' }}>Number of movie : {count}</h5>
      <DisplayMovie count={count * 2}></DisplayMovie>
      <Friends></Friends>
    </div>
  );
};

const DisplayMovie = (props) => {
  return <h3 style={{ color: 'white' }}>Movie Number : {props.count}</h3>;
};

const Person = (props) => {
  const { name, job } = props.person;
  return (
    <div className="grid">
      <h3>Name : {name}</h3>
      <span>job : {job}</span>
    </div>
  );
};

const Title = (props) => {
  return (
    <h3 className="title" key="1">
      {props.title}
    </h3>
  );
};

const Friends = () => {
  // const friend = ['rabet', 'sakib', 'emon', 'asif'];
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFriends(data);
        // console.log(friends);
      });
  }, []);
  return (
    <div>
      <h3>Users Number : {friends.length}</h3>
      <ul style={{ listStyle: 'none', color: 'white' }}>
        {friends.map((friendsName) => (
          <div>
            <li key={friendsName.id}> {friendsName.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
