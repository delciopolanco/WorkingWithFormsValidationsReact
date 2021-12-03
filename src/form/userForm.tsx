import * as Yup from "yup";
import { FC } from "react";
import { User } from "./user.model";

import { Formik } from "formik";
import { Box, Card, Grid, TextField, Button } from "@mui/material";


interface UserProps {
  user: User;
}

const submitFormHandler = (values, { setSubmitting }) => {
  //TODO
  console.log(values);
};

const UserForm: FC<UserProps> = (props) => {

  const UserFormValidations = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().min(18),
    email: Yup.string()
      .email()
      .max(320)
      .required(),
    phone: Yup.string().max(15).required(),
    website: Yup.string().max(255),
  });

  return (
    <div className="App-form">
      <Formik
        initialValues={new User()}
        validationSchema={UserFormValidations}
        onSubmit={submitFormHandler}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Card>
              <Box sx={{ p: 1 }}>
                <div>
                  <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.name && errors.name)}
                        fullWidth
                        helperText={touched.name && errors.name}
                        label={`Name`}
                        name={`name`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                        value={values.name}
                        variant={`outlined`}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.age && errors.age)}
                        fullWidth
                        helperText={touched.age && errors.age}
                        label={`Age`}
                        name={`age`}
                        type={`number`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                        value={values.age}
                        variant={`outlined`}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.email && errors.email)}
                        fullWidth
                        helperText={touched.email && errors.email}
                        label={`Email`}
                        name={`email`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                        value={values.email}
                        variant={`outlined`}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.phone && errors.phone)}
                        fullWidth
                        helperText={touched.phone && errors.phone}
                        label={`Phone`}
                        name={`phone`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                        value={values.phone}
                        variant={`outlined`}
                      />
                    </Grid>

                    <Grid item md={6} xs={12}>
                      <TextField
                        error={Boolean(touched.website && errors.website)}
                        fullWidth
                        helperText={touched.website && errors.website}
                        label={`Website`}
                        name={`website`}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        required
                        value={values.website}
                        variant={`outlined`}
                      />
                    </Grid>
                  </Grid>
                </div>

                <Grid container>
                  <Grid item md={1} xs={1}>
                    <Button
                      type={`submit`}
                      disabled={isSubmitting}
                      sx={{ mt: 6 }}
                      variant="contained"
                      size="large"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
