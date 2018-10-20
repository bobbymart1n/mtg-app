import React from 'react';
import { Subscribe } from 'unstated';
// import styled from 'styled-components';
import Cards from './Cards';

const Sets = () => (
  <Subscribe to={[Cards]}>
    {sets => (
      <button type='button' onClick={() => sets.handleGettingSet('xln')}>Ixalan</button>
    )}
  </Subscribe>
)

export default Sets
