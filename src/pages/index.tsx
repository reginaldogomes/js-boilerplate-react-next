import type { NextPage } from 'next'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Home: NextPage = () => {
  return (
    <Title>Hello World</Title>
  )
}

export default Home
