import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem";
// import PropTypes from "prop-types";
import deleteContact from "../../redux/contactActions";
//{ contacts, onDelete }
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const onDelete = (id) => dispatch(deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={s.item}>
            <ContactListItem
              name={name}
              number={number}
              id={id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};
// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onDelete: PropTypes.func.isRequired,
// };

export default ContactList;
