function sendMessage(event) {
    event.preventDefault();

    const nickname = document.getElementById('nickname').value;
    const phone = document.getElementById('phone').value;
    const adress = document.getElementById('adress').value;

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'products/sendMessage', true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    const data = {
    nickname: nickname,
    phone: phone,
    adress: adress
    };

    const jsonData = JSON.stringify(data);

    xhr.onload = function() {
      if (xhr.status === 200) {
         document.getElementById("Send").style.display = 'block';
      }  else {
         document.getElementById("Wasnt sent").style.display = 'block';
      }
    };

    xhr.send(jsonData);

}