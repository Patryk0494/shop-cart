import Top from './components/Top'
import Content from './components/Content.js'
import SideContent from './components/SideContent.js'


function App() {
  return (
    <div className="container">
      <Top></Top>
      <div className="content-wrapper">
        <Content></Content>
        <SideContent></SideContent>
      </div>
    </div>
    
  );
}

export default App;
