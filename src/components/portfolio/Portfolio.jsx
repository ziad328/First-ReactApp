import React from 'react'

export default function Portfolio() {
  return (<>
    <section className='whiteBG-secondry-title-component-section d-flex flex-column align-items-center justify-content-center pt-5' >
      <div className="text-center">

        <div className="title text-center pt-3">
          <h2 className='text-uppercase fw-bolder fs-1 mb-3' >portfolio component</h2>
          <div className="title-decoration mb-3 d-flex flex-row align-items-center justify-content-center">

            <div className="under-line-secondry-color me-3"></div>

            <div className="star">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill='#2c3e50' d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
            </div>

            <div className="under-line-secondry-color ms-3"></div>
          </div>
        </div>

        <div className="container d-flex flex-column align-items-center justify-content-center gap-4 p-4 ">
          <div className="row">
            <div className="col-md-4">
              <div className="portfolio-item position-relative">
                <div className="portfolio-item-img">
                  <img src="./src/assets/house.png" alt="house" />
                  <div className="portfolio-item-overlay d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill='#ffffff' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item position-relative">
                <div className="portfolio-item-img">
                  <img src="./src/assets/cake.png" alt="house" />
                  <div className="portfolio-item-overlay d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill='#ffffff' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item position-relative">
                <div className="portfolio-item-img">
                  <img src="./src/assets/cercius.png" alt="house" />
                  <div className="portfolio-item-overlay d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill='#ffffff' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="portfolio-item position-relative">
                <div className="portfolio-item-img">
                  <img src="./src/assets/house.png" alt="house" />
                  <div className="portfolio-item-overlay d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill='#ffffff' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="portfolio-item position-relative">
                <div className="portfolio-item-img">
                  <img src="./src/assets/cake.png" alt="house" />
                  <div className="portfolio-item-overlay d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill='#ffffff' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">

              <div className="portfolio-item position-relative">

                <div className="portfolio-item-img">
                  <img src="./src/assets/cercius.png" alt="house" />
                  <div className="portfolio-item-overlay d-flex align-items-center justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill='#ffffff' d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>)
}
