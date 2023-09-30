import { getServerSession } from 'next-auth'
import Image from 'next/image'
import styles from './page.module.css'
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if(!session){
    redirect('/api/auth/signin');
    return <p>You must be signed in...</p>
  }

  return (
    <main>
    </main>
  )
}
