import React from 'react';
import './App.css';

const personName = [
  { name: 'Mofasser Hossain', job: 'Web Designer & Developer' },
  { name: 'Sayed Rabet', job: 'Automobile Engineer' },
  { name: 'Asif Al Mahbub', job: 'Future Doctor' },
  { name: 'Rakibul Islam', job: 'Graphics Designer' },
  { name: 'Mohammad Rayhan', job: 'SEO & Digital Marketer' },
  { name: 'Hafizul Islam Sakib', job: 'Digital Marketer' },
  { name: 'Mahbub Hosan', job: 'Web Designer & Developer' },
  { name: 'AH Nafiz', job: 'Web Designer' },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <Title title="Friend List And Job"></Title>
        <header className="App-header">
          {personName.map((person) => (
            <Person person={person}></Person>
          ))}
        </header>
      </div>
    </div>
  );
}

function Person(props) {
  console.log(props);
  const { name, job } = props.person;
  return (
    <div className="grid">
      <h3>Name : {name}</h3>
      <span>job : {job}</span>
    </div>
  );
}

function Title(props) {
  return <h3 className="title">{props.title}</h3>;
}

export default App;
