import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function ProductDetail() {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);
  const location = useLocation();
  console.log(location.pathname.split('/')[1]);

  const handleSubmit = () => {
    console.log('Submite data then render');
    navigate('/');
  };
  return (
    <main>
      <div>
        ProductDetail {params.id}
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          dolorum cum, expedita nihil magnam, deleniti nesciunt consectetur
          natus repudiandae maxime explicabo, autem rem culpa atque itaque nobis
          qui sapiente tenetur?
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </main>
  );
}
