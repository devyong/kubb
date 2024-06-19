import { z } from '../../zod.ts'

export const orderSchema = z.object({
  id: z.coerce.number().optional(),
  petId: z.coerce.number().optional(),
  quantity: z.coerce.number().optional(),
  shipDate: z.string().datetime().optional(),
  status: z.enum(['placed', 'approved', 'delivered']).describe('Order Status').optional(),
  http_status: z
    .union([z.literal(200), z.literal(400)])
    .describe('HTTP Status')
    .optional(),
  complete: z.boolean().optional(),
})
