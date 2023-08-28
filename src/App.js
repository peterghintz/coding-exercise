import React from 'react';
import axios from 'axios';
import './App.css';

var dataSource = 'https://jsonplaceholder.typicode.com/users';

var UserCard = ({ user }) => {
  return (
    <p className="card"><strong>Name: </strong>{user.name} <strong>Email: </strong>{user.email} <strong>Company:</strong> {user.company.name}</p>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchText: '',
    };
  }

  componentDidMount() {
    axios(dataSource).then(response => { this.setState({ users: response.data }) });
  };

  render() {
    return (
      <div class="cardWrapper">
        <p className="card-heading">List of Users</p>
        <p style={{ display: 'inline' }}>Search text: </p>
        <input value={this.state.searchText} onChange={e => {this.setState({ searchText: e.target.value })}}/>
        <div className="card_container">                         
          {this.state.users.filter(user => user.name.indexOf(this.state.searchText) > -1).map(user => <UserCard user={user} />)}
        </div>
      </div>
    );
  }
}

export default App;