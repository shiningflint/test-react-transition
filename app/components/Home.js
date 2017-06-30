import React from 'react';
import Button from './Button';

class Home extends React.Component {

  render() {
    return(
      <div className='homecontent'>
        <Button handleClick={this.props.setPage.bind(null, 'gear')}>Gear Ratio</Button>
        <Button handleClick={this.props.setPage.bind(null, 'currency')}>JPY to IDR</Button>
        <Button handleClick={this.props.setPage.bind(null, 'date')}>Today's Date</Button>
      </div>
    );
  }
}

export default Home;
