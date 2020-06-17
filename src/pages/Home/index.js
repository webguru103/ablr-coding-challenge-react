import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import ListView from '../../components/ListView';
import { getStoreList } from '../../api/api';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    fetchList();
  }, [page]);

  const fetchList = async () => {
    try {
      const list = await getStoreList(page);

      if (list && list.results) {
        const data = list.results.map(item => ({
          title: item.title,
          slug: item.slug,
          photo: item.photo,
          location: item.location,
          logo: item.merchant.logo
        }));
        setItems([...items, ...data]);
      }
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <Container fluid className="pb-4">
      <Container className="p-2 mb-0 text-left h1">Store</Container>
      <ListView items={items} />
      {page < 3 && (
        <Button
          variant="outline-dark"
          className="view-more mt-2"
          onClick={() => setPage(page + 1)}
        >
          View More <span className="ml-2">&#709;</span>
        </Button>
      )}
      {page === 3 && <div className="mt-2 empty-more">No more stores :(</div>}
    </Container>
  );
};

export default HomePage;
