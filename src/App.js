import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './App.css';


function AddExpense() {
    const [isOpen, setIsOpen] = useState();
    const [formData, setFormData] = useState({
      Title: "",
      Category: "",
      Amount: "",
      Date: "",

    });
    
    function handleSubmit(event){
      event.predefault();
      setIsOpen(false);

    }

    function handleChange(event){
      const { name , value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name] : value,
      }));
  
    }

    return (
      <>
        <div class="addnewdiv" >
          <button class="newexpensebtn"  onClick={() => setIsOpen(true) } >
            Add New Expense
          </button>
        </div>
        
  
   
        {isOpen && (
         <div>
          <div>
            <ReactModal isOpen={isOpen}>
              <form onSubmit={handleSubmit} class = "expenseform">
                <div class="canceldiv">
                <button onClick={handleChange} style={{position:"relative"}}>
                  <img 
                    class="image"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtSlgsUMYCSs9Do1Z38RYPxOxVSpTR6BCN2Q&usqp=CAU" 
                    alt="ButtonImage"
                  />
                </button>
                </div>
                <label style={{padding:'20px'}}>
                  <diV>
                  <h5 class="description">Title:</h5> 
                  <input 
                    class="inp"
                    type="text"
                    name="Title"
                    placeholder= 'Enter Title here'
                    value={formData.Title}
                    onChange={handleChange}
                    />
                  </diV>
                </label >
                <label style={{padding:'20px'}}>
                  <h5 class="description">Category:</h5>  
                  <input
                    class="inp"
                    type="text"
                    name="Category"
                    placeholder= 'Enter Category here'
                    value={formData.Category}
                    onChange={handleChange}
                  />
                </label>
                <label style={{padding:'20px'}}>
                  <h5 class="description">Amount:</h5> 
                  <input
                    class="inp"
                    type="text"
                    name="Amount"
                    placeholder= 'Enter amount'
                    value={formData.Amount}
                    onChange={handleChange}
                  />
                </label>
                <label style={{padding:'20px'}}>
                  <h5 class="description">Date:</h5>  
                  <input 
                    class="inp"
                    type="datetime-local"
                    name="date"
                    value={formData.Date}
                    onChange={handleChange}
                  />
                </label>
                <div class="btn">
                <button class = "savebtn" style={{borderRadius:'7px', backgroundColor: 'skyblue'}} type="submit">Save</button>
                <button class = "canbtn" style={{borderRadius:'7px', backgroundColor: 'skyblue'}} type="cancel">Cancel</button>
                </div>
              </form> 
            </ReactModal>
          </div>
          <button onClick={() => setIsOpen(false)}>
            Close
          </button>
         </div>
        )}
      </>
    );
  }
   
  export default AddExpense;
