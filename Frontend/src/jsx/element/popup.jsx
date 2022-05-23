import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';



class Popup extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <>


                <div className="intro-video-play">
                    <div onClick={this.openModal} className="play-btn"><span><i className="fa fa-play"></i></span></div>
                    <div>
                        <ModalVideo
                            channel='youtube'
                            isOpen={this.state.isOpen}
                            videoId='L61p2uyiMSo'
                            ratio={'16:9'}
                            autoplay={1}
                            onClose={() => this.setState({ isOpen: false })} />
                    </div>
                </div>
            </>
        )
    }
}

export default Popup;