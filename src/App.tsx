import React from 'react'

import { PageWrapper, Container } from './components/Layout'
import { Header } from 'app/components/Header'
import { Lane } from 'app/components/Ticket/Lane'

export const App = (): JSX.Element => (
  <PageWrapper>
    <Container>
      <Header />
      <Lane />
    </Container>
  </PageWrapper>
)
