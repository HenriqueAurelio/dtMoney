import { Summary } from '../Summary'
import { TransacationsTable } from '../TransacationsTable'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransacationsTable />
    </Container>
  )
}
