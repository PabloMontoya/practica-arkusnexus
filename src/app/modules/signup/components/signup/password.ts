const LETTERS_PATTERN = '(?=.*[A-Za-z])';
const NUMBERS_PATTERN = '(?=.*[0-9])';
const SYMBOLS_PATTERN = '(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])';
export const PASSWORD_PATTERN = `${LETTERS_PATTERN}${NUMBERS_PATTERN}${SYMBOLS_PATTERN}[A-Za-z0-9\d$@].{7,}`;
