// "use client";
import { GetServerSideProps, NextPage } from "next";
// import { ReactNode, useEffect, useState } from "react";

type ApiResponse = {
  name: string;
  timestamp: Date;
};

const Dynamic = async () => {
  // const [clientData, setClientData] = useState<ApiResponse>();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const clientData = await fetch("/api/hello").then((res) => res.json());
  //   setClientData(clientData);
  // };

  // renderiza do lado no servidor, olhar no network do browser
  const clientData = await fetch("http://localhost:3000/api/hello").then(
    (res) => res.json()
  );

  return (
    <main className="container">
      <h1 className="my-5">Como funcionam as renderizações do Next.js</h1>

      <div className="row">
        <div className="col">
          <h3>Gerado no servidor:</h3>
          <p>{}</p>
        </div>

        <div className="col">
          <h3>Gerado no cliente: </h3>
          <p>{clientData?.name}</p>
          <p>
            {clientData?.timestamp.toLocaleString("pt-Br", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            })}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Dynamic;
