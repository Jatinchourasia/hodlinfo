import React from "react";
import "./main.css";
const Main = () => {
  return (
    <div className="main">
      <div id="table-container">
        <table id="table">
          <tr class="table-data-row table-head">
            <td>
              <span>#</span>
            </td>
            <td>
              <span>Platform</span>
            </td>
            <td>
              <span>Last Traded Price</span>
            </td>
            <td>
              <span>Buy / Sell Price</span>
            </td>
            <td>
              <span>Difference</span>
            </td>
            <td>
              <span>Savings</span>
            </td>
          </tr>

          <tr class="table-data-row data-cont">
            <td class="left-childs">
              <span class="data">1</span>
            </td>
            <td>
              <span class="data">WazirX</span>
            </td>
            <td>
              <span class="data">₹ 50,10,890</span>
            </td>
            <td>
              <span class="data">₹ 50,10,890 / ₹ 50,12,393</span>
            </td>
            <td>
              <span class="data percent">9.40 %</span>
            </td>
            <td class="right-childs">
              <span class="data price">▲ ₹ 4,30,462</span>
            </td>
          </tr>
          <tr class="table-data-row data-cont">
            <td class="left-childs">
              <span class="data">2</span>
            </td>
            <td>
              <span class="data">Bitbns</span>
            </td>
            <td>
              <span class="data">₹ 49,49,750</span>
            </td>
            <td>
              <span class="data">₹ 49,25,973 / ₹ 49,41,433</span>
            </td>
            <td>
              <span class="data percent">8.06 %</span>
            </td>
            <td class="right-childs">
              <span class="data price">▲ ₹ 3,69,322</span>
            </td>
          </tr>
          <tr class="table-data-row data-cont">
            <td class="left-childs">
              <span class="data">3</span>
            </td>
            <td>
              <span class="data">Giotus</span>
            </td>
            <td>
              <span class="data">₹ 49,50,176</span>
            </td>
            <td>
              <span class="data">₹ 49,50,176 / ₹ 49,88,999</span>
            </td>
            <td>
              <span class="data percent">8.07 %</span>
            </td>
            <td class="right-childs">
              <span class="data price">▲ ₹ 3,69,748</span>
            </td>
          </tr>
          <tr class="table-data-row data-cont">
            <td class="left-childs">
              <span class="data">4</span>
            </td>
            <td>
              <span class="data">Colodax</span>
            </td>
            <td>
              <span class="data">₹ 25,83,138</span>
            </td>
            <td>
              <span class="data">₹ 25,75,167 / ₹ 26,08,984</span>
            </td>
            <td>
              <span class="data percent-down">-43.60 %</span>
            </td>
            <td class="right-childs">
              <span class="data price-down">▼ ₹ 19,97,289</span>
            </td>
          </tr>
          <tr class="table-data-row data-cont">
            <td class="left-childs">
              <span class="data">5</span>
            </td>
            <td>
              <span class="data">Zebpay</span>
            </td>
            <td>
              <span class="data">₹ 50,10,995</span>
            </td>
            <td>
              <span class="data">₹ 50,10,995 / ₹ 50,10,000</span>
            </td>
            <td>
              <span class="data percent">9.40 %</span>
            </td>
            <td class="right-childs">
              <span class="data price">▲ ₹ 4,30,567</span>
            </td>
          </tr>
          <tr class="table-data-row data-cont">
            <td class="left-childs">
              <span class="data">6</span>
            </td>
            <td>
              <span class="data">CoinDCX</span>
            </td>
            <td>
              <span class="data">₹ 49,77,618</span>
            </td>
            <td>
              <span class="data">₹ 49,64,995 / ₹ 49,79,387</span>
            </td>
            <td>
              <span class="data percent">8.67 %</span>
            </td>
            <td class="right-childs">
              <span class="data price">▲ ₹ 3,97,191</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Main;
