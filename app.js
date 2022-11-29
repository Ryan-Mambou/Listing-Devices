const selectMicrophone = document.querySelector('#selectMicrophone');
const microphoneSelected = document.querySelector('#microphoneSelected');

navigator.mediaDevices.getUserMedia({
    audio: true,
    video: false
  })
.then((stream) => {
console.log(stream)
})
.catch((err) => {
console.log(err.name + ": " + err.message);
});

navigator.mediaDevices.enumerateDevices()
    .then(devices => {
        devices.filter(device => device.kind === "audioinput").map((filtered, index) => {
            console.log(filtered)
            var option = document.createElement('option');
            option.value = filtered.deviceId || `Microphone ${index + 1}`
            option.text = filtered.label ||`Microphone ${index + 1}`
            selectMicrophone.appendChild(option)
        })
    })
    .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });


  function handleSelect(){
    //selectMicrophone
    //console.log(selectMicrophone.value)
    microphoneSelected.innerHTML = selectMicrophone.value
    navigator.mediaDevices.getUserMedia({
        audio: {deviceId: {exact: selectMicrophone.value}},
        video: false
      })
  .then((stream) => {
    microphoneSelected.innerHTML = selectMicrophone.value
    console.log(stream)
  })
  .catch((err) => {
    console.log(err.name + ": " + err.message);
  });
  }



