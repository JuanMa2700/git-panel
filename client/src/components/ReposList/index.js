import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { gql, useQuery } from '@apollo/client';

const GET_REPOS = gql`
  query {
    viewer {
      repositories(first: 30, after: null) {
        totalCount
        pageInfo {
          endCursor
        }
        nodes {
          name
          description
          createdAt
        }
      }
    }
  }
`;

export default function ReposList() {
  const { loading, error, data } = useQuery(GET_REPOS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <ListGroup defaultActiveKey='#0'>
      {data.viewer.repositories.nodes.map((repository, index) => (
        <ListGroup.Item
          key={index}
          href={`#${index}`}
          action
          style={{ fontSize: '20px' }}
        >
          {repository.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
