// chain_prompt.js
// Use this file to add chain prompt examples or functions.
/**
 * Converts a string to kebab-case (lowercase words separated by hyphens).
 * Handles multiple spaces, special characters, numbers, and mixed casing.
 * Returns an empty string for invalid input.
 * @param {string} str - The input string to convert.
 * @returns {string} - The kebab-case formatted string.
 */
function toKebabCase(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
        return ''; 
    }
    

    // Trim leading/trailing whitespace
    str = str.trim();

    // Return empty string if input is empty after trimming
    if (!str) {
        return '';
    }

    // Replace underscores and periods with spaces
    str = str.replace(/[_\.]+/g, ' ');

    // Replace camelCase and PascalCase boundaries with spaces
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Remove all non-alphanumeric characters except spaces
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');

    // Replace multiple spaces with a single space
    str = str.replace(/\s+/g, ' ');

    // Split into words, filter out empty strings, and join with hyphens
    const kebab = str
        .split(' ')
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('-');

    return kebab;
}
