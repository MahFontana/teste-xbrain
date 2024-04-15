import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './pageProduct.css'
import ProductCard from '../components/Produto/Produto.jsx';
import Headers from '../components/header/header.jsx';
import Form from '../components/form/form.jsx';
import Footers from '../components/footer/footer.jsx';
import imagemProduto1 from '../assets/images/produto-01.jpeg';
import imagemProduto2 from '../assets/images/produto-02.jpeg';
import imagemProduto3 from '../assets/images/produto-03.jpeg';
import imagemProduto4 from '../assets/images/produto-04.jpeg';
import imagemProduto5 from '../assets/images/produto-05.jpeg';
import imagemProduto6 from '../assets/images/produto-06.jpeg';
import imagemProduto7 from '../assets/images/produto-07.jpeg';
import imagemProduto8 from '../assets/images/produto-08.jpeg';

//Produtos
const produtos = [
  { nome: "AirPods Apple Fones de ouvido", imagem: imagemProduto1, valor: 1499, payment: "Em até 12x de R$ 124,92 R$", cash_payment: "R$ 1.349 à vista (10% de desconto)" },
  { nome: "Capa de silicone para iPhone 8/7", imagem: imagemProduto2, valor: 299, payment: "Em até 12x de R$ 24,92", cash_payment: "R$ 269,10 à vista (10% de desconto)" },
  { nome: "Apple Pencil", imagem: imagemProduto3, valor: 729, payment: "Em até 12x de R$ 60,75", cash_payment: "R$ 656,10 à vista (10% de desconto)" },
  { nome: "Magic Mouse 2 - Prateado", imagem: imagemProduto4, valor: 549, payment: "Em até 12x de R$ 45,75", cash_payment: "R$ 494,10 à vista (10% de desconto)" },
  { nome: "Caixa prateada de alumínio com pulseira esportiva branca", imagem: imagemProduto5, valor: 2899, payment: "Em até 12x de R$ 241,58", cash_payment: "R$ 2.609,10 à vista (10% de desconto)" },
  { nome: "Cabo de lightning para USB (1m)", imagem: imagemProduto6, valor: 149, payment: "Em até 12x de R$ 12,42", cash_payment: "R$ 134,10 à vista (10% de desconto)" },
  { nome: "Smart Keyboard para iPad Pro 12,9 polegadas - Inglês (EUA)", imagem: imagemProduto7, valor: 1099, payment: "Em até 12x de R$ 91,58", cash_payment: "R$ 989,10 à vista (10% de desconto)" },
  { nome: "Produto 8", imagem: imagemProduto8, valor: 149, payment: "Em até 12x de R$ 12,42", cash_payment: "R$ 134,10 à vista (10% de desconto)" },
];

const produtosFormatados = produtos.map(produto => {
  return {
    ...produto,
    valor: `R$${produto.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
  };
});


function App() {

  const [quantidades, setQuantidades] = useState(produtosFormatados.map(() => 0));

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // Total dos valores totais 
    const sum = quantidades.reduce((acc, quantity, index) => {
      return acc + (quantity * produtos[index].valor);
    }, 0);
    setTotalValue(sum);
  }, [quantidades]);

  // Adicionar
  const handleAdd = (index) => {
    setQuantidades(prevQuantidades => {
      const newQuantidades = [...prevQuantidades];
      newQuantidades[index]++;
      return newQuantidades;
    });
  };

  // Remover
  const handleRemove = (index) => {
    setQuantidades(prevQuantidades => {
      const newQuantidades = [...prevQuantidades];
      if (newQuantidades[index] > 0) {
        newQuantidades[index]--;
      }
      return newQuantidades;
    });
  };

  // Criar os ProductCard
  const renderProductCards = () => {
    return produtos.map((produto, index) => {
      // Valor total do produto = quantidade * unitário
      const totalValue = quantidades[index] * produto.valor;

      return (
        <Grid item xs={12} sm={6} md={3} key={index} style={{ marginBottom: '10px'}}>
          <ProductCard
            productName={produto.nome}
            image={produto.imagem}
            value={`R$${produto.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            totalValue={`R$${totalValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            payment={produto.payment}
            cash_payment={produto.cash_payment}
            quantity={quantidades[index]}
            onAdd={() => handleAdd(index)}
            onRemove={() => handleRemove(index)}
          />
        </Grid>
      );
    });
  };

  return (
    <div className='div'>
      <div>
        <Headers />
        <br />
        <br />
        <Grid container spacing={2}>
          {renderProductCards()}
        </Grid>
        <br />
        <Form />
      </div>
      <br />
      <div>

        <h4 style={{ color: 'black' }}>Total: {totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
      
        <Footers/>
      </div>
      
    </div>
    

  );
}

export default App;
