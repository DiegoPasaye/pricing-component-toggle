import React from 'react'
import './styles.css'

export const Window = () => {
    let counter = 2
    const monthly = () => {
        if(counter % 2 == 0){
            document.querySelector(".price1").innerHTML = '$19.99'
            document.querySelector(".price2").innerHTML = '$24.99'
            document.querySelector(".price3").innerHTML = '$39.99'
            counter = counter + 1
        }else{
            document.querySelector(".price1").innerHTML = '$199.99'
            document.querySelector(".price2").innerHTML = '$249.99'
            document.querySelector(".price3").innerHTML = '$399.99'
            counter = counter + 1
        }
    }
  return (
    <main>
        <h1>Our Pricing</h1>
        <div className='switch'>
            <span>Anually</span>
            <div className='switch-container'>
                <input type="checkbox" name="" id="switch" />
                <label onClick={monthly} htmlFor="switch" className='lbl'></label>
            </div>
            <span>Monthly</span>
        </div>

        <div className='offers'>
            <div className='offer basic'>
                <p className='category'>Basic</p>
                <p className='price price1'>$199.99</p>
                <hr />
                <p>500 GB Storoage</p>
                <hr />
                <p>2 Users Allowed</p>
                <hr />
                <p>Send up to 3GB</p>
                <hr />
                <button>LEARN MORE</button>
            </div>

            <div className='offer professional'>
                <p className='category'>Professional</p>
                <p className='price price2'>$249.99</p>
                <hr />
                <p>1 TB Storoage</p>
                <hr />
                <p>5 Users Allowed</p>
                <hr />
                <p>Send up to 10 GB</p>
                <hr />
                <button>LEARN MORE</button>
            </div>

            <div className='offer master'>
                <p className='category'>Master</p>
                <p className='price price3'>$399.99</p>
                <hr />
                <p>2 TB Storoage</p>
                <hr />
                <p>10 Users Allowed</p>
                <hr />
                <p>Send up to 20 GB</p>
                <hr />
                <button>LEARN MORE</button>
            </div>
        </div>

    </main>
  )
}
