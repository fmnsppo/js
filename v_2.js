var tt = {
    secret_key: "EA^UfBOF9lNdQDS3i2qAnsqxIrTpH%",
    encrypt_key: "6dFGd4Laa3vE%kLpr5eCtSEaAL%wJm",
    downloadKey: "7ddFg5%aa3vE%kRpr5eCxQEoALtwJm"
};

function generateSigned() {
    var secret_key = tt.secret_key,
    encrypt_key = tt.encrypt_key,
    download_key = tt.downloadKey;
    let n = Date.now().toString(),
        i = {
            hash: CryptoJS.HmacSHA256(JSON.stringify({
                timesTamp: n
            }), secret_key).toString(),
            timesTamp: n
        };
    return CryptoJS.AES.encrypt(JSON.stringify(i), encrypt_key).toString()
}
