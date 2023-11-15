import React, {useContext, useState} from 'react';
import './TableShow.css';
import Context from './context/Context';

const TableShow = () => {
  const[makeDisable, setMakeDisable] = useState(true)
  const [takeId, setTakeId] = useState();
  const[activeIndex, setActiveIndex] = useState(-1);
  const[currentStatus, setCurrentStatus] = useState('');

    const {content,setContent} =  useContext(Context);

    const handleChange = (id,index,status) =>{
      setCurrentStatus(status);
      setActiveIndex(index);
      setMakeDisable(false);
      setTakeId(id);
    }
    const handleStatusChange = () =>{
    const updatedArray = content.map((item,index)=>{
      setCurrentStatus(item.status === "Enable" ? "Disable" : "Enable")
      if (index === activeIndex) {
          return {
            ...item,
            status: item.status === "Enable" ? "Disable" : "Enable",
          };
        }
        return item ;
      });
      console.log(updatedArray);
      setContent(updatedArray);
    }

  return (
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Status</th>
            </thead>
            <tbody>
              {content.map((item,index)=>{
                const id = Math.round(Math.random()*9999);
                let activeClass = '';
                if(activeIndex === index){
                  activeClass = "active-row";
                }
                else{
                  activeClass = ' ';
                }
                return (
                  <tr id='row' className={activeClass} key={id} onClick={()=>handleChange(id,index,item.status)}>
                    <td>{item.name}</td>
                    <td>{item.status}</td>
                  </tr>
                );
              })}
            </tbody>
        </table>
        <button onClick={()=>handleStatusChange()} disabled={makeDisable}>
          {
            (currentStatus === "Enable")? "Disable" : "Enable"
          }
        </button>
    </div>
    
  )
}

export default TableShow