export function renderStock(data) {
    const appContainer = document.getElementById('app');

    let stockList = data?.beers;

    let row = '';
    stockList.forEach(item => {
        row += '<tr>'
        row += '<td>' + '#' + '</td>';
        row += '<td>' + item.namn + '</td>';
        row += '<td>' + item.prisinklmoms + '</td>';
        row += '<td style="text-align: right;>' + item.stock + '</td>';
        row += '</tr>';

    });

    appContainer.innerHTML = `
    <div class="container">
      <h1>Stock</h1>
      <div class="stockTable-container">
        <table class="stockTable"> <colgroup>
            <col> <col> 
            <col> 
            <col style="text-align: right;"> 
          </colgroup>
          <thead> <tr class="stockTable-header"> 
              <th>No.#</th>
              <th>Item</th>
              <th>Price</th> 
              <th>Remain Qty</th>
            </tr>
          </thead>
          <tbody> ${row} </tbody> </table>
      </div>
    </div>
  `;
}
