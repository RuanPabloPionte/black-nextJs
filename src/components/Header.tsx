"use client";
import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
  return (
    <Navbar container="md" color="primary" className="mb-2">
      <Link href="/" className="navbar-brand text-white">
        Início
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" className="nav-link me-2 text-white">
          Produtos
        </Link>
        <Link href="/cart" className="nav-link text-white">
          Carrinho
        </Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
