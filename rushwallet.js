var hash = "";
var password = "";

function generateMissingURL(hash, password) {
    var userPassHash = Bitcoin.Crypto.SHA256(password);
    var passHash = Bitcoin.Crypto.SHA256(hash + "!" + userPassHash);
    var hashAfterExclamationMark = passHash.substring(0, 10);  
    return hashAfterExclamationMark;  
}
