/**
 * Converts a given string to camelCase format.
 *
 * This function processes the input string by:
 * - Returning an empty string if the input is not a string or is empty after trimming.
 * - Replacing all non-alphanumeric characters (excluding spaces) with spaces to normalize word boundaries.
 * - Splitting the string into words, handling multiple spaces and special characters.
 * - Lowercasing the first word and capitalizing the first letter of subsequent words, concatenating them without spaces.
 *
 * Examples:
 *   toCamelCase('  Hello_world--test 123  ') // returns 'helloWorldTest123'
 *   toCamelCase('foo-bar_baz') // returns 'fooBarBaz'
 *   toCamelCase('') // returns ''
 *
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string, or an empty string for invalid input.
 */

/**
 * Converts a given string to dot.case format.
 *
 * This function processes the input string by:
 * - Returning an empty string if the input is not a string or is empty after trimming.
 * - Replacing all non-alphanumeric characters (excluding spaces) with spaces to normalize word boundaries.
 * - Splitting the string into words, handling multiple spaces and special characters.
 * - Lowercasing all words and joining them with dots.
 *
 * Examples:
 *   toDotCase('  Hello_world--test 123  ') // returns 'hello.world.test.123'
 *   toDotCase('foo-bar_baz') // returns 'foo.bar.baz'
 *   toDotCase('') // returns ''
 *
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string, or an empty string for invalid input.
 
/**
 * Converts any string to camelCase.
 * Handles multiple spaces, special characters, numbers, mixed casing, and empty strings.
 * Returns an empty string for non-string or invalid input.
 * @param {string} str - The input string to convert.
 * @returns {string} - The camelCase version of the input string.
 */
function toCamelCase(str) {
    // Error handling: Return empty string if input is not a string
    if (typeof str !== 'string') return '';

    // Trim whitespace and check for empty string after trimming
    str = str.trim();
    if (str.length === 0) return '';

    // Replace all non-alphanumeric characters (except spaces) with spaces
    // This helps to split words correctly
    str = str.replace(/[^a-zA-Z0-9 ]+/g, ' ');

    // Split the string into words by spaces (handle multiple spaces)
    const words = str.split(/\s+/);

    // If no valid words, return empty string
    if (words.length === 0) return '';

    // Convert first word to lowercase, subsequent words to Capitalized
    const camelCased = words
        .map((word, idx) => {
            if (word.length === 0) return '';
            if (idx === 0) {
                // First word: all lowercase
                return word.toLowerCase();
            }
            // Capitalize first letter, lowercase the rest
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');

    return camelCased;
}

// Example usage:
// Example usage:
console.log(toCamelCase('  Hello_world--test 123  ')); // "helloWorldTest123"

/**
 * Converts any string to dot.case format.
 * Handles multiple spaces, special characters, numbers, mixed casing, and empty strings.
 * Returns an empty string for non-string or invalid input.
 * @param {string} str - The input string to convert.
 * @returns {string} - The dot.case version of the input string.
 */
function toDotCase(str) {
    if (typeof str !== 'string') return '';
    str = str.trim();
    if (str.length === 0) return '';
    // Replace all non-alphanumeric characters (except spaces) with spaces
    str = str.replace(/[^a-zA-Z0-9 ]+/g, ' ');
    // Split the string into words by spaces (handle multiple spaces)
    const words = str.split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    // Convert all words to lowercase and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
console.log(toDotCase('  Hello_world--test 123  ')); // "hello.world.test.123"


