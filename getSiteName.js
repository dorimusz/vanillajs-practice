function getSiteName(url) {
    url = url.replace("http://", "");
    url = url.replace("https://", "");
    url = url.replace("www.", "")

    function reverseString(str) {
        let split = str.split("");
        let revArr = split.reverse();
        let join = revArr.join("");
        return join
    }

    let reversedUrl = reverseString(url);
    reversedUrl = reversedUrl.replace('moc.', '')

    let urlPart = reverseString(reversedUrl)

    let capitalized = urlPart.charAt(0).toUpperCase() + urlPart.slice(1);

    return capitalized;
}

console.log(getSiteName("https://codecool.com"));
