import { Container, Navbar } from "react-bootstrap";


function NavMenu() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <a href="/" className="navbar-brand"><h2 className="fw-bold">Learn suggest</h2></a>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link" href="/login">Login</a>
                </div>
            </div>
        </Container>
    </Navbar>
  );
}

export default NavMenu;