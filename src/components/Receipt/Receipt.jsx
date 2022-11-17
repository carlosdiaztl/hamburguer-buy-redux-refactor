import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actionCleanList } from "../../redux/actions/burguerActions";
import "./style.scss";

const Receipt = () => {
  const dispatch = useDispatch();
  const listaDeHamburguesas = useSelector((state) => state.burguerReducer);
  console.log(listaDeHamburguesas);
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const newBuyRedux = () => {
    dispatch(actionCleanList());
    navigate("/");
  };
  const datos = listaDeHamburguesas.map((item, index) => item.price);
  const totalApagar = datos.reduce((prev, act) => prev + act, 0);
  return (
    <div className="container receipt">
      
      <button className="button" onClick={back}>
        {" "}
        volver
      </button>
      <button className="button" onClick={newBuyRedux}>
        {" "}
        Nueva compra{" "}
      </button>
      {listaDeHamburguesas.map((item, index) => (
        <section key={index}>
          <span >
          <strong>
          {item.hamburguesa}-
          {index + 1}-{item.price}$ 
           </strong>
            
          </span>
          <span>
            {item.ingredientes.map((item, index) => (
              <p key={`${index}-${item.price}`}>
                {item.ingrediente}: {item.price}${" "}
              </p>
            ))}{" "}
          </span>
        </section>
      ))}
      <h2 className="receipt-row"> total<br></br> {totalApagar}$ </h2>
    </div>
  );
};

export default Receipt;
