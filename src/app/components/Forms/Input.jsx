import React from "react";

export default function Input({
  label = "Label",
  type = "text",
  placeholder = "placeholder",
  error = "",
}) {
  const id = label.toLowerCase().replace(" ", "_");
  return (
    <div class="form-group">
      <label for={id} className="fs-9 text-white">
        {label}
      </label>
      <input
        type={type}
        class="fs-14 form-control-sm form-control"
        id={id}
        placeholder={placeholder}
      />
      {error && (
        <small class="form-text is-invalid" style={{ color: "#dc3545" }}>
          This field is requried
        </small>
      )}
    </div>
  );
}
