const videoFile = document.querySelector("video")
const playButton = document.querySelector("#play")

let isVideoPlaying = false

function playvideo(){
    isVideoPlaying = true
    videoFile.play()

    playButton.classList.replace("fa-play", "fa-pause")
}

function pausevideo(){
    isVideoPlaying = false
    videoFile.pause()

    playButton.classList.replace("fa-pause" , "fa-play")
}

playButton.addEventListener("click" , () =>
 {
    if(!isVideoPlaying){
        playvideo()
    }
    else{
        pausevideo()
    }
 })

 const forward = document.querySelector("#forward")
 const backward = document.querySelector("#backward")
 const totalDuration = document.querySelector("#duration")
const runTime = document.querySelector("#currenttime")

 videoFile.addEventListener("timeupdate" , function(event)
 {
    let myCurrentTime = event.srcElement.currentTime
    let myDuration = event.srcElement.duration
    // console.log(myCurrentTime , myDuration)

    const durationInMinutes = Math.floor(myDuration / 60)
    let durationInSeconds = Math.floor(myDuration % 60)

    // console.log(durationInMinutes , durationInSeconds)

    // const durationInMinutes = Math.floor(myDuration / 60)
    // let durationInSeconds = Math.floor(myDuration % 60)
  
    if(durationInSeconds < 10)
    {
      durationInSeconds = `0${durationInSeconds}`
    }
    totalDuration.textContent = `${durationInMinutes}:${durationInSeconds}`
    
  
    let currentTimeInMinutes = Math.floor(myCurrentTime / 60)
    let currentTimeInSeconds = Math.floor(myCurrentTime % 60)

    // console.log(currentTimeInMinutes, currentTimeInSeconds)
  
    if(currentTimeInSeconds < 10){
      currentTimeInSeconds = `0${currentTimeInSeconds}`
    }
    // console.log(currentTimeInMinutes, currentTimeInSeconds)
    runTime.textContent = `${currentTimeInMinutes}:${currentTimeInSeconds}`

    let videoPercentage = (myCurrentTime / myDuration) * 100
    progressBar.style.width = `${videoPercentage}%`
    // console.log(videoPercentage)


 })

 const durationBar = document.querySelector("#durationBar")
 const progressBar = document.querySelector("#progressBar")

 durationBar.addEventListener("click" , function(event)
 {
   
    let clickedWidth = event.offsetX
    let totalWidth = event.srcElement.offsetWidth
    
   let progressBarPercentage = (clickedWidth / totalWidth) * 100
    // console.log(clickedWidth , totalWidth)
    progressBar.style.width = `${progressBarPercentage}%`
    // console.log(progressBarPercentage)

     let currentClickedTime = (clickedWidth / totalWidth) * videoFile.duration 
    //  console.log(currentClickedTime)
     videoFile.currentTime = currentClickedTime
     console.log(currentClickedTime)
 })

//  forward.addEventListener("click" , function(event)
//   {
//         +  
//     console.log(event)
//   }
  
//   )
const volumeDurationBar = document.querySelector("#volumecomplete")
let volumeProgressBar = document.querySelector("#volumeprogressbar")

  volumeDurationBar.addEventListener("click" , function(event)
  {
    
     let clickedWidth = event.offsetX
     let totalWidth = event.srcElement.offsetWidth
     
    let volumeprogressBarPercentage = (clickedWidth / totalWidth) * 100
     // console.log(clickedWidth , totalWidth)
     volumeProgressBar.style.width = `${volumeprogressBarPercentage}%`
    //  console.log(volumeprogressBarPercentage)

    let info = clickedWidth / totalWidth
    // console.log(info)
    if( info < 0.3){
        videoFile.volume = 0.3
    }
    else if( info <= 0.5 ){
        videoFile.volume = 0.5
    }
    else if( info < 0.75 ){
        videoFile.volume = 0.75
    }
    else if( info <= 1 ){
        videoFile.volume = 1
    }


  })

  const volumeHigh = document.querySelector("#highvolume")

volumeHigh.addEventListener("click" , function()
{
    volumeHigh.classList.replace("fa-volume-high", "fa-volume-xmark")
    videoFile.volume = 0
    volumeProgressBar.style.width = `${videoFile.volume}%`
    // volumeProgressBar = 0%
    // console.log(volumeProgressBar)
})

const speed = document.querySelector("#playback")

speed.addEventListener("change" , function(event)
{
    
     videoFile.playbackRate = speed.value
     
})

let Container = document.querySelector("#container")
let myFullScreen = document.querySelector("#full")

let isFullScreen = false
myFullScreen.addEventListener("click" , () =>
{
    
    if(!isFullScreen){
        videoFile.classList.add(".addvideo")
        Container.requestFullscreen()
        myFullScreen.classList.replace("fa-expand", "fa-square-minus")
        
    }
    else{
        Container.exitFullscreen()
        myFullScreen.classList.replace("fa-square-minus", "fa-expand")
    }
    
    // console.log(myFullScreen)
}

)
// myFullScreen.classList.replace("fa-expand", "fa-minimize")



