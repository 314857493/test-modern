import { Helmet } from '@modern-js/runtime/head';
import { Link } from '@modern-js/runtime/router';

const Index = () => (
  <div className="container-box">
    <Helmet>
      <link
        rel="icon"
        type="image/x-icon"
        href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
      />
    </Helmet>
    <main>
      <div className="title">
        Welcome to
        <img
          className="logo"
          src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg"
          alt="Modern.js Logo"
        />
        <p className="name">Modern.js</p>
      </div>
      <p className="description">
        Get started by editing <code className="code">src/routes/page.tsx</code>
      </p>
      <div className="grid">
        <Link to={'/user/123'}>user</Link>
        <Link to={'/test'}>test</Link>
      </div>
    </main>
  </div>
);

export default Index;
