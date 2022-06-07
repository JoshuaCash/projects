 "use strict"
 const gLink = document.getElementById("glink");
 const btn = document.getElementById("btn");
 const downloadLink = document.getElementById("download-link");
 

 btn.addEventListener("click", generateLink);
 gLink.addEventListener("keydown", e => {
     if (e.key === 13) {
         generateLink();
     }
 });

 function generateLink(e) {
     e.preventDefault();
    //  console.log(gLink.value);
    const gLinkValue = gLink.value;
    const confirmLink =  gLink.value.includes("https://docs.google.com/presentation/d/");
    console.log(confirmLink);
    if (confirmLink == true) {
        const getDownloadLink = gLink.value.replace("https://docs.google.com/presentation/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/edit?usp=sharing", " ")
        .replace("/view?usp=sharing", " ") 
        downloadLink.value = getDownloadLink;
    
    function copyText(target) {
        if (target.value === "") {
            alert("Please input valid link");
        } else {
            navigator.clipboard.writeText(target.value).then(() => {
                alert("Link has been copied to clipboard");            

            })
        }
    }
    const copy = document.querySelector(".copy");
    copy.addEventListener("click", () => {
        return copyText(downloadLink);
    })

    // EMBED AUDIO FUNCTION
    const audio1 = '<audio width="300" height="32" controls="controls" src="';
    const audio2 = '" type="audio/mp3"></audio>';
    const embedAudio = document.getElementById("embed-audio");
    embedAudio.value = `${audio1}${downloadLink.value}${audio2}`;
    

    // COPY AUDIO EMBED CODE
    const copyAudio = document.querySelector(".copy-audio");
    copyAudio.addEventListener("click", ()=> {
        return copyText(embedAudio);
    })

    // EMBED VIDEO
    const getVideoLink = gLink.value
    .replace("/view?usp=sharing", "");

    const video1 = '<iframe src="';
    const video2 = '/preview" width="560" height="315"></iframe>';
    const embedVideo = document.getElementById("embed-video");
    embedVideo.value = `${video1}${downloadLink.value}${video2}`

    // COPY VIDEO EMBED CODE
    const copyVideo = document.querySelector(".copy-video");
    copyVideo.addEventListener("click", () => {
        return copyText(embedVideo);
    })

 } else {
    alert("Please enter a Google Drive File Link")
}

}






// copy.addEventListener("click", () => {
//   navigator.clipboard.writeText(downloadLink.value)
// })