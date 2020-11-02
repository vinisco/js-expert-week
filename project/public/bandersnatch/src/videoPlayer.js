class VideoMediaPlayer{
    constructor({manifestJSON}){
        this.manifestJSON = manifestJSON
        this.videoElement = null
        this.sourceBuffer = null

    }

    initializeCodec(){
        this.videoElement = document.getElementById('vid')
        const mediaSourceSupported = !!window.MediaSource
        if(!mediaSourceSupported){
            alert("Your system/browser does not support MSE")
            return;
        }

        const codecSupported = MediaSource.isTypeSupported(this.manifestJSON.codec)
        if(!codecSupported){
        alert(`Your system/browser does not support codec ${this.manifestJSON.codec}`)
        return;
        }

        const mediaSource = new MediaSource()
        this.videoElement.src = URL.createObjectURL(mediaSource)

        mediaSource.addEventListener("sourceopen",this.sourceOpenWrapper(mediaSource))

    }
        sourceOpenWrapper(mediaSource){
            return async(_) =>{
                console.log("Carregou!")
            }
        }


    }

