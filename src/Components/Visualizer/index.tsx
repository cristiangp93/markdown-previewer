import {useContext, useEffect} from "react";
import {MarkDownContext} from "../../Context";
import {marked} from "marked";

const Visualizer = () => {

  const {userInput} = useContext(MarkDownContext)

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked.parse(userInput, {breaks: true});
  }, [userInput]);

  return (
    <div className='w-100'>
      <div className="px-6 py-2 font-bold">
        <h3>Visualizer</h3>
      </div>
      <div className="px-6 py-4">
        {/* Aqui se va a mostrar el contenido*/}
        <div id='preview'></div>
      </div>
    </div>
  );
}

export default Visualizer;