// "use client";
import { NextPage } from "next";
// import { Col, Container, Row } from "reactstrap";

const Dynamic: NextPage = () => {
  return (
    <main className="container">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <div className="row">
        <div className="col">
          <h3>Gerado no servidor:</h3>
        </div>

        <div className="col">
          <h3>Gerado no cliente:</h3>
        </div>
      </div>
    </main>
  );
};

export default Dynamic;
