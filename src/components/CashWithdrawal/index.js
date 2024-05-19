// Write your code here

import {Component} from 'react'

import Denomation from '../DenominationItem'

import './index.css'

class CashWithdraw extends Component {
  state = {
    balance: 2000,
  }

  updatebalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denomationList} = this.props
    const {balance} = this.state
    const name = 'Sarah Willams'
    const initial = name.slice(0, 1)

    return (
      <div>
        <h1 className="heading">{initial}</h1>
        <div>
          <p className="paragraph">Your Balance</p>
          <div>
            <p className="paragraph">{balance}</p>
            <p className="paragraph">In Rupees</p>
          </div>
        </div>
        <h1 className="heading">WithDraw</h1>
        <h1 className="heading2">CHOOSE SUM (IN RUPEES)</h1>
        <ul>
          {denomationList.map(each => (
            <Denomation
              key={each.id}
              denominationDetails={each}
              updatebalance={this.balance}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdraw
