import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { SelectField, TextField } from './components/Fields'
import BackgroundLayout from './components/BackgroundImage'

export default function Register() {
  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    track:"Through online search",
    message:"",
  })
  const [isSuccess, setSuccess] = useState(false)
  const handleSend = async() => {
    const { firstName,lastName, email,message,track} = data;
    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSdx83WYhMQGeWUtDVOR55WCtsg9pV9y5H-za23ONdVIMz-J0g/formResponse?&entry.930213930=${firstName}&entry.1280782309=${lastName}&entry.1611785866=${email}&entry.1261944393=${message}&entry.818075624=${track}`
    try{
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      });
    }catch(err){
      console.log(err)
    }
    setData({
      firstName:"",
      email:"",
      lastName:"",
      track:"Through online search",
      message:"",
    })
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
    },5000)
    // alert("Recieved details")

  }
  const tracker = [
    "Website Development","Project Consultation","Bug Fixes","Others"
  ]
  return (
    <>
      <Head>
        <title>Register - QIB Logistics</title>
      </Head>

      <BackgroundLayout>
      <div className="flex flex-col bg-white">
          <Link href="/" aria-label="Home">
            {/* <Logo className="h-10 w-auto" /> */}
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Let`s work together
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Tell us more about your needs.
            </p>
          </div>
        </div>
        <div
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 text-gray-700"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            value={data?.firstName}
            autoComplete="given-name"
            required
            onChange={(e:any) => setData({
              ...data,
              firstName:e.target.value
            })}
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            value={data?.lastName}
            autoComplete="family-name"
            required
            onChange={(e:any) => setData({
              ...data,
              lastName:e.target.value
            })}
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            value={data?.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            onChange={(e:any) => setData({
              ...data,
              email:e.target.value
            })}
          />
          <TextField
            className="col-span-full"
            label="Your Message"
            id="message"
            name="message"
            value={data?.message}
            type="textarea"
            required
            onChange={(e:any) => setData({
              ...data,
              message:e.target.value
            })}
          />
                  <SelectField
            className="col-span-full"
            label="Service you are looking for"
            id="referral_source"
            name="referral_source"
          >
            {tracker?.map((i)=> <option key={i} onSelect={(e:any) => setData({
              ...data,
              track:i
            })} >{i}</option>)}
            
           
          </SelectField>
          <div className="col-span-full">
            <button
            //   variant="solid"
            //   color="blue"
              className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 px-4 py-2 rounded-lg text-white"
              onClick={()=>handleSend()}
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </button>
            {isSuccess && <p className='text-sm pl-3'>We have recieved your message. Sit back and relax while we get back to you.</p>}

          </div>
        </div>
      </BackgroundLayout>
       
    </>
  )
}