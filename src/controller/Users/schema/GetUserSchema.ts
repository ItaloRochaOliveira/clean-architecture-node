import { z } from "zod";

const getUsersShema = z.object({
    name: z.string({
        required_error: "name precisa ser informado",
        invalid_type_error: "name precisa ser do tipo string"
    }),
    email: z.string().email()
});

export {getUsersShema};