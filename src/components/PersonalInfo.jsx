import { motion } from "framer-motion";


const PersonalInfo = ({ formData, setFormData, page, setPage, x, setX }) => {

  return (
    <motion.div
      initial={{ x: x }}
      transition={{ duration: 1 }}
      animate={{ x: 0 }}
      className="card"
    >
      <div className="step-title">Personal Info</div>

     
      <input
        type="text"
        placeholder="Email"
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
      type="text"
      placeholder="Phone No."
      value={formData.phone}
      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
    />
      <button
        onClick={() => {
          setPage(page + 1);
          setX(1000);
        }}
      >
        Next
      </button>
      <br/>
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

export default PersonalInfo