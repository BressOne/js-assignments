export function concatenateStrings(value1, value2) {
  return value1+value2;
}
export function getStringLength(value) {
  return value.length;
}
export function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}
export function  extractNameFromTemplate(value) {
  return value.slice(7, (value.length-1));
}
export function getFirstChar(value) {
  return value[0];
}
export function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim().replace('/t', '');
}
export function repeatString(value, count) {
  return value.repeat(count);
}
export function removeFirstOccurrences(str, value)  {
  return str.replace(value, '');
}
export function unbracketTag(str) {
  return str.slice(1, (str.length-1));
}
export function convertToUpperCase(str) {
  return str.toUpperCase();
}
export function extractEmails(str) {
  return str.split(';', 256);
}
export function getRectangleString(width, height) {
  if (width>1 && height>1) {
    let rectTopAndBottom =  '─'.repeat(width-2);
    let rectBody = '│' + ' '.repeat(width-2) + '│\n';
    return `┌${rectTopAndBottom}┐\n` + rectBody.repeat(height-2) + `└${rectTopAndBottom}┘\n`;
  }
  else throw new Error('incorrect value');
}
export function encodeToRot13(str) {
  let position = 0;
  let pattern = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let key = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let resultString = '';
  while (position<str.length) {
    resultString += (key[pattern.indexOf(str[position])]);
    position++;
  }
  return resultString;
  }
export function isString(value) {
  let flag = false;
  if (typeof value === 'string') {
    return !flag;
  } else {
    return flag;
  }
}
export function getCardId(value) {
let array = [
'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣', 
'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦', 
'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥', 
'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠'];  
return array.findIndex(value);
}
