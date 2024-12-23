'use client';
// ^ this file needs the "use client" pragma

import { HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { env } from '@/lib/env';

function makeClient() {
  const httpLink = new HttpLink({
    uri: env.NEXT_PUBLIC_POKEDEX_BASE_URL,
  });

  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache: new InMemoryCache(),
    link: httpLink,
    name: 'graphql-pokemon-client',
    version: '1.0',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
