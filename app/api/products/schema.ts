import { z } from "zod";

const schema = z.object({
    id: z.number().int().positive(),
    name: z.string().min(3),
    price: z.number().min(0),

})

export default schema;