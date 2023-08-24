import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../style/Cards.css"

function Pricecards({data}) {
  return (
    <div className='cards'>
     {data.map((item => (
        <div className='effects'>
    <Card style={{ width: '18rem' }}> 
      <Card.Header as="h5">{item.heading}</Card.Header>
      <Card.Body>
        <Card.Title>{item.price}</Card.Title>
        <Card.Text>
        <ul>
        {item.benifits.map((benifit, index) => (
          <li key={index}>{benifit}</li>
        ))}
      </ul> 
        </Card.Text>
        <Button variant="primary">BUY</Button>
      </Card.Body>
    </Card>
    </div>
    )))}
    </div>
  );
}

export default Pricecards;