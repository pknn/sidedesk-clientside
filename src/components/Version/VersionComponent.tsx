import React from 'react'

import { Version } from 'app/types/Metadata'

interface DataProps {
  version: Version
}

export const VersionComponent = ({ version }: DataProps): JSX.Element => (
  <div>
    <span>Application Version: {version}</span>
  </div>
)
