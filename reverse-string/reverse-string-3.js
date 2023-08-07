function reverse(str) {
    return str.split("").reduce((result, char) => {
        return char + result;
    }, "");
}

console.log(reverse("cat"));
console.log(reverse("Greetings!"));
console.log(reverse("123abcd"));
