const products = [
    {
      id: '1',
      name: "Torta Red Velvet",
      price: 25900,
      category: "Postres",
      img: "https://i.pinimg.com/736x/4f/9a/fb/4f9afb01ec810714c42174112401f58c.jpg",
      stock: 15,
      description: "Deliciosa torta Red Velvet con capa de crema de queso, perfecta para cualquier ocasión especial. Su sabor suave y esponjoso te conquistará."
    },
    {
      id: '2',
      name: "Pastel Red Velvet Individual",
      price: 8000,
      category: "Postres",
      img: "https://i.pinimg.com/736x/54/3d/50/543d50be889132a62040a639690d76db.jpg",
      stock: 30,
      description: "Pastelito individual de Red Velvet, ideal para disfrutar una porción personal de esta deliciosa torta con crema de queso."
    },
    {
      id: '3',
      name: "Mini Torta Red Velvet",
      price: 14490,
      category: "Postres",
      img: "https://i.pinimg.com/736x/2f/83/0d/2f830dad0a6a127923291bafc2707d77.jpg",
      stock: 10,
      description: "Mini torta Red Velvet, una versión compacta pero igualmente deliciosa de nuestra famosa Red Velvet, perfecta para eventos pequeños o celebraciones personales."
    }
  ]
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
  }
  