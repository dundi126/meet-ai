"use client"

import { authClient } from '@/lib/auth-client'
import React from 'react'
import { Button }  from '@/components/ui/button'
import { useRouter } from 'next/navigation';

export const HomeView = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

  
  if (!session) {
    return <p>Loading...</p>
  }


  return (
    <div className='flex flex-col p-4 gap-y-4'>
      <p>logged in as {session?.user?.name || "Guest"}</p>
          <Button onClick={() => authClient.signOut({
              fetchOptions: {
                  onSuccess: () => {
                      router.push
                      ("/sign-in")
                  }
              }
          })}>Sign Out</Button>
        
    </div>
  )
}
