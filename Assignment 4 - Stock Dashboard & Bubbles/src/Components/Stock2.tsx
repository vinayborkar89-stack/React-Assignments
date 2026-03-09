import { useSelector } from "react-redux";

function Stock2() {
  const minValue = useSelector((state: any) => state.info.stocks[1].minValue);
  const maxValue = useSelector((state: any) => state.info.stocks[1].maxValue);
  const value = useSelector((state: any) => state.info.stocks[1].value);
  
  return (
    <>
      <h1>Stock 2 Details:</h1>
      <div>
        <p>Listed on : 15 August 2020</p>
        <p>Market Cap : $ 1 Billion</p>
        <p>PE Ratio : 20</p>
        <p>Dividend Yield : 1%</p>
        <p>Price: $ {value}</p>
        <p>Min Price : $ {minValue}</p>
        <p>Max Price : $ {maxValue}</p>
      </div>
    </>
  );
}
export default Stock2;