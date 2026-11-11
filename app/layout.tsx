import './styles.css';
import type { Metadata } from 'next';
export const metadata:Metadata={title:'DocSpace | A focused document workspace',description:'Create, edit, import and share documents'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
