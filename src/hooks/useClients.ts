import { useEffect, useState } from "react"
import CollectionClient from "../backend/database/CollectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

const useClients = () => {
  const repo: ClientRepository = new CollectionClient()
  const [client, setClient]= useState<Client>(Client.void())
  const [clients, setClients]= useState<Client[]>([])
  const { tableVisible, formVisible, displayTable, displayForm} = useTableOrForm()

    useEffect(getAll, [])

    function getAll(){
      repo.getAll().then(clients => {
        setClients(clients)
        displayTable()
      })
    }
  
    function selectClient(client: Client) {
      setClient(client)
      displayForm()
    }
  
    function newClient() {
      setClient(Client.void())
      displayForm()
    }
  
    async function deleteClient(client: Client) {
      await repo.delete(client)
  
      getAll()
    }
  
    async function saveClient(client: Client){
      await repo.save(client)
  
      getAll()
    }
  
  return {
    client,
    clients,
    tableVisible,
    deleteClient,
    getAll,
    newClient,
    saveClient,
    selectClient,
    displayTable
  }
}

export default useClients
