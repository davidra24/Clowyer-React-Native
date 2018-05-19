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

export function agregarClientes(db) {
  return fetch(URLCli, {
    method: 'POST',
    headers: {
      'Accept' : 'application/json',
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({
      identification: db.id,
      name: db.name,
      type: db.type,
      date: db.date,
      phone: db.phone
    })
    .then(response => response.json())
    .then(data => { console.warn("response: ", data) })
    .then((err) => { console.warn(err)})
  })
}
