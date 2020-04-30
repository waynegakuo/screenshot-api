function getScreenShot() {
    const shotUrl = 'https://screenshotapi.net/api/v1/screenshot';
    const urlProvided = document.getElementById('url').value;
    const keys = 'EVXT0XRKV9UFRHUPV9FDLFSGSQO9T7LP'

    const displaySect = document.getElementById("display");


    const urlSc = new URL("https://screenshotapi.net/api/v1/screenshot")
    const urlInfo = document.getElementById('url').value;
    const tokenKeys = 'EVXT0XRKV9UFRHUPV9FDLFSGSQO9T7LP'

    urlSc.searchParams.append('url', urlInfo);
    urlSc.searchParams.append('token', tokenKeys);

    fetch(urlSc, {method: 'POST'})
        .then(data => {
            return data.json()
        })
        .then(res => { console.log(res) })
        .catch(errror => console.log(error))



    displaySect.innerHTML = urlSc;
    






    // const data = {
    //     url: urlProvided,
    //     token: keys
    // }

    // const params = {
    //     body: data,
    //     method: "POST"
    // };

    // fetch(shotUrl, params)
    //     .then(data => {
    //         return data.json()
    //     })
    //     .then(res => { console.log(res) })
    //     .catch(errror => console.log(error))

}