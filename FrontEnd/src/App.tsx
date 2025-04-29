import {  Route, Routes } from "react-router-dom"
import Layout from "./components/layout/Layout"
import StagiaireList from './pages/stagiaires/List';
import DemandeDetail from './pages/demandes/Detail';


const App = () => {
  return (

   
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StagiaireList />} />
        <Route path="stagiaires" element={<StagiaireList />} />
        <Route path="stagiaires/add" element={<div>Ajout stagiaire</div>} />
        <Route path="demandes" element={<div>Liste demandes</div>} />
        <Route path="demandes/:id" element={<DemandeDetail />} />
      </Route>
    </Routes>
  
  )
}

export default App
