import { Helmet } from '@modern-js/runtime/head';
import './index.css';

const Index = () => {
  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>

      <main>
        <div className="title">页面404了hxd</div>
      </main>
    </div>
  );
};

export default Index;
