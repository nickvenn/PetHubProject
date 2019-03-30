import React from "react";

function Form({ zipcode, PetType, Gender, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Zipcode</strong>
        </label>
        <input
          className="form-control"
          id="Zip"
          type="text"
          value={zipcode}
          placeholder="Zip Code"
          name="zipcode"
          onChange={handleInputChange}
          required
        />
        <label htmlFor="Query">
          <strong>Pet Type</strong>
        </label>
        <select
          className="form-control"
          id="pet"
          type="text"
          value={PetType}
          name="PetType"
          onChange={handleInputChange}
          required>
          <option>Dog</option>
          <option>Cat</option>
        </select>

        <label htmlFor="Query">
          <strong>Gender</strong>
        </label>
        <select
          className="form-control"
          id="pet"
          type="text"
          value={Gender}
          name="Gender"
          onChange={handleInputChange}
          required>
          <option>Male</option>
          <option>Female</option>
        </select>

      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
