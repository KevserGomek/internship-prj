//import './App.css';
import './scss/app.scss'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { VscDebugContinueSmall } from "react-icons/vsc";
import { BsArrowLeftShort, BsArrowRightShort  } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { TbSend } from "react-icons/tb";
import { useState } from 'react';
//import DataCard from './components/DataCard';
function App() {


  const [selectedValue, setSelectedValue] = useState('');
  const [email, setEmail] = useState('');

  const handleSelectValue = (e) => {
    setSelectedValue(e.target.value);
  }

  const handleSendEmail = (e) => {
    setEmail(e.target.value);
  }

  // const data1 = [
  //   {"name":"data1"},
  //   {"year":1322},
  //   {"bids so far":29},
  //   {"origin":"china"},
  //   {"price":895.50}
  // ]

  const data = [
    {
      "name":"Data 1",
      "year":1192,
      "bids":12,
      "origin":"china",
      "price":"$ 895.50",
      "img":"/chair.svg"
    },
    {
      "name":"Data 2",
      "year":1078,
      "bids":14,
      "origin":"china",
      "price":"$ 759",
      "img":"/table.svg"
    },
    {
      "name":"Data 3",
      "year":1256,
      "bids":16,
      "origin":"china",
      "price":"$ 895.50",
      "img":"/skull.svg"
    }

  ]

  const data1 = [
    {
      "year":1322,
      "bids":29,
      "origin":"China",
    }
  ]




  return (
    <div className='App'>
      <Navbar></Navbar>

      <div className='bannerSec'>
        <div className='bannerText'>
          <h1 className='banner-title1'>World's Biggest </h1>
          <h1 className='banner-title2'>Antique Collection</h1>
          <p>From the fine john he give of rich he. They age and draw mrs like. 
            Improving end distruts may instantly was household appluaded incommode.
          </p>

          <div className='bannerBtns'>
            <button className='discover-btn'>Discover Now</button>
            <img src="/ellipse1.svg" alt="" />
            <button className='watch-btn'><VscDebugContinueSmall/></button> <span> Watch Video</span>
          </div>
        </div>

        <div className='bannerImg'>
          <img src="/vase.svg" alt="vase" />
        </div>

        {/* <div className='dataInf'>
          <div className='data-information'>
            <div className='icon'></div>
            <div className='data'>
              <div className='data-info'>Selam</div>
              <p>Year</p>
            </div>
          </div>
          
          <div className='data-information'>
            <div className='icon'></div>
            <div className='data'>
              <div className='data-info'>Selam</div>
              <p>Bids so far</p>
            </div>
          </div>

          <div className='data-information'>
            <div className='icon'></div>
            <div className='data'>
              <div className='data-info'>Selam</div>
              <p>Origin</p>
            </div>
          </div>
        </div> */}


        {data1.map ((item,i) => (
            <div className='dataInf'>
            <div className='data-information' key={i}>
              <div className='icon'></div>
              <div className='data'>
                <div className='data-info'>{item.year}</div>
                <p>Year</p>
              </div>
            </div>
            
            <div className='data-information'>
              <div className='icon'></div>
              <div className='data'>
                <div className='data-info'>{item.bids}</div>
                <p>Bids so far</p>
              </div>
            </div>
  
            <div className='data-information'>
              <div className='icon'></div>
              <div className='data'>
                <div className='data-info'>{item.origin}</div>
                <p>Origin</p>
              </div>
            </div>
          </div>
        
        
        
        ))}
        
      </div>


      <div className='searchSec'>
        <div className='searchCard'>
          <div className='search-column'>
            <h4>Location</h4>
            <select className='select-box' value={selectedValue} onChange={handleSelectValue}>
              <option value='turkey' >Turkey</option>
              <option value='norway' >Norway</option>
              <option value='usa' >USA</option>
            </select>
          </div>

          <div className='search-column'>
            <h4>Religion</h4>
            <select className='select-box' value={selectedValue} onChange={handleSelectValue}>
              <option value='asatro' >Asatro</option>
              <option value='opt2' >Option2</option>
            </select>
          </div>

          <div className='search-column'>
            <h4>Year</h4>
            <select className='select-box' value={selectedValue} onChange={handleSelectValue}>
              <option value='opt1' >723 AD</option>
              <option value='opt2' >Option2</option>
            </select>
          </div>

          <div className='search-column'>
            <h4>Type</h4>
            <select className='select-box' value={selectedValue} onChange={handleSelectValue}>
              <option value='weapons' >Weapons</option>
              <option value='opt2' >Option2</option>
            </select>
          </div>

          <div className='searchBtn-column'>
            <button className='search-btn'><CiSearch />Search</button>
          </div>
        </div>
      </div>


      <div className='recentlySec'>
        <div className='title'>
          <h1>Recently Added</h1>
          <div className='btns'>
            <button className='arrow-btn' id='arrow1'><BsArrowLeftShort /></button>
            <button className='arrow-btn' id='arrow2'><BsArrowRightShort /></button>
          </div>
        </div>

        <div className='recentlyPosts'>
          {data.map ((item,i) =>(
            <div className='post' key={i}>
              <div className='post-img'>
                <img src={item.img} alt="" />
              </div>

              <div className='post-row1'>
                <h3>{item.name}</h3>
                <p>Year: {item.year} | Weapons </p>
              </div>

              <div className='post-row2'>
                <p>{item.price}</p>
                <button className='view-btn'>View Details</button>
              </div>

              <div className='post-row'>
                <p className='bids'>{item.bids} bids do far.</p>
                <p className='days'>Bidding closes in 12 Days.</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className='recentlyPosts'>
          <div className='post'>
            <div className='post-img'>
              <img src="/chair.svg" alt="chair" />
            </div>

            <div className='post-row1'>
              <h3>Data 1?</h3>
              <p>Yıl /Weapons?</p>
            </div>

            <div className='post-row2'>
              <p>Ücret</p>
              <button className='view-btn'>View Details</button>
            </div>

            <div className='post-row'>
              <p className='bids'>Bids değeri</p>
              <p className='days'>Bidding closes in 12 Days.</p>
            </div>
          </div>

          <div className='post'>
            <div className='post-img'>
              <img src="/table.svg" alt="table" />
            </div>

            <div className='post-row1'>
              <h3>Data 1?</h3>
              <p>Yıl /Weapons?</p>
            </div>

            <div className='post-row2'>
              <p>Ücret</p>
              <button className='view-btn'>View Details</button>
            </div>

            <div className='post-row'>
            <p className='bids'>Bids değeri</p>
              <p className='days'>Bidding closes in 12 Days.</p>
            </div>
          </div>

          <div className='post'>
            <div className='post-img'>
              <img src="/skull.svg" alt="skull" />
            </div>

            <div className='post-row1'>
              <h3>Data 1?</h3>
              <p>Yıl /Weapons?</p>
            </div>

            <div className='post-row2'>
              <p>Ücret</p>
              <button className='view-btn'>View Details</button>
            </div>

            <div className='post-row'>
              <p className='bids'>Bids değeri</p>
              <p className='days'>Bidding closes in 12 Days.</p>
            </div>
          </div>

        </div> */}
      </div>




      <div className='topCategories'>
        <div className='title'>
          <h1>Top Categories</h1>
          <div className='btns'>
            <button className='arrow-btn' id='arrow1'><BsArrowLeftShort /></button>
            <button className='arrow-btn' id='arrow2'><BsArrowRightShort /></button>
          </div>
        </div>

        <div className='text'>
          <p>Part we years to order allow asked of. We so opinio friends me message as delight.</p>
        </div>

        <div className='top-posts'>
          <div className='top-img'>
            <div className='top1'>
              <div className='content'>
                <div className='number'>
                  <p>122</p>
                </div>
                <div className='top-text'>
                  <p>Weapons</p>
                  <p>Worefall</p>
                </div>
              </div>
              <img src="/skull.svg" alt="skull" />
            </div>

            <div className='top1'>
              <div className='content'>
                <div className='number'>
                  <p>122</p>
                </div>
                <div className='top-text'>
                  <p>Weapons</p>
                  <p>Worefall</p>
                </div>
              </div>
              <img src="/skull.svg" alt="skull" />
            </div>
          </div>


          <div className='top-img'>
            <div className='top2'>
              <div className='content'>
                <div className='number'>
                  <p>122</p>
                </div>
                <div className='top-text'>
                  <p>Weapons</p>
                  <p>Worefall</p>
                </div>
              </div>
              <img src="/statue1.svg" alt="statue" />
            </div>
          </div>


          <div className='top-img'>
            <div className='top3'>
              <div className='content'>
                <div className='number'>
                  <p>122</p>
                </div>
                <div className='top-text'>
                  <p>Weapons</p>
                  <p>Worefall</p>
                </div>
              </div>
              <img src="/table.svg" alt="table" />
            </div>

            <div className='top5'>
              <div className='top4'>
                <div className='content'>
                  <div className='number'>
                    <p>122</p>
                </div>
                <div className='top-text'>
                  <p>Weapons</p>
                  <p>Worefall</p>
                </div>
              </div>
                <img src="/chair.svg" alt="chair" />
              </div>

              <div className='top4'>
                <div className='content'>
                  <div className='number'>
                    <p>122</p>
                  </div>
                  <div className='top-text'>
                    <p>Weapons</p>
                    <p>Worefall</p>
                  </div>
              </div>
                <img src="/chair.svg" alt="chair" />
              </div>
            </div>
          </div>
        </div>

      </div>



      <div className='feedback'>
        <div className='feedback-img'>
          <img src='/statue2.svg'/>
        </div>

        <div className='feedback-content'>
          <h1>Buyer's Feedback</h1>
          <p id='msg'>
            Whoe front da of piate heard ah ought. His defective nor convinced residense won. 
            Conenction has put impossible own apartments boisterous. 
          </p>
          <div className='user'>
            <div className='user-photo'>
              <img src='/user.svg'/>
            </div>
            <div className='user-inf'>
              <p id='name'>Selena Hakim</p>
              <p id='job'>UI Designer</p>
              <div className='stars'>
                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='subscribe'>
        <div className='subs-card'>
          <div className='subs-text'>
            <h1>Subsribe our newsletter</h1>
            <p>Reciev latest news, update, and many other things every week.</p>
            <div className='email'>
              <input 
                className='email-box'
                type='email'
                placeholder='Enter Your email adress'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className='send-btn'><TbSend /></button>
            </div>
          </div>

          <div className='subs-img'>
            <img src='/musicbox.svg'></img>
          </div>
        </div>
        
      </div> */}





      <Footer/>




    </div>
  );
}

export default App;
