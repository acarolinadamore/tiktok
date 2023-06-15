import React, { useRef, useState } from 'react'
import "./video.css"

function Video() {

  const videoRef = useRef(null)
  const [play,setPlay] = useState(false)

  function handdleStart(){

    if(play) {
      videoRef.current.pause()
      setPlay(false)
    } else {
      videoRef.current.play()
      setPlay(true)
    }
    
  }

  return (
    <div className='video'>
      <video
        className='video-player'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://player.vimeo.com/external/482693514.sd.mp4?s=9329f666cb73e89157baeb5f9c75a6a32667f4aa&profile_id=165&oauth2_token_id=57447761"
      >

      </video>
      </div>
  )
}

export default Video