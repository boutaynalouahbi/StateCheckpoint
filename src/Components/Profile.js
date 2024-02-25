import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Profile({data}) {
  return (
   <div className='mt-3' >
    <h1>Profil</h1>
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={data.imgSrc} />
      <Card.Body>
        <Card.Title>{data.fullName}</Card.Title>
        <Card.Text>
           <span> Bio: {data.bio}</span> <br/>
           <span> Profession: {data.profession}</span> <br/>
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  )
}
