import React from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import './modalvideo.scss'

class VideoModal extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <React.Fragment>
        <ModalVideo channel='youtube' 
        isOpen={this.state.isOpen} 
        autoplay 
        // allowFullScreen 
        videoId={this.props.id} 
        onClose={() => this.setState({isOpen: false})} />
        <a className="modalvideo_button" onClick={this.openModal}> {this.props.title}</a>
        
      </React.Fragment>
    )
  }
}

export default VideoModal