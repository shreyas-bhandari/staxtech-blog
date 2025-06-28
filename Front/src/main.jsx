 import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ListArticles from './pages/Blog/ListArticles.jsx'
import SingleArticle from './pages/Blog/Singlearticle.jsx'
import CreateArticle from './pages/Blog/CreateArticle.jsx'
import UpdateArticle from './pages/Blog/UpdateArticle.jsx'
import Login from './pages/auth/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}/>

      <Route path='/blog/Login' element={<Login/>}/>


      <Route path='/admin/blog' element={<ListArticles/>}/> 
      <Route path='/admin/blog/articles/:articleId' element={<SingleArticle/>}/>
      <Route path='/admin/blog/create' element={<CreateArticle/>}/> 
       <Route path='/admin/blog/article-edit/:articleId' element={<UpdateArticle/>}/>
    </Routes>
    </BrowserRouter>
     
  </StrictMode>,
)
