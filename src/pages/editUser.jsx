import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";
import FormButtons from "../components/common/FormButtons";
import validateEditUser from "../helpers/validateEditUser";
import { useAuth } from "../context/authContext";
import normalValuesEditUser from "../helpers/normalValesEditUser";
import usersService from "../services/usersService";
import { questionFeedback } from "../helpers/feedback";

function EditUser() {
  const [serverError, setServerError] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const { user, updateUser, updateTypeUser } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const { handleSubmit, getFieldProps, errors, isValid, resetForm, setValues } =
    useFormik({
      initialValues: {
        first: "",
        middle: "",
        last: "",
        phone: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
        isBusiness: false,
      },
      validateOnMount: true,
      validate: (values) => {
        const schema = validateEditUser();
        const { error } = schema.validate(values, { abortEarly: false });
        if (!error) {
          return null;
        }

        const errors = {};
        for (const detail of error.details) {
          errors[detail.path[0]] = detail.message;
        }

        return errors;
      },
      onSubmit: async (values) => {
        try {
          const normalUser = normalValuesEditUser(values);

          const confirm = await questionFeedback("Changes saved successfully.");
          if (confirm) {
            await updateUser(id, normalUser);
            await updateTypeUser(id);
            navigate(-1);
          }
        } catch (err) {
          if (err.status === 400) {
            let message = err.response.data;
            message = message.replace("Joi Error:", "");
            setServerError(message);
          }
        }
      },
    });

  useEffect(() => {
    const fetchData = async () => {
      const data = await usersService.getUserById(id);
      setCurrentUser(data);
      setValues({
        first: data?.name.first || "",
        middle: data?.name.middle === "not defined" ? "" : data?.name.middle,
        last: data?.name.last || "",
        phone: data?.phone || "",
        url: data?.image.url === "not defined" ? "" : data?.image.url,
        alt: data?.image.alt === "not defined" ? "" : data?.image.alt,
        state: data?.address.state === "not defined" ? "" : data?.address.state,
        country: data?.address.country || "",
        city: data?.address.city || "",
        street: data?.address.street || "",
        houseNumber: data?.address.houseNumber || "",
        zip: data?.address.zip || "",
        isBusiness: Boolean(data?.isBusiness),
      });
    };
    fetchData();
  }, [id]);

  if (!currentUser) {
    return <div>No found user.</div>;
  }

  return (
    <div className="container col-11 col-md-7">
      <PageHeader title="Edit User" classNameTitle="my-4 text-center" />

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div
          style={{ gridTemplateColumns: "1fr 1fr" }}
          className="d-grid gap-3"
        >
          <Input
            {...getFieldProps("first")}
            error={errors.first}
            label="First name"
            type="text"
            placeholder="El"
            required
          />

          <Input
            {...getFieldProps("middle")}
            error={errors.middle}
            label="Middle name"
            type="text"
            placeholder="Moshe"
          />

          <Input
            {...getFieldProps("last")}
            error={errors.last}
            label="Last name"
            type="text"
            placeholder="Cohen"
            required
          />

          <Input
            {...getFieldProps("phone")}
            error={errors.phone}
            label="Phone"
            type="tel"
            placeholder="0585549635"
            required
          />

          <Input
            {...getFieldProps("url")}
            error={errors.url}
            label="Image url"
            type="url"
            placeholder=""
          />

          <Input
            {...getFieldProps("alt")}
            error={errors.alt}
            label="Image alt"
            type="text"
            placeholder=""
          />

          <Input
            {...getFieldProps("state")}
            error={errors.state}
            label="State"
            type="text"
            placeholder="Rotshild"
          />

          <Input
            {...getFieldProps("country")}
            error={errors.country}
            label="Country"
            type="text"
            placeholder="country"
            required
          />

          <Input
            {...getFieldProps("city")}
            error={errors.city}
            label="City"
            type="text"
            placeholder="Jerusalem"
            required
          />

          <Input
            {...getFieldProps("street")}
            error={errors.street}
            label="Street"
            type="text"
            placeholder="street"
            required
          />

          <Input
            {...getFieldProps("houseNumber")}
            error={errors.houseNumber}
            label="House number"
            type="text"
            placeholder="122"
            required
          />
          <Input
            {...getFieldProps("zip")}
            error={errors.zip}
            label="Zip"
            type="text"
            placeholder="8920435"
            required
          />

          <Input
            {...getFieldProps("isBusiness")}
            type="checkbox"
            label=" Signup as business"
            required
            checked={getFieldProps("isBusiness").value}
          />
        </div>

        {serverError && (
          <div className="alert alert-danger" role="alert">
            {serverError}
          </div>
        )}

        <FormButtons
          disabled={!isValid}
          onReset={() => resetForm(emptyValues)}
        />
      </form>
    </div>
  );
}

export default EditUser;
