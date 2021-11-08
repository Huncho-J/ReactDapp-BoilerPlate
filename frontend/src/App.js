import React, {Component} from 'react';
import { Button, Container, Heading} from "@chakra-ui/react"
import { useMoralis } from "react-moralis";
//import MyTodoList from './contract_build/MyTodoList.json';
import {Moralis} from 'moralis'
import './App.css';
import{Login} from './Login.js'

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
      <Login />
      </Container>
    );


}

export default App;
