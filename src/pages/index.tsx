import React from 'react';
import { Button } from 'antd-mobile';

import '../styles/index.less';
import styles from './index.less';

export default function() {
  return (
    <div className={styles.normal}>
      <Button>1123</Button>
      <div className="test">
        <p>123</p>
        <p className="ellipsis">hfjdshbfrgsxx</p>
      </div>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">Getting Started</a>
        </li>
      </ul>
    </div>
  );
}
