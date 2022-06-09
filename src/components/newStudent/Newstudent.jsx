import React,{useState} from 'react'
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import './Newstudent.css';

const Newstudent = () => {
    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
      setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };
    const handleClick = (e) => {
        e.preventDefault();
        addProduct(dispatch, {inputs});

    }

  return (
    <div className="newStudent">
    <h1 className="addStudentTitle">New student</h1>
    <form className="addStudentForm">
      <div className="addStudentItem">
        <label>FirstName</label>
        <input
          name="FirstName"
          type="text"
          placeholder="john..."
          onChange={handleChange}
        />
      </div>
      <div className="addStudentItem">
        <label>SecondName</label>
        <input
          name="SecondName"
          type="text"
          placeholder="perez..."
          onChange={handleChange}
        />
      </div>
      <div className="addStudentItem">
        <label>subject</label>
        <select name="subject" value={product.category} onChange={handleChangeInput} >
                        <option value="">Please select a subject</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
      </div>
     
      <button onClick={handleClick} className="addStudentButton">
        Create
      </button>
    </form>
  </div>
);
}

export default Newstudent