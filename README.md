# DocSpace

A timeboxed collaborative document workspace built with Next.js, TypeScript, TipTap and PostgreSQL.

## Features
- Create, rename, edit, save and reopen documents
- Bold, italic, underline, heading, bulleted and numbered list formatting
- Import UTF-8 .txt and .md files (200 KB maximum; markdown is imported as plain text)
- Two demo accounts (Alex Morgan and Sam Rivera), owner/editor/viewer permissions
- Owned versus shared document dashboard

## Local setup
1. Install Node.js 20+ and PostgreSQL.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`; set `DATABASE_URL` and a random `SESSION_SECRET` of at least 32 characters.
4. Run `npm run db:init` with the same `DATABASE_URL` available in your shell (the script does not automatically load .env.local).
5. Run `npm run dev` and open http://localhost:3000.
6. Run `npm test` and `npm run build` to verify.

## Deploy to Vercel
Import the GitHub repository into Vercel. Provision a PostgreSQL database from a free provider. Set `DATABASE_URL` and `SESSION_SECRET` as Vercel environment variables. Initialize the remote database with `npm run db:init` locally using the remote DATABASE_URL. Deploy and verify the owner/editor/viewer flow.

## Demo walkthrough
Choose Alex Morgan from the dashboard, create a document, edit and format it, share with Sam Rivera as editor. Return to the dashboard, switch to Sam Rivera, and open the shared document. Sam should not be able to change sharing permissions.

## Constraints
Demo login is deliberately not production authentication: anyone can select either seeded user. Do not use with sensitive data. No realtime collaboration, conflict resolution, version history, attachments, .docx import or production-grade access control. HTML content is stored as TipTap output; further server-side HTML sanitization is needed before accepting arbitrary untrusted clients. The editor does not promise conflict-free simultaneous editing.

## Verification status
Source has been committed to GitHub; automated tests, full build, database migration and deployed flows have not yet been independently verified in this environment. See SUBMISSION.md.
