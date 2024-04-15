import React from 'react';
import './finalization.css'

//import totalValue from './pageProdutos.jsx'
const Finalization = ({totalValue}) => {
  return (
    <div className="card">
      <h3 className="h3">
        John Doe,
        <br />
         Sua compra no valor de R$ 2.000,00 {/*{totalValue} */}
        <br />
        foi finalizada com sucesso
      </h3>
      <img src="./src/assets/images/purchase.png" alt="" style={{ width: '200px', height: '200px' }} />
      <a href="/"><button className='btn'>Iniciar nova Compra</button> </a>
    </div>
  );
};

export default Finalization;
