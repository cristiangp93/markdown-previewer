import '../../App.css';
import Visualizer from "../../Components/Visualizer";
import Editor from "../../Components/Editor";
import {MarkDownProvider} from "../../Context";

function App() {

  return (
    <MarkDownProvider>
      <div className='container-fluid'>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            {/* Editor */}
            <Editor/>
          </div>
          <div className="col-lg-6 col-sm-12">
            {/* Visualizer */}
            <Visualizer/>
          </div>
        </div>
      </div>
    </MarkDownProvider>
  )
}

export default App
