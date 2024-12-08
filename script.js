function generate () {
  const randomchar =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const captchaText = document.getElementById ('captcha-text');
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += randomchar.charAt (Math.random () * randomchar.length);
    captchaText.textContent = captcha;
  }
}

function verify () {
  const captchaText = document.getElementById ('captcha-text');
  const inputText = document.getElementById ('input-text');
  const successMsg = document.getElementById('success-msg');
  const errorMsg = document.getElementById('error-msg');
  if (inputText.value === captchaText.textContent) {
    successMsg.style.display = 'block'
    setTimeout(() => {
        const successMsg = document.getElementById('success-msg');
        console.log(successMsg)
        successMsg.style.display = 'none'
    }, 3000);
    generate ();
    inputText.value = '';
  } else {
    errorMsg.style.display = 'block'
    setTimeout(() => {
        const errorMsg = document.getElementById('error-msg');
        console.log(errorMsg)
        errorMsg.style.display = 'none'
    }, 3000);
    inputText.value = '';
  }
}
