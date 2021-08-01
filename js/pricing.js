async function getPrices() {
  let url = 'http://localhost:8081/cottageprices';
  try {
      let res = await fetch(url);
      console.log("res.status = " + res.status); 
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

async function renderPrices() {
  let months = await getPrices();
  let html = `<table>
                <tr>
                  <th>Month</th>
                  <th>Price</th>
                </tr>`;

  months.forEach(month => { 
    let htmlSegment = `
      <div class="month">
        <tr>
          <td>${month.monthName}</td>
          <td>£ ${month.price}</td>
        </tr>
        `;

      html += htmlSegment;
  });

  html += `</table>`;
  let container = document.querySelector('.prices');
  container.innerHTML = html;
}

renderPrices();