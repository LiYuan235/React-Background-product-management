/*
 * @Descripption: 
 * @version: 
 * @Author: LiYuan
 * @Date: 2023-02-13 21:11:48
 * @LastEditors: LiYuan
 * @LastEditTime: 2023-02-14 13:22:35
 */
import './App.css';
import { Button, ConfigProvider } from 'antd';
import { BrowserRouter,Route,Link ,Routes} from 'react-router-dom';
import Admin from './pages/admin/admin';
import Login from './pages/login/login';


function App() {
  return ( 
    <BrowserRouter>
      <Routes>
      <Route path='login' element={<Login/>}></Route>
      <Route path='admin' element={<Admin/>}></Route>
      </Routes>
    </BrowserRouter>)
  // return (
  //   <div className="App">
  //     App
  //     <Button>点击按钮</Button>
  //     <input></input>
  //   </div>
  // );
}

export default App;
