function sendMessage(event) {
    event.preventDefault();

    function getCSRFToken() {
      const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        .split('=')[1];
      return cookieValue;
    };

    const nickname = document.getElementById('nickname');
    const phone = document.getElementById('phone');
    const adress = document.getElementById('adress');
    const amount0_5 = document.getElementById("KOL 0,5").innerText;
    const amount1_5 = document.getElementById("KOL 1,5").innerText;
    const itog = parseFloat(document.getElementById("sum").innerText);

    var nameError = document.getElementById('Name');
    var numberError = document.getElementById('Number');
    var addressError = document.getElementById('Address');
    var minError = document.getElementById('Min');

    nameError.style.display = 'none';
    numberError.style.display = 'none';
    addressError.style.display = 'none';
    minError.style.display = 'none';


    if (!nickname.value.trim()) {
      nameError.style.display = 'block';
      return;
    }

    // Check if the phone number is not empty
    if (!phone.value.trim()) {
      numberError.style.display = 'block';
      return;
    }

    // Check if the address is not empty
    if (!adress.value.trim()) {
      addressError.style.display = 'block';
      return;
    }

    if (!itog.value.trim()) {
      addressError.style.display = 'block';
      return;
    }

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
            setTimeout(function() {
                document.getElementById("Wasnt sent").style.display = 'none';
            }, 3000);
            }
        };
        xhr.send(jsonData);

}

}