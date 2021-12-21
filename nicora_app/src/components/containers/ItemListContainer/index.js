import {React, useEffect, useState} from "react"
import MockedItems from "../../../mock/Mockeditems";
import ItemList from '../../ItemList';


const ItemListContainer = () => {

const [items, setItems] = useState([]);

useEffect(() => {
    const itemPromise = new Promise((res, rej) =>{
   setTimeout(function () {
        res(MockedItems);
   }, 2000);
});

itemPromise.then((res) => setItems(res));

}, [items]);

return<ItemList items={items} />;
};

export default ItemListContainer;