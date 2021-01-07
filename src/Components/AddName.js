import React from 'react'

function AddName() {
    return (
        <div className='AddName'>
            <form>
               <label htmlFor='name'>Name:</label> 
               <input 
               type='text'
               name='name'
               id='name'/> 
               <input type='submit' value='Add Name'/>
            </form>
        </div>
    )
}

export default AddName