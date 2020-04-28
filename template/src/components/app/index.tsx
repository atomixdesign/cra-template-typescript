import React from 'react'
import logo from 'assets/images/logo.svg'
import StyledApp from './styled-app'
import StyledHeader from './styled-header'
import StyledLink from './styled-link'
import StyledLogo from './styled-logo'

export const App: React.FC = () => (
  <StyledApp className="App">
    <StyledHeader className="App-header">
      <StyledLogo
        src={logo}
        className="App-logo"
        alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/app/index.tsx</code>
        {' '}
        and save to reload.
      </p>
      <StyledLink
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </StyledLink>
    </StyledHeader>
  </StyledApp>
)

export default App
