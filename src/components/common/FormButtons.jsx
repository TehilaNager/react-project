import { useNavigate } from "react-router";

function FormButtons({ onReset, ...rest }) {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{ gridTemplateColumns: "1fr 1fr" }}
        className="d-grid gap-3 mt-2"
      >
        <button
          onClick={() => navigate("/")}
          type="button"
          className="btn-Cancel p-1 text-danger border border-danger rounded-1"
        >
          Cancel
        </button>
        <button
          onClick={onReset}
          type="button"
          className="btn-refresh bi bi-arrow-clockwise p-1 text-primary border border-primary rounded-1"
        ></button>
      </div>

      <button
        type="submit"
        className="btn w-100 my-3 border-0 p-2 rounded-1 bg-primary text-white"
        {...rest}
      >
        Submit
      </button>
    </div>
  );
}

export default FormButtons;
