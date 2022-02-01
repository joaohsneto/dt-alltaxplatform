import React, { useState, useEffect } from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries
} from 'react-vis';

const SalesGraphics = () => {
  const [categories, setCategories] = useState("categoria01");
  const [products, setProducts] = useState({
    productNameOption01: "Produtos 01",
    valueOption01: "produto01",
    productNameOption02: "Produtos 02",
    valueOption02: "produto02",
  });
  const [sales, setSales] = useState({
    saleJan: "04",
    saleFev: "06",
    saleMar: "02",
    saleAbr: "10",
  });
  const [blands, setBlands] = useState({
    blandNameOption01: "Marca A",
    valueBlandOption01: "marca-a",
    blandNameOption02: "Marca B",
    valueBlandOption02: "marca-b",
    blandNameOption03: "Marca C",
    valueBlandOption03: "marca-c",
})

  useEffect(() => {
    if (categories === "categoria01") {
      setProducts({
        productNameOption01: "Produtos 01",
        valueOption01: "produto01",
        productNameOption02: "Produtos 02",
        valueOption02: "produto02",
      });
    } 
    if (categories === "categoria02") {
      setProducts({
        productNameOption01: "Produtos 03",
        valueOption01: "produto03",
        productNameOption02: "Produtos 04",
        valueOption02: "produto04",
      });
    }
  }, [categories]);
  
  useEffect(() => {
    if (products.valueOption01 === "produto01") {
      if (blands.valueBlandOption01 === "marca-a") {
        setSales({
          saleJan: "4",
          saleFev: "6",
          saleMar: "2",
          saleAbr: "8",
        })
      }
      if (blands.valueBlandOption02 === "marca-b") {
        setSales({
          saleJan: "1",
          saleFev: "9",
          saleMar: "3",
          saleAbr: "6",
        })
      }
      if (blands.valueBlandOption03 === "marca-c") {
        setSales({
          saleJan: "7",
          saleFev: "3",
          saleMar: "1",
          saleAbr: "9",
        })
      }
    }
    if (products.valueOption02 === "produto02") {
      if (blands.valueBlandOption01 === "marca-d") {
        setSales({
          saleJan: "9",
          saleFev: "3",
          saleMar: "7",
          saleAbr: "5",
        })
      }
      if (blands.valueBlandOption02 === "marca-e") {
        setSales({
          saleJan: "3",
          saleFev: "7",
          saleMar: "9",
          saleAbr: "8",
        })
      }
      if (blands.valueBlandOption03 === "marca-f") {
        setSales({
          saleJan: "9",
          saleFev: "4",
          saleMar: "7",
          saleAbr: "3",
        })
      }
    }
    if (products.valueOption01 === "produto03") {
      if (blands.valueBlandOption01 === "marca-g") {
        setSales({
          saleJan: "3",
          saleFev: "9",
          saleMar: "8",
          saleAbr: "7",
        })
      }
      if (blands.valueBlandOption02 === "marca-h") {
        setSales({
          saleJan: "6",
          saleFev: "3",
          saleMar: "2",
          saleAbr: "1",
        })
      }
      if (blands.valueBlandOption03 === "marca-i") {
        setSales({
          saleJan: "2",
          saleFev: "6",
          saleMar: "5",
          saleAbr: "7",
        })
      }
    }
    if (products.valueOption02 === "produto04") {
      if (blands.valueBlandOption01 === "marca-j") {
        setSales({
          saleJan: "11",
          saleFev: "15",
          saleMar: "13",
          saleAbr: "10",
        })
      }
      if (blands.valueBlandOption02 === "marca-k") {
        setSales({
          saleJan: "4",
          saleFev: "4",
          saleMar: "9",
          saleAbr: "2",
        })
      }
      if (blands.valueBlandOption03 === "marca-l") {
        setSales({
          saleJan: "2",
          saleFev: "9",
          saleMar: "3",
          saleAbr: "12",
        })
      }
    }
  }, [products, blands]);

  const handleChangeCategories = ({ value }) => {
    if (value === "categoria01") {
      setCategories("categoria01");
    }
    if (value === "categoria02") {
      setCategories("categoria02");
    }
  }

  const handleChangeProducts = ({ value }) => {
    if (value === "produto01") {
      setBlands({
        blandNameOption01: "Marca A",
        valueBlandOption01: "marca-a",
        blandNameOption02: "Marca B",
        valueBlandOption02: "marca-b",
        blandNameOption03: "Marca C",
        valueBlandOption03: "marca-c",
      });
    }
    if (value === "produto02") {
      setBlands({
        blandNameOption01: "Marca D",
        valueBlandOption01: "marca-d",
        blandNameOption02: "Marca E",
        valueBlandOption02: "marca-e",
        blandNameOption03: "Marca F",
        valueBlandOption03: "marca-f",
      });
    }
    if (value === "produto03") {
      setBlands({
        blandNameOption01: "Marca G",
        valueBlandOption01: "marca-g",
        blandNameOption02: "Marca H",
        valueBlandOption02: "marca-h",
        blandNameOption03: "Marca I",
        valueBlandOption03: "marca-i",
      });
    }
    if (value === "produto04") {
      setBlands({
        blandNameOption01: "Marca J",
        valueBlandOption01: "marca-j",
        blandNameOption02: "Marca K",
        valueBlandOption02: "marca-k",
        blandNameOption03: "Marca L",
        valueBlandOption03: "marca-l",
      });
    }
  }

  const handleChangeblands = ({ value }) => {
    switch (value) {
      case "marca-a":
        setSales({
          saleJan: "4",
          saleFev: "6",
          saleMar: "2",
          saleAbr: "8",
        })
        break;
      
      case "marca-b":
        setSales({
          saleJan: "1",
          saleFev: "9",
          saleMar: "3",
          saleAbr: "6",
        })
        break;
      
      case "marca-c":
        setSales({
          saleJan: "7",
          saleFev: "3",
          saleMar: "1",
          saleAbr: "9",
        })
        break;
      
      case "marca-d":
        setSales({
          saleJan: "9",
          saleFev: "3",
          saleMar: "7",
          saleAbr: "5",
        })
        break;

      case "marca-e":
        setSales({
          saleJan: "3",
          saleFev: "7",
          saleMar: "9",
          saleAbr: "8",
        })
        break;

      case "marca-f":
        setSales({
          saleJan: "9",
          saleFev: "4",
          saleMar: "7",
          saleAbr: "3",
        })
        break;

      case "marca-g":
        setSales({
          saleJan: "3",
          saleFev: "9",
          saleMar: "8",
          saleAbr: "7",
        })
        break;

      case "marca-h":
        setSales({
          saleJan: "6",
          saleFev: "3",
          saleMar: "2",
          saleAbr: "1",
        })
        break;

      case "marca-i":
        setSales({
          saleJan: "2",
          saleFev: "6",
          saleMar: "5",
          saleAbr: "7",
        })
        break;

      case "marca-j":
        setSales({
          saleJan: "11",
          saleFev: "15",
          saleMar: "13",
          saleAbr: "10",
        })
        break;

      case "marca-k":
        setSales({
          saleJan: "4",
          saleFev: "4",
          saleMar: "9",
          saleAbr: "2",
        })
        break;

      case "marca-l":
        setSales({
          saleJan: "2",
          saleFev: "9",
          saleMar: "3",
          saleAbr: "12",
        })
        break;
    
      default:
        setSales({
          saleJan: "4",
          saleFev: "6",
          saleMar: "2",
          saleAbr: "7",
        })
        break;
    }
  }

  return (
    <>
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
          <select
            name="produtos"
            onChange={ ({ target }) => handleChangeProducts(target) }
          >
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
          <select
            name="marcas"
            onChange={ ({ target }) => handleChangeblands(target)}
          >
            <option 
              value={ blands.valueBlandOption01 }
            >
              { blands.blandNameOption01 }
            </option>
            <option
              value={ blands.valueBlandOption02 }
            >
              { blands.blandNameOption02 }
            </option>
            <option
              value={ blands.valueBlandOption03 }
            >
              { blands.blandNameOption03 }
            </option>
          </select>
          </label>
        </div>
      </section>
      <section className='graphic-container'>
      <h3>Sales By Month for:</h3>
      <XYPlot margin={{bottom: 70}} xType="ordinal" width={900} height={600}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <YAxis />
        <VerticalBarSeries
          data={[
            {x: 'Janeiro', y: sales.saleJan},
            {x: 'Fevereiro', y: sales.saleFev},
            {x: 'Março', y: sales.saleMar},
            {x: 'Abril', y: sales.saleAbr},
          ]}
        />
      </XYPlot>
      </section>
    </>
  )
}

export default SalesGraphics;
