function putb64(pic, url, token) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      //   document.getElementById("myDiv").innerHTML = xhr.responseText;
      console.log('成功')
    }
  }
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/octet-stream");
  xhr.setRequestHeader("Authorization", token);
  xhr.send(pic);
}

export default putb64
