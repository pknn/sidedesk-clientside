import React from 'react'

import { PageWrapper, Container } from './components/Layout'
import { Header } from 'app/components/Header'
import { Board } from 'app/components/Ticket/Board'

export const App = (): JSX.Element => (
  <PageWrapper>
    <Container>
      <Header />
      <Board />
    </Container>
  </PageWrapper>
)
