import type { Category } from '../models/Category.ts'
import { faker } from '@faker-js/faker'

export function createCategory(data?: Partial<Category>): Category {
  return {
    ...{ id: faker.number.int(), name: faker.string.alpha() },
    ...(data || {}),
  }
}
