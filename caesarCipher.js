export function caesarCipher(str, factor) {
    factor = factor % 26; // Ensure the factor is within 0-25
    let shifted = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char.match(/[a-z]/i)) { // Check if the character is an alphabet
            let code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + factor) % 26) + 65);
            }
            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + factor) % 26) + 97);
            }
        }

        // Append either the shifted or original character
        shifted += char;
    }

    return shifted;
}
