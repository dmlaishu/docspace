export type Role = 'owner' | 'editor' | 'viewer' | null;
export function canRead(role: Role) { return role !== null; }
export function canEdit(role: Role) { return role === 'owner' || role === 'editor'; }
export function canShare(role: Role) { return role === 'owner'; }
export function validateTitle(value: unknown) { if (typeof value !== 'string' || !value.trim() || value.trim().length > 120) throw new Error('Title must be 1–120 characters'); return value.trim(); }
export function validateContent(value: unknown) { if (typeof value !== 'string' || value.length > 200_000) throw new Error('Document content exceeds 200 KB'); return value; }
