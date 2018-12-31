const conf = require('./conf');
const pool = conf.pool;

const getPantsPrice = (req, res)=>{
    pool.query("SELECT price FROM products WHERE name='PANTS'", (error, results) => {
      if (error) {
        throw error
      }
      var qty=req.body['Pants'];
      var price=results.rows[0]['price'];
      var total=qty%2==0 ? (qty/2)*price : (Math.floor(qty/2)+1)*price;
      res.status(200).json(total)
    })
};

  const getTShirts = (req, res)=>{
    pool.query("SELECT price FROM products WHERE name='TSHIRT'", (error, results) => {
      if (error) {
        throw error
      }
      var qty=req.body['T-Shirt'];
      var price=results.rows[0]['price'];
      var total= qty>2 ? qty*(price-1) : qty*price;
      res.status(200).json(total);
    })
};

  const getHatsPrice = (req, res)=>{
    pool.query("SELECT price FROM products WHERE name='HAT'", (error, results) => {
      if (error) {
        throw error
      }
      var qty=req.body['Hats'];
      var price=results.rows[0]['price'];
      var total=qty*price;
      res.status(200).json(total);
    })
};

const getTotal = (req, res)=>{
  var values=req.body['items'];
  var valuesCount={};
  for(var i=0;i<values.length;i++){
    values[i] in valuesCount ? valuesCount[values[i]]+=1: valuesCount[values[i]]=1;
  }

  pool.query("SELECT price FROM products", (error, results) => {
    if (error) {
      throw error
    }
    var price=results.rows;
    if('Pants' in valuesCount){
      var qtyPants=valuesCount['Pants'];
      var pricePants=results.rows[0]['price'];
      var totalPants=qtyPants%2==0 ? (qtyPants/2)*pricePants : (Math.floor(qtyPants/2)+1)*pricePants;
    }else{
      var totalPants=0;
    }

  if('T-Shirt' in valuesCount){
    var qtyTshirt=valuesCount['T-Shirt'];
    var priceTshirt=results.rows[1]['price'];
    var totalTshirt= qtyTshirt>2 ? qtyTshirt*(priceTshirt-1) : qtyTshirt*priceTshirt;
  }else{
    var totalTshirt=0;
  }
  if('Hat' in valuesCount){
    var qtyHat=valuesCount['Hat'];
    var priceHat=results.rows[2]['price'];
    var totalHat=qtyHat*priceHat;
  }else{
    var totalHat=0;
  }
    var total=totalPants+totalTshirt+totalHat;
    res.status(200).json(total);
  });
};

  module.exports = {
    getPantsPrice,
    getTShirts,
    getHatsPrice,
    getTotal
  }