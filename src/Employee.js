import React from 'react';
import { request, gql } from 'graphql-request';
import { useState, useEffect } from 'react';
import './style.css';



const Employee = () => {

    const [ data ,setData ]=useState("")


    useEffect(()=>{
        const query = gql`
        {
            designs {
                picture {
                  url
                  width
                  height
                },
                name
                description
              },
              servicings {
                picture {
                  url
                  width
                  height
                }
                name
                description
              },
              copies {
                picture {
                  url
                  width
                  height
                }
                name
                description
              },
              socialMedias {
                picture {
                  url
                  width
                  height
                }
                name
                description
              }
        }`
      
      request('https://api-ap-south-1.graphcms.com/v2/cl4f6k5p21dnx01xsb7djdxht/master', query).then((data) => setData(data))
         

    },[])




  return (
    <>
    
    {/* <div>Employee</div> */}

        {/* {console.log(data)} */}
        

        <div className='head'>Design</div>
        <div className='doubleline'></div>

        <div className='profile'>
        <img src={data && data.designs[0].picture.url} width="200px"/>
        <p className='name'>{data && data.designs[0].name}</p>
        <p className='info'>{data && data.designs[0].description}</p>
        </div>
        <div className='profile'>
        <img src={data && data.designs[1].picture.url} width="200px"/>
        <p className='name'>{data && data.designs[1].name}</p>
        <p className='info'>{data && data.designs[1].description}</p>
        </div>



        <div className='head'>Servicing</div>
        <div className='doubleline'></div>

        <div className='profile'>
        <img src={data && data.servicings[0].picture.url} width="200px"/>
        <p className='name'>{data && data?.servicings[0].name}</p>
        <p className='info'>{data && data?.servicings[0].description}</p>
        </div>
        <div className='profile'>
        <img src={data && data.servicings[1].picture.url} width="200px"/>
        <p className='name'>{data && data.servicings[1].name}</p>
        <p className='info'>{data && data.servicings[1].description}</p>
        </div>



        <div className='head'>Copy</div>
        <div className='doubleline'></div>

        <div className='profile'>
        <img src={data && data.copies[0].picture.url} width="200px"/>
        <p className='name'>{data && data.copies[0].name}</p>
        <p className='info'>{data && data.copies[0].description}</p>
        </div>
        <div className='profile'>
        <img src={data && data.copies[1].picture.url} width="200px"/>
        <p className='name'>{data && data.copies[1].name}</p>
        <p className='info'>{data && data.copies[1].description}</p>
        </div>



        <div className='head'>Copy</div>
        <div className='doubleline'></div>

        <div className='profile'>
        <img src={data && data.socialMedias[0].picture.url} width="200px"/>
        <p className='name'>{data && data.socialMedias[0].name}</p>
        <p className='info'>{data && data.socialMedias[0].description}</p>
        </div>
        <div className='profile'>
        <img src={data && data.copies[1].picture.url} width="200px"/>
        <p className='name'>{data && data.socialMedias[1].name}</p>
        <p className='info'>{data && data.socialMedias[1].description}</p>
        </div>


        {/* {data && data.designs[0].map((a,index)=>{
            <h1>{a.name}</h1>
        })} */}


    </>
  )
}

export default Employee