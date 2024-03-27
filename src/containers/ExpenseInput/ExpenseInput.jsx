import { useDispatch } from "react-redux";
import style from "./style.module.css";
import { addExpense } from "store/expense/expense-slice";
import { ValidatorService } from "services/form-validators";
import { useState } from "react";
import FieldError from "components/FieldError/FieldError";
import { v4 as uuid } from "uuid";

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

  function checkErrors(e) {
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
      const price = formData.get("price");
      const id = uuid();
      console.log(id);
      dispatch(addExpense({ id, name, price }));
    }
  }

  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-5">
          <input
            type="text"
            className="form-control"
            placeholder='Ex : "Apple"'
            name="name"
            onChange={checkErrors}
          />
          <FieldError msg={formErrors.name} />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-5">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Ex: 3.99"
            name="price"
            onChange={checkErrors}
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
