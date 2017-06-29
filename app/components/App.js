import React from 'react';
import Content from './Content';
import Button from './Button';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      content: true
    }

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent(e) {
    if (this.state.content === true) {
      return this.setState({content: false});
    } else {
      return this.setState({content: true});
    }
  }

  render () {
    return (
      <div>
        {this.state.content === true &&
          <Content />
        }
        <Button handleClick={this.toggleContent} />
      </div>
    )
  }
}

export default App;
