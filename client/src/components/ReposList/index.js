import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function ReposList({ repositories, selectCurrent }) {
  return (
    <ListGroup defaultActiveKey='#0'>
      {repositories.map((repository, index) => (
        <ListGroup.Item
          key={index}
          href={`#${index}`}
          action
          onClick={() => selectCurrent(index)}
          style={{ fontSize: '20px' }}
        >
          {repository.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
