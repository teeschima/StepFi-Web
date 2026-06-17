import DOMPurify from 'dompurify'

DOMPurify.setConfig({ ALLOWED_TAGS: [], ALLOWED_ATTR: [] })

export function sanitizeText(input: string): string {
  return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] })
}

export function sanitizeHtml(input: string): string {
  return DOMPurify.sanitize(input)
}
