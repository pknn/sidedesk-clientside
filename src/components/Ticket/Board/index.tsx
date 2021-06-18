import { connect } from 'react-redux'

import { ApplicationState } from 'app/types/Store'
import { Ticket } from 'app/types/Ticket'

import { BoardComponent } from './BoardComponent'

export interface StateProps {
  pendingTickets: Ticket[]
  acceptedTickets: Ticket[]
  resolvedTickets: Ticket[]
  rejectedTickets: Ticket[]
}

const mapStateToProps = (applicationState: ApplicationState): StateProps => ({
  pendingTickets: applicationState.board.pendingTickets,
  acceptedTickets: applicationState.board.acceptedTickets,
  resolvedTickets: applicationState.board.resolvedTickets,
  rejectedTickets: applicationState.board.rejectedTickets,
})

export const Board = connect(mapStateToProps)(BoardComponent)
