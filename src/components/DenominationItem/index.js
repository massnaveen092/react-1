import './index.css'

const Denomination = props => {
  const {denominationDetails, updatebalance} = props
  const {value} = denominationDetails

  const onClickDenomation = () => {
    updatebalance(value)
  }
  return (
    <li>
      <button type="button" className="button" onClick={onClickDenomation}>
        {value}
      </button>
    </li>
  )
}
export default Denomination
