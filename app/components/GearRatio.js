import React from 'react';
import Button from './Button';

function Input(props) {
  return(
    <p>
      <span className="input-label">{props.label}</span>
      <input type="number" className="input" value={props.state} onChange={props.onSet} onFocus={selectAll} />
    </p>
  )
}

function selectAll(event) {
  event.target.select();
}

function maxNumber(number) {
  return (number > 99 ? 99 : number);
}

class GearRatio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chainring: 44,
      cog: 16
    }

    this.handleChainringChange = this.handleChainringChange.bind(this);
    this.handleCogChange = this.handleCogChange.bind(this);
  }

  handleChainringChange(event) {
    let number = maxNumber(event.target.value);
    this.setState({chainring: number});
  }

  handleCogChange(event) {
    let number = maxNumber(event.target.value);
    this.setState({cog: number});
  }

  get ratio() {
    return this.state.chainring / this.state.cog;
  }

  render() {
    return(
      <div className='gearwrap'>
        <div className="contentwrap">
          <div className="formwrap center">
            <form>
              <Input label="Chainring Size" state={this.state.chainring} onSet={this.handleChainringChange} />
              <Input label="Cog Size" state={this.state.cog} onSet={this.handleCogChange} />
            </form>
          </div>
          <p className="result">{+(this.ratio).toFixed(3)}</p>
          <Button handleClick={this.props.setPage.bind(null, 'home')}>Back</Button>
        </div>
      </div>
    );
  }
}

export default GearRatio;
