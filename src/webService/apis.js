const URLCli = 'http://clowyer.herokuapp.com/client';

export function obtenerClientes() {
  return fetch(URLCli)
    .then(response => response.json())
    .then(data => data.Client)
    .then(clientes => clientes.map(cliente => ({
        identification: cliente.identification,
        name: cliente.name,
        type: cliente.type,
        date: cliente.date,
        phone: cliente.phone
    })))
};

export async function agregarClientes(db) {
  fetch(URLCli, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'Accept-Encoding': '*',
    },
    body: JSON.stringify({
        identification: db.identification,
        name: db.name,
        type: db.type,
        date: db.date,
        phone: db.phone
    }),
  }).then(response => response.json());
}
