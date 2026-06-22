# Content Security Policy — notes

Defense-in-depth against XSS by restricting what sources the browser will load.

## Common directives

- `default-src 'self'` — fallback for most fetch directives
- `script-src 'self'` — where scripts may load from (avoid `'unsafe-inline'`)
- `style-src 'self'`
- `img-src 'self' data:`
- `connect-src` — XHR / fetch / WebSocket targets
- `frame-ancestors 'none'` — clickjacking protection (replaces X-Frame-Options)

## Examples

```
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none'
```

## Notes

- Prefer nonces/hashes over `'unsafe-inline'`.
- Use `Content-Security-Policy-Report-Only` + `report-uri`/`report-to` to roll out safely.
- TODO: add a worked before/after example from the xss-demo.
