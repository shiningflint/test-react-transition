import React from 'react';
import Content from './Content';
import Button from './Button';
import { CSSTransitionGroup } from 'react-transition-group';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      content: true
    }

    this.toggleContent = this.toggleContent.bind(this);
  }

  toggleContent(e) {
    return this.setState({content: !this.state.content});
  }

  render () {
    return (
      <div>
        <CSSTransitionGroup
          transitionName='contentanim'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
          >
        {this.state.content === true &&
          <Content key="bananakey" />
        }
        </CSSTransitionGroup>
        <Button handleClick={this.toggleContent} />
      </div>
    )
  }
}

export default App;
