import React from 'react'
import { connect } from 'react-redux'
import { Message as SMessage } from 'semantic-ui-react'
import { resetMessage } from '../../Actions/app.actions'
import './Message.component.css'

const Message = (props) => {
  return ( 
    (props.message && !props.message.includes('wrong') &&
      <SMessage
        success
        onDismiss={ props.resetMessage } 
        header="Congratulations!"
        content={ props.message }
      />)
    ||
    (props.message && props.message.includes('wrong') &&
      <SMessage
        error
        onDismiss={ props.resetMessage }
        header="Ooops"
        content={ props.message }
      />)
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