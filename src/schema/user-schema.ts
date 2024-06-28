import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "name is required"
        }),
        password: string({
            required_error: "Password required"
        }).min(6, "Password too short"),

        email: string({required_error: "Email required"}).email("Invalid email"),
        passwordConfirmation: string({required_error: "Password confirmation required"}),
    }).refine((data)=> data.password === data.passwordConfirmation, {
        message: "passwords do not match",
        path:["passwordConfirmation"]
    })
});

export type CreateUserInput = Omit<
TypeOf<typeof createUserSchema>,
"body.passwordConfirmation"
>;