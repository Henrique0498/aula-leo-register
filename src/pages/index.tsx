import Head from "next/head";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClients from "../hooks/useClients";

export default function Home() {
  const {
    client,
    clients,
    tableVisible,
    selectClient,
    deleteClient,
    newClient,
    saveClient,
    displayTable
  } = useClients();

  return (
    <div
      className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        text-white
      `}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className={`flex justify-end`}>
              <Button color="green" className="mb-4" onClick={newClient}>
                Novo Client
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelect={selectClient}
              clientDelete={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            cancel={displayTable}
            clientChange={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
