
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function checkPalindrome() {
    const value = document.getElementById('inputValue').value.toLocaleLowerCase();
    const reversed = reverseString(value);
    const result = document.getElementById('result');
    if (value === reversed) {
        result.textContent = "It's a palindrome!";
        result.style.backgroundColor = '#2ABE13';
    } else {
        result.textContent = 'Not a palindrome.';
        result.style.backgroundColor = '#EC4141';
    }
}