import { z } from "zod";

const getUsersShema = z.string({
        required_error: "id precisa ser informado",
        invalid_type_error: "id precisa ser do tipo string"
    });


export {getUsersShema};