import React, {Component} from 'react';
import { Button, Container, Heading} from "@chakra-ui/react"
import { useMoralis } from "react-moralis";
//import MyTodoList from './contract_build/MyTodoList.json';
import {Moralis} from 'moralis'
import './App.css';
import{MyTodo} from './MyTodo.js'

function App() {
  const {isAuthenticated,logout } = useMoralis();

  if (isAuthenticated) {
    return (
      <Container>
        <Heading>Welcome</Heading>
        <Button onClick={() => logout()}>Logout</Button>
      </Container>
    );
  }

    return (
      <Container>
      <MyTodo />
      </Container>
    );


}

export default App;
