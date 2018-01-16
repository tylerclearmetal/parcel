import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography
} from 'material-ui'

const Navigation = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography color='inherit' type='title'>ClearMetal</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
