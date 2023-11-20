function sendMessage(event) {
    event.preventDefault();

    function getCSRFToken() {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
      return cookieValue;
    }

    const nickname = document.getElementById('nickname').value;
    const phone = document.getElementById('phone').value;
    const adress = document.getElementById('adress').value;

    if (nickname.trim() === '' || phone.trim() === '' || adress.trim() === '') {
      document.getElementById("Wasnt sent").style.display = 'block';
    }

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'products/sendMessage', true);

    const csrf_token = getCSRFToken();

    xhr.setRequestHeader('X-CSRFToken', csrf_token);

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