# Architecture and scope

## Product slice
Prioritized a coherent single-user editing flow with explicit owner/editor/viewer sharing over Google Docs-like realtime collaboration.

## Stack
Next.js App Router and React client components; TipTap/ProseMirror for rich text; Next.js route handlers for server-side operations; PostgreSQL via postgres.js for persistence; HMAC-signed HttpOnly demo session cookie; Vitest for permissions.

## Data model
users(id,name,email), documents(id,owner_id,title,content,created_at,updated_at), shares(document_id,user_id,role). Ownership is not inferred from client input. Document endpoints resolve the current demo user from the signed cookie and enforce access server-side. Only owners can share; editors can modify; viewers can read.

## Tradeoffs
No true auth, realtime cursors, version history, optimistic concurrency or DOCX parsing. File import is limited to UTF-8 text and Markdown files up to 200 KB. Autosave is debounced; concurrent edits can overwrite one another. HTML should be sanitized server-side before a production launch. Shared editing is sequential, not realtime.

## Next 2–4 hours
Run install/build/tests against a real Postgres instance, fix defects, deploy, verify owner/editor/viewer flows in two browser sessions, add robust server-side sanitization, and record a genuine walkthrough.
