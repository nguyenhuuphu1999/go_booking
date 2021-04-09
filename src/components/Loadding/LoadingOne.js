import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Skeleton from '@material-ui/lab/Skeleton'

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
  },
}))

function SkeletonChildrenDemo(props) {
  const { loading = false } = props
  const classes = useStyles()

  return (
    <div>
      <Box display="flex" alignItems="center" width="100%" height="100%">
        <Box margin={1}>
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
        </Box>
        <Box width="95%">
          <Skeleton width="95%">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </Box>

      <Skeleton variant="rect" width="95%">
        <div style={{ paddingTop: '57%' }} />
      </Skeleton>
    </div>
  )
}

SkeletonChildrenDemo.propTypes = {
  loading: PropTypes.bool,
}

export default function SkeletonChildren() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <SkeletonChildrenDemo loading />
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <Grid container>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <SkeletonChildrenDemo loading />
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <SkeletonChildrenDemo loading />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
