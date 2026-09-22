import { use, useState } from "react"

// Array de Objetos 

const cardapio=[
    {id:1, nome:"Combo-01", preco: 25.00, disponivel: false, quantidade : 0 },
    {id:2, nome:"Combo-02", preco: 35.00, disponivel: true, quantidade : 0 },
    {id:3, nome:"Combo-03", preco: 45.00, disponivel: false, quantidade : 0 },
    {id:4, nome:"Combo-04", preco: 55.00, disponivel: true, quantidade : 0 }
]
const Pedido = () => {
//Hook- useState- Manipula o estado da variavel
//Estados para gerenciar a lista de items do cardapio

    const[items,setItems] = useState(cardapio)
    const[status,setStatus] = useState("");
    const[enviar, setEnviar] = useState(false)
//VALOR FIXO ADICIONADO AO TOTAL QUANDO TIVER NO CARRINHO
    const taxaEntrega = 5.00;
//FUNÇÃO QUE ALTERA A QUANTIDADE DO PEDIDO
    const AlterarQuantidade = (id,valor) => {
// Map: Cria um novo array e percorre os items sem modificar o original: IMUTABILIDADE
// Ternario: Verifica se o item da interação atual é o que dever ser alterado
//Spred(...item) : mantem os valores anrtigos e adicionar os novos
//Math.max: Objeto que garante que quantidade nunca sera maior que 0
        setItems(alt=>
            alt.map(item=>
                item.id === 0 ? {...item, quantidade:Math.max(0,item.quantidade + valor)}: item
            )
        )
    }

//Filter: seleciona apenas os produtos disponíveis no carrinho
const produtosDisponiveis = items.filter(item => item.disponivel);
const carrinho = items.filter(item => item.quantidade > 0)

//Reduce: Calcula  soma dos items(preco * quantidade)
//e adiciona a taxa de entrega
const subtotal = carrinho.reduce(ac, item => ac + item.preco * item.quantidade,0),
const total = subtotal >0 ? subTotal + taxaEntrega : 0;

// Simulação do ciclo de vida da entrega usando temporizador assincrono

const confirmarPedido = () => {
    setEnviar(true)
    setStatus("Restaurante confirmou seu Pagamento, Preparando seu pedido...")
    setTimeout(() => {
        setStatus("Seu pedido saiu para entrega")
        setEnviar(false)
    },10000) // 10 segundos

    }
}
  return (
    <div>
      
    </div>
  )


export default Pedido
