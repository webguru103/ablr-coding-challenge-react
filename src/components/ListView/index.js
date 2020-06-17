import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ImageItem from '../ImageItem';

const ListView = ({ items }) => {
  return (
    <Container>
      <Row>
        {(items || []).map(item => (
          <ImageItem
            key={`image-item-${item.slug}`}
            data={item}
          />
        ))}
      </Row>
    </Container>
  );
}

export default ListView;
