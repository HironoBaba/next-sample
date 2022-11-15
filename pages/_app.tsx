import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { Navbar, Container } from 'react-bootstrap'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Taylor House
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp