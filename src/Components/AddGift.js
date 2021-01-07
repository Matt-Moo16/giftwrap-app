import React from 'react'

function AddGift()  {
    return (
        <div className='AddGift'>
            <form>
                <label htmlFor='AddGift_Url'>
                    URL:
                </label>
                <input
                type='url'
                name='url'
                id='AddGift_Url'
                placeholder='https://example.com'/>
                <label htmlFor='AddGift_Price'>Price:</label>
                <input 
                type='number'
                min='0.00'
                max='100000.00'
                step='0.01'
                name='price'
                id='AddGift_Price'
                placeholder='$9.99'
                />
                <input type='submit' value='Add Gift'/>
            </form>
        </div>
    )
}

export default AddGift