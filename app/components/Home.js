import React from 'react';
import Button from './Button';

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      page: 'home',
    }
    this.setPage = this.setPage.bind(this);
  }

  logClick(e) {
    console.log(e.target);
  }

  setPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  render() {
    let page = this.state.page;
    if(page === 'home') {
      var buttons = [
        <Button key='gear' handleClick={this.setPage.bind(null, 'gear')}>Gear Ratio</Button>,
        <Button key='currency' handleClick={this.setPage.bind(null, 'currency')}>JPY to IDR</Button>,
        <Button key='date' handleClick={this.setPage.bind(null, 'date')}>Today's Date</Button>
      ];
    } else if(page === 'gear') {
      var buttons = [<Button key='gear' handleClick={this.setPage.bind(null, 'gear')}>Gear Ratio</Button>,];
    } else if(page === 'currency') {
      var buttons = [<Button key='currency' handleClick={this.setPage.bind(null, 'currency')}>JPY to IDR</Button>,];
    } else if(page === 'date') {
      var buttons = [<Button key='date' handleClick={this.setPage.bind(null, 'date')}>Today's Date</Button>,];
    } else {
      var buttons = ["bananas"]
    }
    return(
      <div className='homecontent'>
        {buttons && buttons.map((button) => {return button})}
      </div>
    );
  }
}

export default Home;
