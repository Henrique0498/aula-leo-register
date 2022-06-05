import Client from "../../core/Client";
import { IconEdit, IconRemove } from "../Icons";

interface TableProps {
  clients: Client[];
  clientSelect?: (client: Client) => void;
  clientDelete?: (client: Client) => void;
}

const Table = (props: TableProps) => {
  const displayActions = props.clientSelect || props.clientDelete;

  function renderHeader() {
    return (
      <tr>
        <th className={`text-left p-4`}>Código</th>
        <th className={`text-left p-4`}>Nome</th>
        <th className={`text-left p-4`}>Idade</th>
        {displayActions && <th className={`text-left p-4`}>Ações</th>}
      </tr>
    );
  }

  function renderBody() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className={`text-left p-4`}>{client.id}</td>
          <td className={`text-left p-4`}>{client.name}</td>
          <td className={`text-left p-4`}>{client.age}</td>
          {displayActions && renderAction(client)}
        </tr>
      );
    });
  }

  function renderAction(client: Client) {
    return (
      <td className={`flex justify-center`}>
        {props.clientSelect && (
          <button onClick={()=> props.clientSelect?.(client)}
            className={`
          flex justify-center items-center
          text-green-600 rounded-full p-2 m-1
          hover:bg-purple-50
        `}
          >
            {IconEdit}
          </button>
        )}

        {props.clientDelete && (
          <button onClick={()=> props.clientDelete?.(client)}
            className={`
          flex justify-center items-center
          text-red-500 rounded-full p-2 m-1
          hover:bg-purple-50
        `}
          >
            {IconRemove}
          </button>
        )}
      </td>
    );
  }

  return (
    <table className={`w-full rounded-xl overflow-hidden`}>
      <thead
        className={`
        text-gray-100
        bg-gradient-to-r from-purple-500 to-purple-800
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderBody()}</tbody>
    </table>
  );
};

export default Table;
