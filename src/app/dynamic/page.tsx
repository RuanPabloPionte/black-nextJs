"use client";
import { NextPage } from "next";
import { useEffect, useState } from "react";
// import { Col, Container, Row } from "reactstrap";

type apiReponse = {
  name: string;
  timestamp: Date;
};

const Dynamic: NextPage = () => {
  const [clientData, setClientData] = useState<apiReponse>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clientData = await fetch("/api/hello").then((res) => res.json());
    setClientData(clientData);
  };

  return (
    <main className="container">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <div className="row">
        <div className="col">
          <h3>Gerado no servidor:</h3>
        </div>

        <div className="col">
          <h3>Gerado no cliente: {clientData?.name}</h3>
        </div>
      </div>
    </main>
  );
};

export default Dynamic;
