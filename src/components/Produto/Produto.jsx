import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './Produto.css';

export default function ProductCard({ productName, image, value, payment, cash_payment, quantity, onAdd, onRemove , onAddEnd, totalValue}) {
  return (
    <Card className="card">
      <CardContent className="cardContent">
        <img src={image} alt={productName} className="image" />
        <Typography>
          <Typography gutterBottom  component="div" className="productName">
            {productName}
          </Typography>
          <Typography variant="h5" color="text.secondary" className="paymentLabel">
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="payment">
            {payment}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="cashPayment">
            {cash_payment}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="cashPayment">
            {totalValue}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions className="actions">
        <CardActions>
          <Button size="small" onClick={onRemove} className="button">
            <RemoveIcon /> 
          </Button>
          <Typography variant="h6" className="quantityValue">{quantity}</Typography>
          <Button size="small" onClick={onAdd} className="button">
            <AddIcon /> 
          </Button>
        </CardActions>
      </CardActions>
    </Card>
  );
}
