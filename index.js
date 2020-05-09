function getScreenShot() {

    const displaySect = document.getElementById("display");

    const urlSc = new URL("https://screenshotapi.net/api/v1/screenshot");
    const tokenKeys = document.getElementById('apiKey').value;
    const urlInfo = document.getElementById('url').value;

    if (urlInfo !== '' && tokenKeys !== '') {

        urlSc.searchParams.append('url', urlInfo);
        urlSc.searchParams.append('token', tokenKeys);

        fetch(urlSc, { method: 'POST' })
            .then(data => {
                return data.json()
            })
            .then(res => {
                let imageHold = document.querySelector('a')
                imageHold.href = res.screenshot;
                imageHold.download;
                imageHold.click();
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 5000)
            })
            .catch(err => console.log(err))

        displaySect.innerHTML = "Your image will be downloaded any second from now...   ";
    }
    else {
        alert('Kindly provide the URL to screenshot');
    }
}

const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    ul.classList.toggle('show');
})