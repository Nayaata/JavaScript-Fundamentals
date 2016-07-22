function parseTags(args) {
    const upOpen = 'upcase',
        upClose = '/upcase',
        lowOpen = 'lowcase',
        lowClose = '/lowcase',
        orgOpen = 'orgcase',
        orgClose = '/orgcase',
        upScope = 'up',
        lowScope = 'low',
        orgScope = 'initial';

    let isTag = false,
        scopeStack = [],
        currentScope = orgScope,
        strLength = args[0].length,
        currentTag = '',
        output = '';

    for (let i = 0; i < strLength; i += 1) {
        let c = args[0][i] + '';

        if (c === '<') {
            isTag = true;
        } else if (c === '>') {
            isTag = false;
            if (currentTag === upOpen) {
                scopeStack.push(currentScope);
                currentScope = upScope;
            } else if (currentTag === lowOpen) {
                scopeStack.push(currentScope);
                currentScope = lowScope;
            } else if (currentTag === orgOpen) {
                scopeStack.push(currentScope);
                currentScope = orgScope;
            } else if (currentTag === upClose) {
                currentScope = scopeStack.pop();
            } else if (currentTag === lowClose) {
                currentScope = scopeStack.pop();
            } else if (currentTag === orgClose) {
                currentScope = scopeStack.pop();
            } else {
                output += currentTag;
            }
            currentTag = '';
        } else if (isTag) {
            currentTag += c;
        } else if (!isTag) {
            if (currentScope === upScope) {
                output += c.toUpperCase();
            } else if (currentScope === lowScope) {
                output += c.toLowerCase();
            } else {
                output += c;
            }
        }
    }

    return output;
}

/*
var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. ' +
    'We <mixcase>don\'t</mixcase> have <lowcase>anYTHing</lowcase> else.';

function changeText(text) {
 var indexStart, indexEnd, indexEndBetweenTags, tagName, wholeOpenTag, string, textBetweenTags,
     letter,
     wholeCloseTag, i, k;
 for (i = 0; i < text.length; i += 1) {
  indexStart = text.indexOf('>');
  indexEnd = text.indexOf('<');
  indexEndBetweenTags = text.indexOf('</');
  tagName = text.substring(indexStart, indexEnd + 1);
  wholeOpenTag = text.substring(indexEnd, indexStart + 1);
  string = '';
  textBetweenTags = text.substring(indexStart + 1, indexEndBetweenTags);
  if (tagName === 'mixcase') {
   letter = '', toLowerCase = false;
   for (k = 0; k < textBetweenTags.length; k += 1) {
    toLowerCase = Math.round(Math.random());
    letter = textBetweenTags.charAt(k);
    string += (toLowerCase ? letter.toUpperCase() : letter.toLowerCase());
   }
  }
  else if (tagName === 'upcase') {
   string = textBetweenTags.toUpperCase();
  }
  else if (tagName === 'lowcase') {
   string = textBetweenTags.toLowerCase();
  }
  text = text.replace(textBetweenTags, string);
  text = text.replace(wholeOpenTag, '');
  wholeCloseTag = text.substring(text.indexOf('<'), text.indexOf('>') + 1);
  text = text.replace(wholeCloseTag, '');
  indexStart = 0;
  indexEnd = 0;
  indexEndBetweenTags = 0;
  if (text.indexOf('<') < 0) {
   return console.log(text);
  }
 }
}