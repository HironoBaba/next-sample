import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'


function MenuCardSanpo() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ambitious-desert-09018fa00.2.azurestaticapps.net/IMG_3242.jpg" />
      <Card.Body>
        <Card.Title>さんぽきろく</Card.Title>
        <Card.Text>
          Taylorちゃんのさんぽの記録が見れます
        </Card.Text>
        <Link href="/sanpo">
          見る
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MenuCardSanpo;