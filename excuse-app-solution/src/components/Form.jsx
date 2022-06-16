import React from "react";

const Form = ({ handleChange,number }) => {
  return (
    <form style={{ width: "20%", margin:"auto"}}>
      <div className="input-group mb-3">
        <h3>Choose An excuse based on a Category</h3>
        <label className="input-group-text">
          Options
        </label>
        <select
          name="select"
          className="form-select"
          id="inputGroupSelect01"
          onChange={handleChange}
        >
          <option value={"random"}>Random</option>
          <option value="family">Family</option>
          <option value="office">Office</option>
          <option value="children">Children</option>
          <option value="college">College</option>
          <option value="party">Party</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Do you need more Excuses?
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleInputPassword1"
          name="number"
          value={number}
          min={1}
          max={10}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default Form;
