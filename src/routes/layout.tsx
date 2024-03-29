import { Outlet, useNavigate } from '@modern-js/runtime/router';
import './index.css';

import { RuntimeContext } from '@modern-js/runtime';

export const init = (context: RuntimeContext) => {
  console.log(context);
  return {
    message: 'Hello World',
  };
};

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        main
      </button>
      <Outlet />
    </div>
  );
}
