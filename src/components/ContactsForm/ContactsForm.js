import { nanoid } from "nanoid";
import PropTypes from 'prop-types'
import style from './contactsform.module.css'
const { Component } = require("react");



class ContactsForm extends Component{
    state={
      name: '',
      number: ''
    }

    handleChangeInput = ({ target }) => this.setState({ [target.name]: target.value })


    handleSubmitForm=(evt)=> {
      evt.preventDefault()
      this.props.saveContact({...this.state, id:nanoid()})
      evt.target.reset()

    }




  render(){
    return (

      <form className={style.formContainer} onSubmit={this.handleSubmitForm}>

        <label className={style.label} htmlFor='Username'>Name</label>
    <input className={style.input}
    onChange={this.handleChangeInput}
  type="text"
  id="Username"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
    />
    <label className={style.label} htmlFor='Usernumber'>Number</label>
    <input  className={style.input}
    onChange={this.handleChangeInput}
    id="Username"
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>

      <button className={style.button} type="submit">Add Contact</button>
    </form>


    )
  }
}
ContactsForm.propTypes = {
  saveContact:PropTypes.func.isRequired,
};

export default ContactsForm
