module.exports = ({ nombre, apellido, edad, nickname, list }) => {
  const date = new Date();
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Reporte</title>
    <style>
      .header-div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .main-title {
        margin: 0rem 0.5rem;
        font-size: 3rem;
      }
      .subtitle {
        margin: 0rem 0.5rem;
        font-size: 1.5rem;
      }
      .normal-text {
        margin: 1rem 0.5rem;
      }
      .service-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      table {
        border: 1px solid black;
        margin: 1.7rem 3rem;
      }
      th,
      td {
        border: 1px solid black;
      }
      .car-and-services {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      .employee-table {
        width: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
      }
    </style>
  </head>
  <body>
    <section id="header-section">
      <div class="header-div">
        <div class="header-text">
          <h1 class="main-title">REPORTE DEL NEGOCIO</h1>
          <h3 class="subtitle">CARWASH</h3>
          <p class="normal-text">Desde 0/00/00 a 0/00/00</p>
        </div>

        <img class="logo" src="https://picsum.photos/150/150" />
      </div>
    </section>
    <hr />
    <section id="services-section">
      <h3 class="subtitle">Reporte de servicios</h3>
      <div class="service-info">
        <ul>
          <li>Recaudo:###</li>
          <li>Total servicios:###</li>
        </ul>
        <table>
          <thead>
            <th>Servicios terminados</th>
            <th>Servicios abiertos</th>
          </thead>
          <tbody>
            <tr>
              <td>##</td>
              <td>##</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="car-and-services">
        <table>
          <thead>
            <th></th>
            <th>Servicio 1</th>
            <th>Servicio 2</th>
            <th>Servicio 3</th>
            <th>Servicio 4</th>
            <th>Servicio 5</th>
            <th>Total</th>
          </thead>
          <tbody>
            <tr>
              <td>Carro</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
            </tr>
            <tr>
              <td>Camioneta</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ranking-div">
        <h4>Ranking de servicios</h4>
        <ol>
          <li>service 1</li>
          <li>service 2</li>
          <li>service 3</li>
          <li>service 4</li>
          <li>service 5</li>
        </ol>
      </div>
    </section>
    <hr />
    <section id="reports-section">
      <h3 class="subtitle">Reporte de empleados</h3>
      <p>Número de empleados: ##</p>
      <div class="employee-table">
        <table>
          <thead>
            <th></th>
            <th>n. servicios</th>
            <th>Dinero recaudado</th>
            <th>Calificacion</th>
          </thead>
          <tbody>
            <tr>
              <td>Empleado 1</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
            </tr>
            <tr>
              <td>Empleado 2</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
            </tr>
            <tr>
              <td>Empleado 3</td>
              <td>##(%)</td>
              <td>##(%)</td>
              <td>##(%)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </body>
</html>
  
    `;
};
