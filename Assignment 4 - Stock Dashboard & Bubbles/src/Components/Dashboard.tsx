import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const stock1Price = useSelector((state: any) => state.info.stocks[0].value);
  const stock2Price = useSelector((state: any) => state.info.stocks[1].value);

  const [stock1Data, setStock1Data] = useState<number>(stock1Price);
  const [stock2Data, setStock2Data] = useState<number>(stock2Price);

  useEffect(() => {
    setInterval(() => {
      let stock1Value = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
      setStock1Data(stock1Value);
      dispatch({ type: "info/setValue", payload: { stock: "stock1", value: stock1Value } });
    }, 3000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      let stock2Value = Math.floor(Math.random() * (1000 - 10 + 1)) + 10;
      setStock2Data(stock2Value);
      dispatch({ type: "info/setValue", payload: { stock: "stock2", value: stock2Value } });
    }, 3000);
  }, []);


  return (
    <>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Stock 1</h1>
          <h1>$ {stock1Data}</h1>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Stock 2</h1>
          <h1>$ {stock2Data}</h1>
        </div>
      </div>
    </>
  );
}
export default Dashboard;