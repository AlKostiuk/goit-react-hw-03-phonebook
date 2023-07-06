import PropTypes from 'prop-types'
import style from './filter.module.css'


const Filter = ({ filterContacts}) => {
  return (
    <>
      <label className={style.label} htmlFor="filter"></label>
      <input className={style.input} placeholder='Find contacts by name' onChange={filterContacts} id="filter" type="text" />
    </>

  )
}

Filter.propTypes = {
  filterContacts: PropTypes.func.isRequired
}

export default Filter
