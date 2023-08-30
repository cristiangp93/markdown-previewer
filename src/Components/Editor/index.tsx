import {useContext} from "react";
import {MarkDownContext} from "../../Context";

const Editor = () => {

  const {userInput, setUserInput} = useContext(MarkDownContext)

  return (
    <div className='w-100'>
      <div className="px-6 py-2 font-bold">
        <h3>Editor</h3>
      </div>
      <div className="px-6 py-4">
        <textarea id='editor' className='w-100'
                  rows={25}
                  value={userInput}
                  onChange={(ev) => setUserInput(ev.target.value)}/>
      </div>
    </div>
  );
}
export default Editor;