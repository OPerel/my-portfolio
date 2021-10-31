import { useEffect, useState } from 'react';
import './useTypeText.css';

const useTypeText = (content, options = {}) => {
  const { typeSpeed, endOfLinePause, caretColor, onTypeEnd } = options;
  const caret = `
    <span
      id="caret"
      aria-hidden="true"
      style="border-color: ${caretColor || ''};"
    />
  `;

  let t1, t2;
  const [text, setText] = useState('');
  const aText = content.split('\n');
  const iSpeed = typeSpeed || 60; // time delay of print out
  let iIndex = 0; // start printing array at this position
  let iArrLength = aText[0].length; // the length of the text array
  const iScrollAt = 20; // start scrolling up at this many lines

  let iTextPos = 0; // initialise text position
  let sContents = ''; // initialise contents variable
  let iRow; // initialise current row

  const typewriter = () => {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);

    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    if (aText[iRow][iTextPos] === '<') {
      // if char is an opening tag `<`...
      // get the tag closing closing char index
      const tagEnd = aText[iIndex].indexOf('>', iTextPos);
      // add it all at once to the rendered text
      setText(sContents + aText[iIndex].substring(0, tagEnd) + '>' + caret);
      // and set the text position
      iTextPos = tagEnd + 1;
    }
    setText(sContents + aText[iIndex].substring(0, iTextPos) + caret);
    if (iTextPos++ === iArrLength) {
      // if is end of the line
      iTextPos = 0;
      iIndex++;
      if (iIndex !== aText.length) {
        // if it isn't the last line
        iArrLength = aText[iIndex].length;
        t1 = setTimeout(typewriter, endOfLinePause || 500);
      } else {
        // once finished
        if (onTypeEnd) onTypeEnd();
      }
    } else {
      t2 = setTimeout(typewriter, iSpeed);
    }
  };

  useEffect(() => {
    typewriter();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return text;
};

export default useTypeText;
