import React from "react"
import Header from "../components/Header"

const TermsAndConditions = () => {
  return (
    <div className='bg-zinc-800 min-h-screen w-full'>
      <Header />
      <div className='lg:w-[50%] mx-auto pt-24 px-8 '>
        <h1 className='text-center text-xl'>
          <strong>TERMS AND CONDITIONS</strong>
        </h1>
        <h3 className='text-center mt-5 font-semibold'>
          NOTE: To collect the car read and verify the vehicle rental agreement
          terms and conditions
        </h3>
        <ol className='space-y-5 mt-5 list-decimal leading-loose tracking-wide'>
          <li>
            The hirer/driver should bring a valid driving license, original ID
            or Passport
          </li>
          <li>
            As the car hire hands the car to the hirer, both parties SHOULD
            check the visible condition of the car in order to avoid possible
            dispute regarding the time of appearance of the damages. The hirer
            is obliged to compensate during the rental period any occurred
            damages or any lost car accessories e.g., jack, spare wheel etc.
          </li>
          <li>
            At any point if the vehicle breaks down due to hirer's negligence
            e.g., flat battery, tire puncture, empty fuel tanks, loss of keys,
            keys locked in the car, fire or any other breakdown not caused due
            to vehicle maintenance or wear and tear the hirer is obliged to pay
            for any damages
            <strong>
              N/B: NO ANY PART OF THE CAR SHOULD BE REPLACED WITHOUT CONSENT
              FROM THE COMPANY.
            </strong>
          </li>
          <li>
            The hirer accepts the responsibility at times to check the oil and
            water and obliged to fuel the car with the correct type of fuel as
            failure to do so will result in paying for damages caused through
            neglecting to.
          </li>
          <li>
            Only the driver or other drivers named in the contract with a valid
            driving license are eligible to drive the vehicle. You must not
            attempt to transfer or sublease the vehicle. Any attempted transfer
            or sublease of the vehicle or its accessories by anyone other than
            RGMC SAFARIS AND CAR RENTALS is VOID
          </li>
          <li>
            The hirer is responsible for all expenses incurred through parking
            and traffic offenses, in case the hirer is found with any traffic
            offense the hirer is liable for any issue that arises under your
            care and agree to pay all fines or any amount authorities' levy or
            impose. Usage of the car for any illegal purposes such as ferrying
            of narcotics, towing and competitions is prohibited.
          </li>
          <li>
            The vehicle shall not be taken out of the country (KENYA) without
            written consent from the company (RGMC SAFARIS AND CAR RENTALS)
          </li>
          <li>
            The hirer shall report any accident involving the vehicle to the
            owner within 24hrs of occurrence and also to the police or any other
            proper authority within the time prescribed by owner or its insurers
            may require. The hirer is liable to any damages caused to the car
            and any injuries sustained as a result of the accident.
          </li>
          <li>
            The hirer should return the car on the specified date and time on
            the contract UNLESS the company is notified of the extension and
            authorizes the extension, otherwise legal action may be taken and
            Ksh.500 per hour will be charged after the return time.
          </li>
          <li>
            The hirer is obliged to take care of the car as his/her own,
            cleaning of the car on return and taking care of his/her belongings.
          </li>
          <li>
            By signing the contract the hirer agrees to all the terms and
            conditions.
          </li>
        </ol>
        <p className='mt-5'>
          <strong>
            Should there be any breaches to any of the above clauses; RGMC
            SAFARIS AND CAR RENTALS reserves the right to repossess the vehicle
            without any refund.
          </strong>
        </p>
        <h3 className='text-center mt-5 pb-5 text-xl'>Ride with us!!</h3>
      </div>
    </div>
  )
}

export default TermsAndConditions
