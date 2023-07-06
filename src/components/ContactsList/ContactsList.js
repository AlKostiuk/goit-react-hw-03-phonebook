import PropTypes from 'prop-types'
import style from './contactlisy.module.css'

const ContactsList = ({ contacts, deleteContact }) => {
  if (!contacts.length) {
    return <p>No contacts</p>;
  }

  return (
    <ul className={style.ulcontainer}>
      {contacts.map(contact => (
        <li className={style.li} key={contact.id}>
          {`${contact.name}: ${contact.number}`}
          <button className={style.btn} onClick={() => deleteContact(contact.id)} type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
}

export default ContactsList;
