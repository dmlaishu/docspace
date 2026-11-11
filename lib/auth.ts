import { cookies } from 'next/headers';import { createHmac,timingSafeEqual } from 'crypto';
export const USERS=[{id:'alice',name:'Alex Morgan',email:'alex@docspace.demo'},{id:'sam',name:'Sam Rivera',email:'sam@docspace.demo'}] as const;
function secret(){const s=process.env.SESSION_SECRET;if(!s||s.length<32)throw new Error('SESSION_SECRET must be at least 32 characters');return s}
export function sign(id:string){return id+'.'+createHmac('sha256',secret()).update(id).digest('hex')}
export function verify(token?:string){if(!token)return null;const [id,sig,...extra]=token.split('.');if(extra.length||!id||!sig||!USERS.some(u=>u.id===id))return null;const a=Buffer.from(sig),b=Buffer.from(sign(id).split('.')[1]);return a.length===b.length&&timingSafeEqual(a,b)?id:null}
export async function currentUser(){return verify((await cookies()).get('docspace_session')?.value)}
