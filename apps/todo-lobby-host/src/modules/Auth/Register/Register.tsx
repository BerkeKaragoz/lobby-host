import React from "react"
import { Button, Input } from "ui"

import { getGun } from "@/modules/Gun"
import * as Yup from "yup"
import { ErrorMessage, Field, Form, Formik } from "formik"

const db = getGun()

const user = db.user()

const loginSchema = Yup.object()
   .shape({
      alias: Yup.string().default("").required("Alias is required."),
      password: Yup.string()
         .default("")
         .min(9, (entry) => `Password must be at least ${entry.min} characters!`)
         .required("Password is required."),
   })
   .defined()

const Register = () => {
   return (
      <main>
         <Formik
            initialValues={loginSchema.getDefault()}
            validationSchema={loginSchema}
            onSubmit={(values) => {
               const { alias, password } = values

               user.create(alias, password, (res) => {
                  if ("err" in res) {
                     console.error("Failed to create user: ", { res, alias })
                  } else {
                     console.log("User created: ", { res, alias })
                  }
               })
            }}
         >
            {({ errors }) => (
               <Form className="home__registration">
                  <div className="home__registration-input">
                     <div>
                        <Field
                           as={Input}
                           name="alias"
                           placeholder="Alias"
                           required={true}
                           autoComplete="off"
                           spellCheck={false}
                        />
                        <pre>
                           <ErrorMessage name="alias" />
                        </pre>
                     </div>
                     <div>
                        <Field
                           as={Input}
                           name="password"
                           placeholder="Password"
                           type="password"
                           required={true}
                           autoComplete="off"
                           spellCheck={false}
                        />
                        <pre>
                           <ErrorMessage name="password" />
                        </pre>
                     </div>
                  </div>
                  <Button type="submit">Register</Button>
               </Form>
            )}
         </Formik>
      </main>
   )
}

export default Register
