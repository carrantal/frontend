import React from "react";

export default function Input({
  label = "Label",
  type = "text",
  placeholder = "placeholder",
  error = "",
  register,
}) {
  const id = label.toLowerCase().replace(" ", "_");
  return (
    <div className="form-group">
      <label htmlFor={id} className="fs-9 text-white">
        {label}
      </label>
      <input
        {...register}
        type={type}
        className="fs-14 form-control-sm form-control"
        id={id}
        placeholder={placeholder}
      />
      {error && (
        <small className="form-text is-invalid" style={{ color: "#dc3545" }}>
          This field is requried
        </small>
      )}
    </div>
  );
}
