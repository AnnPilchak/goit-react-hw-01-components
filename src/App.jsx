import React from 'react';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import users from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <Container>
      <Profile users={[users]}></Profile>
      <Statistics title="Upload stats" stats={data}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </Container>
  );
};

export default App;
