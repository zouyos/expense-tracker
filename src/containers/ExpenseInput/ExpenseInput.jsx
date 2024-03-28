import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { addExpense } from "store/expense/expense-slice";
import { ValidatorService } from "services/form-validators";
import { useState } from "react";
import FieldError from "components/FieldError/FieldError";

export function ExpenseInput() {
  const dispatch = useDispatch();
  const VALIDATORS = {
    name: (value) => {
      return ValidatorService.min(value, 2) || ValidatorService.max(value, 20);
    },
    price: (value) => {
      return ValidatorService.positive(value) || ValidatorService.number(value);
    },
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // on set les erreurs à string vide au lieu de undefined pour disable le bouton au début
  const [formErrors, setFormErrors] = useState({
    name: "",
    price: "",
  });

  function validate(fieldName, fieldValue) {
    setFormErrors({
      ...formErrors,
      [fieldName]: VALIDATORS[fieldName](fieldValue),
    });
  }

  function handleNameChange(e) {
    setName(e.target.value);
    validate(e.target.name, e.target.value);
  }

  function handlePriceChange(e) {
    const inputValue = e.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(inputValue)) {
      setPrice(inputValue);
    }
    validate(e.target.name, e.target.value);
  }

  function hasErrors() {
    return Object.values(formErrors).some((err) => err !== undefined);
  }

  function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!hasErrors()) {
      const name = formData.get("name");
      const price = parseFloat(formData.get("price"));
      dispatch(addExpense({ name, price }));
      setName("");
      setPrice("");
      setFormErrors({
        name: "",
        price: "",
      });
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder='Ex: "Apple"'
            name="name"
            value={name}
            onChange={handleNameChange}
          />
          <FieldError msg={formErrors.name} />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-4">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            value={price}
            onChange={handlePriceChange}
          />
          <FieldError msg={formErrors.price} className="text-wrap" />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-3">
          <button
            type="submit"
            className={`btn btn-primary ${style.btn}`}
            disabled={hasErrors()}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
