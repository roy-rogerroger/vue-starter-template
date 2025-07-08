import type { ApiViolationInterface } from '@/shared/api/violation/ApiViolationInterface.ts'

type PathRewriteRule = {
  match: (normalizedPath: string) => boolean
  rewrite: (normalizedPath: string) => string
}

class ApiViolationMapper {
  private readonly rules: PathRewriteRule[] = []

  constructor(rules: PathRewriteRule[] = []) {
    this.rules = rules
  }

  public map(violations: ApiViolationInterface[]) {
    return violations.map((violation) => {
      const normalizedPath = this.normalizePath(violation.propertyPath)

      for (const rule of this.rules) {
        if (rule.match(normalizedPath)) {
          return {
            ...violation,
            propertyPath: rule.rewrite(normalizedPath),
          }
        }
      }

      return violation
    })
  }

  // Convert parent[0].name → parent.0.name
  private normalizePath(propertyPath: string) {
    return propertyPath.replace(/\[(\d+)]/g, '.$1')
  }
}

export default ApiViolationMapper
