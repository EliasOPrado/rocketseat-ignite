import { useEffect } from 'react'
import {Container} from './styles'
import {api} from '../../services/api'


export function TransactionsTable() {
    useEffect(() =>{
       api.get('transactions')
            .then(response => console.log(response))
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
