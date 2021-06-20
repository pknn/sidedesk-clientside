import React from 'react'

import { PageWrapper, Container, Stage } from './components/Layout'
import { Header } from 'app/components/Header'
import { Board } from 'app/components/Ticket/Board'
import { useAppDispatch, useAppSelector } from './types/Store'
import { actions } from './store/features/Metadata/metadataSlice'
import { EditTicket } from './components/Modals/EditTicket/EditTicketComponent'

export const App = (): JSX.Element => {
  const shouldShowStage = useAppSelector(
    (state) => state.metadata.shouldShowStageComponent,
  )
  const dispatch = useAppDispatch()

  const handleStageDismiss = () => {
    dispatch(actions.toggleStageShow(false))
  }

  return (
    <PageWrapper>
      <Stage shouldShowStage={shouldShowStage} onClick={handleStageDismiss}>
        <EditTicket />
      </Stage>
      <Container>
        <Header />
        <Board />
      </Container>
    </PageWrapper>
  )
}
