// import React from "react";
import './Ccards.css'

const Ccards = () => {
  // const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "8ad0cb78-7955-44c4-8955-3b37294cb194");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

  return (
    <div className="Conatiner">
      <div className="text m-auto ">
        <h3>
          Connect With <span>Us</span>
        </h3>
      </div>
      <form className="form">
        <div className="ip-Container">
          <span className="mr-3 text-red-600"></span>{" "}
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="ip-Container">
          <span className="mr-3 text-red-600"></span>{" "}
          <input type="tel" name="phoneNumber" placeholder="Number" required />
        </div>
        <div className="ip-Container">
          <span className="mr-3 text-red-600"></span>{" "}
          <input type="text" name="email" placeholder="Email" required />
        </div>
        <div className="txt-Container">
          <textarea
            name="message"
            placeholder="Enter your query... "
            rows={5}
          />
        </div>
        <button type="submit" className="cBtn">
          Submit
        </button>
        <span className='mr-3 text-red-400 italic text-[11px]' >* indicates mandatory fields</span>
      </form>
       
    </div>
  );
};

export default Ccards;