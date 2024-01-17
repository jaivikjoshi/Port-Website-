import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;


const ProductCard = (props) => {
    return (
        <>
        <Card
        style={{ width: '450px', height: '300px', marginLeft: '30px', marginTop: '100px', marginBottom: '0px'}}
        >
        <Meta
          title={props.name}
          description={props.description}
          
        />
        <img src = {props.image} style={{width: '250px', height: '150px',  marginTop: '25px', marginBottom: '230px', marginLeft: '70px'}}></img>
      </Card>
      
      </>
    )
}

export default ProductCard