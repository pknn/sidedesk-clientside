import { connect } from 'react-redux'

import { ApplicationState } from 'app/types/Store'
import { Ticket } from 'app/types/Ticket'

import { BoardComponent } from './BoardComponent'

interface StateProps {
  tickets: Ticket[]
}

const mapStateToProps = (applicationState: ApplicationState): StateProps => ({
  tickets: applicationState.board.tickets,
})

export const Board = connect(mapStateToProps)(BoardComponent)
