import { useEffect } from 'react'
import {Container} from './styles'


export function TransactionsTable() {
    useEffect(() =>{
        fetch('https://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    },[])


  return (
    <Container>
        <table>
            <thead>
                <th>Titulo</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </thead>

            <tbody>
                <tr>
                    <td>Desenvolvimento de sistema</td>
                    <td className='deposit'>R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>20/02/2022</td>
                </tr>
                <tr>
                    <td>Aluguel</td>
                    <td className='withdraw'>- R$1.000</td>
                    <td>Casa</td>
                    <td>20/02/2022</td>
                </tr>
            </tbody>
        </table>
    </Container>
  )
}
