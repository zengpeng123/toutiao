import React from 'react';

import Footer from '@/components/FooterBar';
import { Button } from 'antd-mobile';

import '@/utils/rem.js';
import '../styles/index.less';

export default function() {
  return (
    <div>
      <Button>1123</Button>
      <div className="test">
        <p>123</p>
        <p className="ellipsis">hfjdshbfrgsxx</p>
      </div>
      <Footer />
    </div>
  );
}
