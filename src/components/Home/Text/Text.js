import React, { useRef } from 'react';
import wheel from '../../../assets/images/wheel.svg';
import './Text.scss';
import useTypeText from '../../../hooks/useTypeText';
const Text = ({ setShowText, setHover }) => {
  const textRef = useRef(null);
  const cb = () => {
    if (textRef.current) {
      setTimeout(() => {
        textRef.current.classList.add('fade-out');
      }, 2500);
    }
    setTimeout(() => {
      setShowText(false);
      setHover(false);
    }, 3300);
  };
  const t =
    "Philo: love, Sophia: wisdom (from Greek: φιλοσοφία, philosophia, 'love of wisdom').\n\n" +
    "When Socrates was asked if he's a wise man, he replied that he loves wisdom, i.e., he is a <b>philosopher</b>.\n" +
    "Loving wisdom means desiring and wanting it. It means that, in a way, you don't have it.\n" +
    'So what being a philosopher really means to me is a never ending quest for knowledge.\n' +
    'Knowledge of all sorts of kinds: practical and scientific, theoretical and intellectual. As well as what one might call spiritual knowledge, ' +
    'which is indescribable by language, and is only possible by means of direct experience.\n' +
    "So being a philosopher means realizing that I don't know, that in a sense I will never do know.\n" +
    'And with this realization I find a great sense of humility.\n' +
    'To listen before I speak.\n' +
    'To be open to new ideas and points of view.\n' +
    'To always remember I have more I can learn.\n' +
    'And that there is always something to strive for.\n\n' +
    `<img src="${wheel}" alt="wheel of dhamma" class="rotating" />` +
    "Everything is constantly changing, so don't hold on too tight.";

  const text = useTypeText(t, {
    // typeSpeed: 100,
    endOfLinePause: 650,
    caretColor: '#FF3D00',
    onTypeEnd: cb,
  });

  return (
    <div id="text" ref={textRef}>
      <p dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

export default Text;
