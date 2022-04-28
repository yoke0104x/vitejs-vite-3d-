import './carouse.css';
import { useRef, useState } from 'react ';
const arr = [
  {
    img: 'https://www.helloimg.com/images/2022/04/28/RMmbJC.png',
  },
  {
    img: 'https://www.helloimg.com/images/2022/04/28/RMmbJC.png',
  },
  {
    img: 'https://www.helloimg.com/images/2022/04/28/RMmbJC.png',
  },
  {
    img: 'https://www.helloimg.com/images/2022/04/28/RMmbJC.png',
  },
  {
    img: 'https://www.helloimg.com/images/2022/04/28/RMmbJC.png',
  },
];

const Carouse = () => {
  const touchRef = useRef();
  const [current, setCount] = useState(0);
  /**
   * 按下鼠标
   */
  const touch = () => {
    console.log(123);
    touchRef.current = true;
  };

  /**
   * 拖动
   */
  const move = () => {
    if (touchRef?.current) {
      console.log('move');
    }
  };

  /**
   * 释放鼠标
   */
  const moseup = () => {
    console.log('moseup');
    touchRef.current = false;
  };

  return (
    <div className="carouse">
      <div className="img"></div>
      <div
        className="all"
        onMouseDown={touch}
        onMouseMove={move}
        onMouseUp={moseup}
      >
        {arr?.map((el) => (
          <div
            className="img-swiper"
            style={{ backgroundImage: `url(${el.img})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Carouse;
