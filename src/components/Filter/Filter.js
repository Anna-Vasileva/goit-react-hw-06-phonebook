import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Filter.module.css";
// import PropTypes from "prop-types";
import changeFilter from "../../redux/contactActions";
import { getFilter } from "../../redux/contactSelector";
//{ filter, changeFilter }
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = (e) => dispatch(changeFilter(e.currentTarget.value));

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className={s.input}
      ></input>
    </label>
  );
};
// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

export default Filter;
