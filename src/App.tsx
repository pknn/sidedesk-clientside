import React from 'react'

import { PageWrapper, Container } from './components/Layout'
import { Header } from 'app/components/Header'
import { Card } from 'app/components/Ticket/Card'

export const App = (): JSX.Element => (
  <PageWrapper>
    <Container>
      <Header />
      <div className="w-1/4">
        <Card />
      </div>
    </Container>
  </PageWrapper>
)
