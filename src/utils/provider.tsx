"use client"

import React from "react"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryProviders({ children }: React.PropsWithChildren) {
  const fiveMinutesInMs = 5 * 60 * 1000

  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchOnMount: true,
          refetchOnReconnect: false,
          retry: false,
          cacheTime: fiveMinutesInMs,
          staleTime: 0,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default ReactQueryProviders
