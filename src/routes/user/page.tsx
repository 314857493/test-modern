import { useState } from 'react';
import { useLoaderData } from '@modern-js/runtime/router';

const Index = () => {
  const [arr] = useState<any[]>();
  const data = useLoaderData();
  return (
    <div className="container-box">
      <div className="title">user页</div>
      <div>
        {arr?.map(item => {
          return item.aa;
        })}
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Index;
