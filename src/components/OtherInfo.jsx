import { motion } from "framer-motion";
import axios from "axios";

const OtherInfo = ({ formData, setFormData, page, setPage, x, setX }) => {

 function handleClick(event) {
  event.preventDefault();
  console.log(formData);

  const newUser = {
    fullname: formData.fullname, 
    phone: formData.phone,
    email: formData.email,
    address: formData.address,    
    highestQualification: formData.highestQualification,
  }


  axios.post('http://localhost:5002/create' , newUser)
 }
  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Other Info</div>
      <input
        type="text"
        placeholder="Highest Qualification"
        value={formData.highestQualification}
        onChange={(e) =>
          setFormData({ ...formData, highestQualification: e.target.value })
        }
      />
    
  
      <br />
      <button
        onClick={handleClick}
      >
        Submit
      </button>
      <br />
      <button
        onClick={() => {
          setPage(page - 1);
          setX(-1000);
        }}
      >
        Previous
      </button>
    </motion.div>
  );
};

export default OtherInfo;
