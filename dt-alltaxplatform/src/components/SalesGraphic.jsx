import React, { useState, useEffect } from 'react';

const SalesGraphics = () => {
  const [categories, setCategories] = useState("categoria01");
  const [products, setProducts] = useState({
    productNameOption01: "Produtos 01",
    valueOption01: "produto01",
    productNameOption02: "Produtos 02",
    valueOption02: "produto02",
  });

  useEffect(() => {
    if (categories === "categoria01") {
      setProducts({
        productNameOption01: "Produtos 01",
        valueOption01: "produto01",
        productNameOption02: "Produtos 02",
        valueOption02: "produto02",
      });
    } else {
      setProducts({
        productNameOption01: "Produtos 03",
        valueOption01: "produto03",
        productNameOption02: "Produtos 04",
        valueOption02: "produto04",
      });
    }
  }, [categories]);

  const handleChangeCategories = ({ value }) => {
    if (value === "categoria01") {
      setCategories("categoria01");
    }
    if (value === "categoria02") {
      setCategories("categoria02");
    }
  }
  console.log(categories);

  return (
    <>
      <h1> Iniciando o Desafio Técnico</h1>
      <section className='container-selects'>
        <div className='categories'>
          <label htmlFor="categorias">
            Categoriras: 
          <select
            name="categorias"
            onChange={ ({ target }) => handleChangeCategories(target) }
          >
            <option value="categoria01">Categoria 01</option>
            <option value="categoria02">Categoria 02</option>
          </select>
          </label>
        </div>
        <div className='products'>
          <label htmlFor="Produtos:">
            Produtos: 
          <select name="produtos">
            <option
            value={ products.valueOption01 }
            >
              { products.productNameOption01 }
            </option>
            <option
              value={ products.valueOption02 }
            >
              { products.productNameOption02 }
            </option>
          </select>
          </label>
        </div>
        <div className='brands'>
          <label htmlFor="marcas">
            Marcas: 
          <select name="marcas">
            <option value="marca01">Marca 01</option>
            <option value="marca02">Marca 02</option>
            <option value="marca03">Marca 03</option>
          </select>
          </label>
        </div>
      </section>
    </>
  )
}

export default SalesGraphics;
