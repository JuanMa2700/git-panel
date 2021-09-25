import React from 'react';
import { Card } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import './styles.css';

export default function ProfileCard({ user }) {
  return (
    <Card
      style={{ width: '18rem', margin: 'auto' }}
      className='col-md-4 col-sm-12'
    >
      <Card.Body className='d-flex flex-row'>
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
