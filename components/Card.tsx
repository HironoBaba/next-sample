import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'


function MenuCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://ambitious-desert-09018fa00.2.azurestaticapps.net/IMG_1334.jpg" />
      <Card.Body>
        <Card.Title>ごはんきろく</Card.Title>
        <Card.Text>
          Taylorちゃんのごはんの記録が見れます
        </Card.Text>
        <Link href="/feed">
          見る
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MenuCard;