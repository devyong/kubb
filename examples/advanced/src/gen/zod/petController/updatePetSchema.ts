import type {
  UpdatePet200,
  UpdatePet202,
  UpdatePet400,
  UpdatePet404,
  UpdatePet405,
  UpdatePetMutationRequest,
  UpdatePetMutationResponse,
} from '../../models/ts/petController/UpdatePet.ts'
import type { ToZod } from '@kubb/plugin-zod/utils'
import { petSchema } from '../petSchema.ts'
import { z } from 'zod'

/**
 * @description Successful operation
 */
export const updatePet200Schema = z.lazy(() => petSchema).and(z.object({ name: z.never() }))

export type UpdatePet200Schema = UpdatePet200

/**
 * @description accepted operation
 */
export const updatePet202Schema = z.object({
  id: z.number().int().optional(),
} satisfies ToZod<UpdatePet202>)

export type UpdatePet202Schema = UpdatePet202

/**
 * @description Invalid ID supplied
 */
export const updatePet400Schema = z.any()

export type UpdatePet400Schema = UpdatePet400

/**
 * @description Pet not found
 */
export const updatePet404Schema = z.any()

export type UpdatePet404Schema = UpdatePet404

/**
 * @description Validation exception
 */
export const updatePet405Schema = z.any()

export type UpdatePet405Schema = UpdatePet405

/**
 * @description Update an existent pet in the store
 */
export const updatePetMutationRequestSchema = z.lazy(() => petSchema).and(z.object({ id: z.never() }))

export type UpdatePetMutationRequestSchema = UpdatePetMutationRequest

export const updatePetMutationResponseSchema = z.union([z.lazy(() => updatePet200Schema), z.lazy(() => updatePet202Schema)])

export type UpdatePetMutationResponseSchema = UpdatePetMutationResponse
