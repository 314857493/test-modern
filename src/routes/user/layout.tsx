import { Outlet, useNavigate } from '@modern-js/runtime/router';

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate('/user');
        }}
      >
        跳转到user
      </button>
      <Outlet />
    </div>
  );
}
