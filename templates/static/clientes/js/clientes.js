const add_carro = () => {
  const container = document.getElementById("form-carro");
  const html = `
    <div class='row'>
      <div class='col-md'>
        <input type='text' placeholder='carro' class='form-control' name='carro'>
      </div>
      <div class='col-md'>
        <input type='text' placeholder='Placa' class='form-control' name='placa'>
      </div>
      <div class='col-md'>
        <input type='number' placeholder='ano' class='form-control' name='ano'>
      </div>
    </div> <br>
  `;
  container.innerHTML += html;
};

const exibir_form = (tipo) => {
  add_cliente = document.getElementById("adicionar-cliente");
  att_cliente = document.getElementById("att_cliente");

  if (tipo == "1") {
    att_cliente.style.display = "none";
    add_cliente.style.display = "block";
  } else if (tipo == "2") {
    att_cliente.style.display = "block";
    add_cliente.style.display = "none";
  }
};
