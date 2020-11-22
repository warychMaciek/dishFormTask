import React from 'react';
import Form from './Components/Form';

class App extends React.Component {

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} /> 
      </>
    );
  }
}

export default App;
