//rating

import { makeStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
    ratingStyle: {
      marginBottom: '0px',
    },
  })

function CustomRating({ ratings }) {
    const classes = useStyles()
    return (
      <div>
        <Box
          className={classes.ratingStyle}
          component="fieldset"
          mb={3}
          borderColor="transparent">
          <Rating name="read-only" value={ratings} readOnly />
        </Box>
      </div>
    )
  }

  export default CustomRating;