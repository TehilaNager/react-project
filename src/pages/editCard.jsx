import { useFormik } from "formik";
import { useLocation } from "react-router";

function EditCard() {
  const location = useLocation();
  const card = location.state;

  const {} = useFormik({
    initialValues: card,
  });

  return <div>{card?.title}</div>;
}

export default EditCard;
