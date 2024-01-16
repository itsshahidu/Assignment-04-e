import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();

  const [keyword, setKeyword] = useState(urlKeyword || '');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/search/${keyword.trim()}`);
      setKeyword('');
    } else {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <InputGroup>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
          placeholder='Search Products...'
          className='mr-sm-2'
          style={{
            backgroundColor: '#f8f9fa', 
            color: 'black', 
            borderRadius: '0',
            border: '2px solid #f8f9fa', 
            boxShadow: 'none',
            padding: '10px',
            fontSize: '16px',
          }}
        />
        <Button type='submit' variant='outline-secondary' className='py-2' style={{ borderRadius: '0' }}>
          Search
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchBox;
