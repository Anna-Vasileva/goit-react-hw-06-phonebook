import React from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Filter.module.css";
import PropTypes from "prop-types";
import changeFilter from "../../redux/contactActions";
//{ filter, changeFilter }
const Filter = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(()=>changeFilter());
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={s.input}
      ></input>
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
