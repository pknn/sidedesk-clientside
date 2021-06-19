import React from 'react'

import { PageWrapper, Container, Stage } from './components/Layout'
import { Header } from 'app/components/Header'
import { Board } from 'app/components/Ticket/Board'

export const App = (): JSX.Element => (
  <PageWrapper>
    <Stage onClick={() => console.log('should abort')}>
      <div className="bg-white w-10/12 h-96 absolute inset-0 m-auto">Hi</div>
    </Stage>
    <Container>
      <Header />
      <Board />
    </Container>
  </PageWrapper>
)
