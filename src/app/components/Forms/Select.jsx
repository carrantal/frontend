import React from "react";

export default function Select({ label, placeholder, register }) {
  const id = label.toLowerCase().replace(" ", "_");
  return (
    <div class="form-group">
      <label for={id} className="fs-9 text-white">
        {label}
      </label>
      <select
        class="form-control fs-12"
        placeholder={placeholder}
        {...register}
      >
        <option value={"local"}>Local</option>
        <option value={"international"}>International</option>
      </select>
    </div>
  );
}
