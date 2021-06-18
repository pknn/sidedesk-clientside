import { connect } from 'react-redux'

import { Version } from 'app/types/Metadata'
import { ApplicationState } from 'app/types/Store'

import { HeaderComponent } from './HeaderComponent'

interface StateProps {
  version: Version
}

const mapStateToProps = (applicationState: ApplicationState): StateProps => ({
  version: applicationState.metadata.version,
})

export const Header = connect(mapStateToProps)(HeaderComponent)