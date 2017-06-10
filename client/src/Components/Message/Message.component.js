import React from 'react'
import { Message as SMessage } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { resetMessage } from '../../Actions/app.actions'

function Message (props) {
  return ( 
    props.message  &&
      <SMessage   
        success
        onDismiss={props.resetMessage} 
        header="Congratulations!"
        content={ props.message }
      />
  )
}

const mapStateToProps = state => ({
  message: state.app.message
})

const mapDispatchToProps = dispatch => ({
  resetMessage() {
    dispatch(resetMessage())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Message)