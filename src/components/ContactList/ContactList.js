import React from "react";
import s from "./ContactList.module.css";
import ContactListItem from "../ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDelete }) => {
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
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
