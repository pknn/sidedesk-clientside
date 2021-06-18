import React from 'react'

import { PageWrapper, Container } from './components/Layout'
import { Header } from 'app/components/Header'

export const App = (): JSX.Element => (
  <PageWrapper>
    <Container>
      <Header />
    </Container>
  </PageWrapper>
)
