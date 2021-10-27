import React, { useEffect, useState } from "react";
import './Text.scss';
import wheel from '../../../assets/images/wheel.svg';
const Text = ({ setShowText, setHover }) => {

  const [text, setText] = useState('');

  let t1, t2, t3;
  const type = () => {
    const aText = t.split('\n');
    const iSpeed = 60; // time delay of print out
    let iIndex = 0; // start printing array at this position
    let iArrLength = aText[0].length; // the length of the text array
    const iScrollAt = 20; // start scrolling up at this many lines

    let iTextPos = 0; // initialise text position
    let sContents = ''; // initialise contents variable
    let iRow; // initialise current row

    function typewriter() {
      sContents = ' ';
      iRow = Math.max(0, iIndex-iScrollAt);

      while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br />';
      }
      if (aText[iRow].startsWith('<img')) {
        setText(sContents + aText[iIndex]);
        iTextPos = iArrLength;
      } else {
        setText(sContents + aText[iIndex].substring(0, iTextPos) + '<span aria-hidden="true"/>');
      }
      if ( iTextPos++ === iArrLength ) { // if is end of the line
        iTextPos = 0;
        iIndex++;
        if ( iIndex !== aText.length ) { // if it isn't the last line
          iArrLength = aText[iIndex].length;
          t1 = setTimeout(typewriter, 650);
        } else {
          t3 = setTimeout(() => {
            setShowText(false);
            setHover(false);
          }, 2500)
        }
      } else {
        t2 = setTimeout(typewriter, iSpeed);
      }
    }
    typewriter();
  }

  useEffect(() => {
    type()
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    }
  }, [])

  return (
    <div id="text">
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  )
}

export default Text

const t = 'Philo - Love, Sophia - Wisdom.\n' +
  'When Socrates was asked if he\'s a wise man, he replied that he loves wisdom, i.e., he is a philosopher.\n' +
  'Loving wisdom means desiring and wanting it. It means that, in a way, you don\'t have it.\n' +
  'So what being a philosopher really means to me is a never ending quest for knowledge.\n' +
  'Knowledge of all sorts of kinds: practical and scientific, theoretical and intellectual. As well as what one might call spiritual knowledge, ' +
  'which is indescribable by language, and is only possible by means of direct experience.\n' +
  'So being a philosopher means realizing that I don\'t know, that in a sense I will never do know.\n' +
  'And with this realization I find a great sense of humility.\n' +
  'To listen before I speak.\n' +
  'To be open to new ideas and points of view.\n' +
  'To always remember I have more I can learn.\n' +
  'And that there is always something to strive for.\n\n' +
  `<img src="${wheel}" alt="wheel of dhamma" class="rotating" />` +
  '<span style="color: #FFF;">Everything is constantly changing, so don\'t hold on too tight.</span>'