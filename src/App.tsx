import React from 'react'

import { PageWrapper, Container } from './components/Layout'
import { Header } from 'app/components/Header'
import { Board } from 'app/components/Ticket/Board'
import { EditTicket } from './components/Modals/EditTicket'

export const App = (): JSX.Element => (
  <PageWrapper>
    <EditTicket />
    <Container>
      <Header />
      <Board />
    </Container>
  </PageWrapper>
)
