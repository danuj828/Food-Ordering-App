const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">Contact Us</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="font-bold border border-black p-2 m-2 "
        ></input>
        <input
          type="text"
          placeholder="Message"
          className="font-bold border border-black p-2 m-2 "
        ></input>
        <button className="font-bold border border-black p-2 m-2 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
