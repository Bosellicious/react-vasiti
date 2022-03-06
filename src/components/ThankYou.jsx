import React, { Component } from 'react'

class ThankYou extends Component {
  render() {
    return (
        <div className="container" style={{ boxShadow: 'none' }}>
            <div className="popup center">
                <div className="icon" style={iconStyle}>
                    <img alt="congratulations emoji" src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-confetti-celebration-photo3ideastudio-flat-photo3ideastudio.png"/>
                </div>
                <div className="title" style={{ margin: 'auto', textAlign: 'center' }}> 
                    Thank you for <br />
                    sharing your story!
                </div>
                <div className="description" style={{ margin: 'auto', textAlign: 'center' }}>
                    Lorem ipsum dolor sit amet consectetur <br />
                    adispiscing elit, sed do elusmod tempor incididunt <br />
                    ut labore et dalore magna aliqua. 
                </div>
                <div className="close-btn" style={{ margin: 'auto', textAlign: 'center' }}>
                    <button id="Close-popup-btn" onClick={()=> this.props.closeFunc()}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
  }
}



const iconStyle = {
    backgroundColor: '#ff450012',
    borderRadius: '50%',
    width: 'fit-content',
    margin: 'auto',
    // padding: ,
}


export default ThankYou 