import Image from "./Image";

function Rating(){
    return(
        <div className=" bg-gradient-black w-[360px] rounded-2xl p-[30px] flex flex-col justify-center items-center">
      <Image/>
      <h1 className=" text-button-bgk font-bold bg-text-bgk text-sm px-4 py-2 rounded-3xl">You selected <span> out of 5</span></h1>
      <h2 className=" font-bold text-2xl text-text-color mt-9 mb-2">Thanks You!</h2>
      <p className=" text-sm font-bold leading-6	 text-center text-text-rating-desc">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    )
}
export default Rating