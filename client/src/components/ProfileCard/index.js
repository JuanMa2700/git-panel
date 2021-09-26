import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

export default function ProfileCard({ user }) {
  return (
    <Card style={{ width: '18rem' }} className='col-md-4 col-sm-12 ms-4'>
      <Card.Body className='d-flex flex-row' style={{ width: '100%' }}>
        <div className='text'>
          <Card.Title>{`${user.name} ${user.lastname}`}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {user.email}
          </Card.Subtitle>
        </div>
        <FaUserCircle />
      </Card.Body>
    </Card>
  );
}
