let produtos = [ 
    {"nome": "Colar" , "preco": 300 , "quantidade": 3 } ,
    {"nome": "Pulseira" , "preco": 150 , "quantidade": 2 } ,
    {"nome": "Brinco" , "preco": 100 , "quantidade": 1 }
  ]

let total = produtos[0].preco * produtos[0].quantidade +
            produtos[1].preco * produtos[1].quantidade +
            produtos[2].preco * produtos[2].quantidade;
console.log("O valor total do estoque é de R$ " + total);

 