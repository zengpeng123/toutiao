import React from 'react';
// import Icon from '../Icon-svg';
import ReactSVG from 'react-svg';
import add from '../../icons/svg/add.svg';
import './index.less';

export default function() {
  return (
    <footer>
      <ul className="footer">
        <li>
          {/* <Icon iconName="map" /> */}
          <ReactSVG src={add} />
          <span>首页</span>
        </li>
        <li>
          <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="" />
          <span>首页</span>
        </li>
        <li>
          <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="" />
          <span>首页</span>
        </li>
        <li>
          <img src="https://www.baidu.com/img/baidu_jgylogo3.gif" alt="" />
          <span>首页</span>
        </li>
      </ul>
    </footer>
  );
}
