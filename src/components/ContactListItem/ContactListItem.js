import React from "react";
import s from "./ContactListItem.module.css";
import PropTypes from "prop-types";

const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDelete(id)} className={s.btn}>
        Delete
      </button>
    </>
  );
};
ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
