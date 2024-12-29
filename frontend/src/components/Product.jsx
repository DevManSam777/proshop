import { Card } from 'react-bootstrap';

const Product = ({product}) => {    
    return (
        // <Card className='my-3 p-3 rounded'>
        //     <a href={`/product/${product._id}`}>
        //         <Card.Img src={product.image} variant='top' />
        //     </a>
        //     <Card.Body>
        //         <a href={`/product/${product._id}`}>
        //             <Card.Title as='div'>
        //                 <strong>{product.name}</strong>
        //             </Card.Title>
        //         </a>
        //         <Card.Text as='h3'>
        //            ${product.price}
        //         </Card.Text>
        //     </Card.Body>
        // </Card>
        <Card className="my-3 p-3 rounded d-flex flex-column"> 
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" className="aspect-ratio object-fit-contain"  style={{ height: '200px' }} /> 
      </a>
      <Card.Body className="flex-grow-1"> 
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
    )
};

export default Product;