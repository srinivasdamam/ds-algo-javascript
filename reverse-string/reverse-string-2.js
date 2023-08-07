function reverse(str) {
    let reversed = "";
    for(let ch of str) {
        reversed = ch + reversed;
    }
    return reversed;
}

console.log(reverse("cat"));
console.log(reverse("Greetings!"));
console.log(reverse("123abcd"));