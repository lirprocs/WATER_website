function sendMessage(event) {
    event.preventDefault();

    function getCSRFToken() {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
      return cookieValue;
    };

    const nickname = document.getElementById('nickname').value;
    const phone = document.getElementById('phone').value;
    const adress = document.getElementById('adress').value;
    const amount0_5 = document.getElementById("KOL 0,5").innerText;
    const amount1_5 = document.getElementById("KOL 1,5").innerText;
    const itog = parseFloat(document.getElementById("sum").innerText);

    if (nickname.trim() === '' || phone.trim() === '' || adress.trim() === '' || itog < 4800) {
      document.getElementById("Wasnt sent").style.display = 'block';
      setTimeout(function() {
      document.getElementById("Wasnt sent").style.display = 'none';
      }, 3000);
    }  else {

      const xhr = new XMLHttpRequest();

      xhr.open('POST', 'products/sendMessage', true);

      const csrf_token = getCSRFToken();

      xhr.setRequestHeader('X-CSRFToken', csrf_token);

      xhr.setRequestHeader('Content-Type', 'application/json');

      const data = {
      nickname: nickname,
      phone: phone,
      adress: adress,
      amount0_5: amount0_5,
      amount1_5: amount1_5,
      itog: itog
      };

      const jsonData = JSON.stringify(data);

      xhr.onload = function() {
        if (xhr.status === 200) {
          document.getElementById("Send").style.display = 'block';
          setTimeout(function() {
            document.getElementById("Send").style.display = 'none';
            }, 3000);
        } else {
            document.getElementById("Wasnt sent").style.display = 'block';
        };
      };

      xhr.send(jsonData);
    };

}