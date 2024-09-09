import UsersImage from '../../assets/users.png'

import {
    Image

} from './styles'

function TopBackground() {

    return (
        <Image>
            <img src={UsersImage} alt='image-usuários' />
        </Image>
    )
}

export default TopBackground