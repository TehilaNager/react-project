function Input({ label, error, ...rest }) {
  return (
    <div className={rest.type != "checkbox" ? "form-floating" : ""}>
      <input
        className={[
          rest.type != "checkbox"
            ? "form-control"
            : "form-check-input me-2 mb-4",
          error ? "is-invalid" : "",
        ].join(" ")}
        id={rest.name}
        {...rest}
      />
      <label htmlFor={rest.name}>
        {label} {rest.required ? <span className="text-danger">*</span> : null}
      </label>

      <div className="invalid-feedback">{error}</div>
    </div>
  );
}

export default Input;
