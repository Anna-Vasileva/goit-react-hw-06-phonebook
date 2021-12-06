import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";

function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const reset = () => {
    setName("");
    setNumber("");
  };
  const handleChange = (event) => {
    switch (event.currentTarget.name) {
      case "name":
        setName(event.currentTarget.value);
        break;
      case "number":
        setNumber(event.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({ name, number });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
            id={uuidv4()}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <label className={s.label}>
          Number
          <input
            id={uuidv4()}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
// class OldContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   static propTypes = {
//     onSubmit: PropTypes.func.isRequired,
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };
//   handleChange = (event) => {
//     this.setState({ [event.currentTarget.name]: event.currentTarget.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   render() {
//     // const idName = uuidv4();
//     // const idNumber = uuidv4();
//     return (
//       <>
//         <form onSubmit={this.handleSubmit} className={s.form}>
//           <label className={s.label}>
//             Name
//             <input
//               id={uuidv4()}
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//               required
//               value={this.state.name}
//               onChange={this.handleChange}
//               className={s.input}
//             />
//           </label>
//           <label className={s.label}>
//             Number
//             <input
//               id={uuidv4()}
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//               required
//               value={this.state.number}
//               onChange={this.handleChange}
//               className={s.input}
//             />
//           </label>
//           <button type="submit" className={s.btn}>
//             Add contact
//           </button>
//         </form>
//       </>
//     );
//   }
// }
