import React from 'react';
import Button from './Button';
import Home from './Home';
import GearRatio from './GearRatio'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'home'
    }
    this.setPage = this.setPage.bind(this);
  }

  setPage(pagename) {
    this.setState({
      page: pagename
    });
  }

  render () {
    let page = this.state.page;
    let page_component = null;
    if(page === 'home') {
      page_component = <Home setPage={this.setPage} />
    } else if(page === 'gear') {
      page_component = <GearRatio setPage={this.setPage} />
    }
    return (
      <div className='homewrap'>
        {page_component}
      </div>
    )
  }
}

export default App;
