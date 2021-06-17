import { connect } from 'react-redux'

import { Version } from 'app/types/Metadata'
import { ApplicationState } from 'app/types/Store'

import { VersionComponent } from './VersionComponent'

interface StateProps {
  version: Version
}

const mapStateToProps = (applicationState: ApplicationState): StateProps => ({
  version: applicationState.metadata.version,
})

export default connect(mapStateToProps)(VersionComponent)
