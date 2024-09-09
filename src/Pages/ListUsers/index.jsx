import { useEffect, useState } from 'react'
import api from '../../services/api'

import Trash from '../../assets/trash.svg'
import Button from '../../Components/Button'
import TopBackground from '../../Components/Top'

import { 
    AvatarUser,
    CardUsers, 
    Container, 
    ContainerUsers, 
    Title, 
    TrashIcon 

} from './styles'
import { useNavigate } from 'react-router-dom'

function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => { // Toda vez que carrega a tela o useEffect é chamado

        async function getUsers() {
            const {data} = await api.get('/usuarios')

            setUsers(data)
        }

        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)
        
        const updatedUsers = users.filter(user => user.id !== id) // FILTRANDO TODOS OS USUÁRIOS QUE NÃO TEM O MESMO ID

        setUsers(updatedUsers)
    }

    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon onClick={() => deleteUsers(user.id)} src={Trash} alt='lixo-icone' />
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}

export default ListUsers