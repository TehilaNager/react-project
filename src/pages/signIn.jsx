import Joi from "joi";
import { Navigate, useNavigate } from "react-router";
import { useState } from "react";
import { useFormik } from "formik";
import PageHeader from "../components/common/pageHeader";
import Input from "../components/common/input";
import FormButtons from "../components/common/FormButtons";
import { useAuth } from "../context/authContext";
import { successFeedback } from "../helpers/feedback";

function SignIn() {
  const [serverError, setServerError] = useState("");
  const { logIn, user } = useAuth();
  const navigate = useNavigate();

  const { handleSubmit, getFieldProps, errors, touched, isValid, resetForm } =
    useFormik({
      validateOnMount: true,
      initialValues: {
        email: "",
        password: "",
      },
      validate: (values) => {
        const schema = Joi.object({
          email: Joi.string().min(5).required().email({ tlds: false }),
          password: Joi.string()
            .min(7)
            .max(20)
            .required()
            .pattern(
              /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*\-]).{7,20}$/
            )
            .messages({
              "string.pattern.base":
                '"password" must contain at least one uppercase English letter, one lowercase English letter, one number, and one special character (!@#$%^&*-).',
              "string.empty": '"password" is required.',
              "string.min": '"password" must be at least 7 characters long.',
              "string.max": '"password" must be at most 20 characters long.',
            }),
        });

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
          await logIn(values);
          successFeedback("Login successful. Welcome!");
          navigate("/");
        } catch (err) {
          if (err.status === 400) {
            let message = err.response.data;
            message = message.replace("Joi Error: user ", "");
            message = message.replace(
              '"mail" mast be a valid mail',
              '"email" mast be a valid email'
            );
            setServerError(message);
          }
        }
      },
    });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container col-10 col-md-4">
      <PageHeader title="Sign In" classNameTitle="my-5 text-center" />

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <div className="d-grid gap-4 mb-5">
          <Input
            {...getFieldProps("email")}
            error={touched.email && errors.email}
            label="Email"
            type="email"
            placeholder="Dani@Cohen.com"
            required
          />

          <Input
            {...getFieldProps("password")}
            error={touched.password && errors.password}
            label="Password"
            type="password"
            placeholder="123456789"
            required
          />
        </div>

        {serverError && (
          <div className="alert alert-danger" role="alert">
            {serverError}
          </div>
        )}

        <FormButtons disabled={!isValid} onReset={resetForm} />
      </form>
    </div>
  );
}

export default SignIn;
