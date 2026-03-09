import { useSelector } from "react-redux";

function Stock1() {
  const minValue = useSelector((state: any) => state.info.stocks[0].minValue);
  const maxValue = useSelector((state: any) => state.info.stocks[0].maxValue);
  const value = useSelector((state: any) => state.info.stocks[0].value);
  return (
    <>
      <h1>Stock 1 Details:</h1>
      <div>
        <p>Listed on : 26 Jan 2015</p>
        <p>Market Cap : $ 1.5 Billion</p>
        <p>PE Ratio : 25</p>
        <p>Dividend Yield : 2%</p>
        <p>Price: $ {value}</p>
        <p>Min Price : $ {minValue}</p>
        <p>Max Price : $ {maxValue}</p>
      </div>
    </>
  );
}
export default Stock1;