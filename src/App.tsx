import React, { useEffect } from 'react'

import { PageWrapper, Container } from './components/Layout'
import { Header } from 'app/components/Header'
import { Board } from 'app/components/Ticket/Board'
import { EditTicket } from './components/Modals/EditTicket'
import { useAppDispatch } from './types/Store'
import { fetchTickets } from './store/features/Board/thunk'

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTickets())
  })

  return (
    <PageWrapper>
      <EditTicket />
      <Container>
        <Header />
        <Board />
      </Container>
    </PageWrapper>
  )
}
