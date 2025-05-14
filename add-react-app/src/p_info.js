import {useState, useEffect} from 'react';
import {call} from './service/ApiService'
import './style.css'

function P_info(){
    //상품정보를 담는 useState
    const [items, setItems] = useState([]);

    //추가 창을 띄우는 state
    const [open, setOpen] = useState(true);

    useEffect(() => {
        call("/products","GET")
            .then(result => setItems(result));
    },[]);

    //상품 추가 기능
    const addItem = (item) => {
        call("/products","POST",item)
            .then(res => setItems(res))
    }

    const onButtonClick = () => {
        setOpen(false);
    }

    let productItems = items.length > 0 && (
        <table border="1">
            <tr>
                <th>상품 번호</th>
                <th>상품 이름</th>
                <th>상품 재고</th>
                <th>상품 가격</th>
                <th>등록 날짜</th>
                <th>수정 날짜</th>
            </tr>
            {items.map((item) => (
                <tr>
                    <td>{item.productId}</td>
                    <td>{item.productName}</td>
                    <td>{item.productStock}</td>
                    <td>{item.productPrice}</td>
                    <td>{item.registerDate}</td>
                    <td>{item.updateDate}</td>
                </tr>
            ))}
        </table>
    )

    let addButton =  <button type="button" onClick={onButtonClick}>상품추가</button>;

    let addproductScreen = <AddProduct addItem={addItem} setOpen={setOpen} />

    let  addProduct = addButton;

    if(!open){
        addProduct = addproductScreen;
    }

    return(
        <div className='container'>
            {addProduct}
            {productItems}
        </div>
    )

}

export default P_info;