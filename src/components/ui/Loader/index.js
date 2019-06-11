import React from 'react';
import styled from "styled-components";
import Gif from './loader.gif'

const LoaderBox = styled.img`
  display: block;
  margin: 100px auto;
  width: 250px;
`

export const Loader = () => (
  <LoaderBox className='loader' src={Gif} alt='Loading...' />
)