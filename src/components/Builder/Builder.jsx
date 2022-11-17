import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { actionAddBurguer } from "../../redux/actions/burguerActions";
import { ingredientes } from "./listaIngredientes";
import "./style.scss";
const Builder = () => {
  const listaDeHamburguesas = useSelector((state) => state.burguerReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [burguerIngredients, setBurguerIngredients] = useState([]);

  const AddIngredientes = (item, price) => {
    if (burguerIngredients.length < 15) {
      const newIngredient = { ingrediente: item, price };
      setBurguerIngredients([...burguerIngredients, newIngredient]);
    }
  };

  const deleteIngredient = (index) => {
    const lista = [...burguerIngredients];
    lista.splice(index, 1);
    setBurguerIngredients(lista);
  };

  const total = burguerIngredients.map((item, index) => item.price);
  const total1 = total.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  useEffect(() => {
    if (burguerIngredients.length === 7) {
      Swal.fire("Creo que son mcuhos ingredientes !", "!", "info");
    }
    if (burguerIngredients.length === 12) {
      Swal.fire(
        "Wow ya esa hamburguesa esta muy llena ? ",
        "igual que la difsrutes",
        "info"
      );
    }
  }, [burguerIngredients]);

  const addBurguer = () => {
    if (burguerIngredients.length) {
      if (listaDeHamburguesas.length < 10) {
        const hamburguesa = {
          hamburguesa: "hamburguesa",
          ingredientes: burguerIngredients,
          price: total1,
        };

        dispatch(actionAddBurguer(hamburguesa));
        setBurguerIngredients([]);
      }
      if (listaDeHamburguesas.length === 10) {
        Swal.fire(
          "LO SENTIMOS, ",
          "EL MENSAJERO SOLO PUEDE LLEVAS HASTA 10 HAMBURGUESAS",
          "warning"
        );
      }
    } else {
      Swal.fire(
        "La hamburguesa debe tener al menos 1 ingrediente,",
        "gracias.",
        "info"
      );
    }
  };

  const show = () => {
    if (listaDeHamburguesas.length) {
      navigate("/receipt");
    } else {
      Swal.fire(
        "De momento no has comprado nada ",
        "que tal si compras una hamburguesita =)",
        "info"
      );
    }
  };

  return (
    <div className="burger">
      {ingredientes.map((item, index) => (
        <button
          className="button"
          key={index}
          onClick={() => {
            AddIngredientes(item.ingrediente, item.price);
          }}
        >
          {item.ingrediente}{" "}
        </button>
      ))}
      <span className="">{total1}$ </span>
      <div>
        {" "}
        <div className="bread-top">
          <div className="seeds1"></div>
          <div className="seeds2"></div>
          <div className="seeds1"></div>
          .
        </div>
        {burguerIngredients.length ? (
          burguerIngredients.map((item, index) => {
            return (
              <div
                key={index}
                className={`${item.ingrediente}`}
                onClick={() => {
                  deleteIngredient(index);
                }}
              >
                {item.ingrediente}{" "}
              </div>
            );
          })
        ) : (
          <></>
        )}
        <div className="bread-bottom">
          <p className="pp">.</p>
        </div>
        <button className="button" onClick={addBurguer}>
          {" "}
          Agregar burguer
        </button>
        <button className="button" onClick={show}>
          {" "}
          ver factura
        </button>
        <span>
          Has comprado {listaDeHamburguesas.length}{" "}
          {listaDeHamburguesas.length > 1 ? "hamburguesas" : "hamburguesa"}{" "}
        </span>
      </div>
    </div>
  );
};

export default Builder;
