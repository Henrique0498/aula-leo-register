import { useState } from "react";
import Client from "../../core/Client";
import Entry from "../../Entry";
import Button from "../Button";

interface FormProps {
  client: Client
  clientChange?: (client: Client) => void
  cancel: () => void
}

const Form = (props: FormProps) => {
  const id = props.client?.id ?? null;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {id && (
        <Entry text="Código do usuário" value={id} readOnly className="mb-5" />
      )}
      <Entry text="Nome" value={name} onChange={setName} className="mb-5" />
      <Entry text="Idade" type="number" value={age} onChange={setAge} />
      <div className="flex justify-end mt-3">
        <Button color="blue" className="mr-2" onClick={()=> props.clientChange?.(new Client(name, +age, id))}>
           {id ? 'Alterar' : 'Salvar'}
        </Button>
        <Button onClick={props.cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default Form;
