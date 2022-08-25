import { motion } from "framer-motion";

  const SignUp = ({ formData, setFormData, page, setPage, x, setX }) => {
    return (
      <motion.div
        initial={{ x: x }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="card"
      >
        <div className="step-title">Sign Up</div>

        <input
          type="text"
          placeholder="Full Name"
          className="form-group"
          value={formData.fullname}
          required
          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
        />
      
       

        <button
          onClick={() => {
            setPage(page + 1);
            setX(1000);
          }}
        >
          Next
        </button>
      </motion.div>
    );
  };

  export default SignUp;
