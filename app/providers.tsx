'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'

// Providers component to wrap our application with QueryClientProvider
export default function Providers({ children }: { children: ReactNode }) {
  // It's best to create the client once per component lifecycle
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
} 