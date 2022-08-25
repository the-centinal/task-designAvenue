import { motion } from "framer-motion";


const LocationInfo = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Location Info</div>

      <input
        type="text"
        placeholder="Country"
        value={formData.address}
        required
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />
   
    
      
      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Next
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

export default LocationInfo;
