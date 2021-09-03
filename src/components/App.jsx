import React,{useEffect,useState} from 'react'
import {useStore} from 'react-redux';


function App(){
    let [user,setUser] = useState('');
    let store = useStore();
    useEffect(function(){
        let s = select(store.getState()); 
        setUser(s);
    })
    function select(item){
        return item.me;
    };
    return <>
        <h3>Hello</h3>
        <h3>{user}</h3>
    </>
}
export default App;