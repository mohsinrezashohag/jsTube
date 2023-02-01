import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Feed from './components/Feed'
import VideoDetails from './components/VideoDetails'
import ChannelDetails from './components/ChannelDetails'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ 'backgroundColor': '#000' }}>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Feed></Feed>}></Route>
          <Route path='/videoDetails/:id' exact element={<VideoDetails></VideoDetails>}></Route>
          <Route path='/channelDetails/:id' exact element={<ChannelDetails></ChannelDetails>}></Route>
          <Route path='/search/:searchText' exact element={<SearchFeed></SearchFeed>}></Route>
        </Routes>
      </Box>
    </BrowserRouter >
  )
}

export default App
