import { useParams } from '@modern-js/runtime/router';

const Index = () => {
  const { id } = useParams();
  return (
    <div className="container-box">
      <main>
        <div className="title">user:{id}页</div>
      </main>
    </div>
  );
};

export default Index;
