import React from 'react';
import { Card, Button, Col, Row } from 'antd';

const products = [
  { id: 1, name: 'Product 1', description: 'This is product 1', price: '$19.99' },
  { id: 2, name: 'Product 2', description: 'This is product 2', price: '$29.99' },
  { id: 3, name: 'Product 3', description: 'This is product 3', price: '$39.99' },
 { id: 4, name: 'Product 4', description: 'This is product 4', price: '$49.99' },
 { id: 5, name: 'Product 5', description: 'This is product 5', price: '$59.99' },
 { id: 6, name: 'Product 6', description: 'This is product 6', price: '$69.99' },
 { id: 7, name: 'Product 7', description: 'This is product 7', price: '$79.99' },
 { id: 8, name: 'Product 8', description: 'This is product 8', price: '$89.99' },
];

const Products = () => {
  return (
   <div style={{ padding: '20px' }}>
     <h1>Products</h1>
     <Row gutter={16}>
       {products.map(product => (
         <Col span={6} key={product.id}>
            <Card title={product.name} bordered={false}>
             <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <Button type="primary">Add to Cart</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products