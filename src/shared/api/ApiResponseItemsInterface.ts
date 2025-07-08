import type ApiResponseItemInterface from '@/shared/api/ApiResponseItemInterface'

export default interface ApiResponseItemsInterface {
  member: ApiResponseItemInterface[]
  totalItems?: number
  view?: {
    next?: string
  }
  meta?: Record<string, never>
}
