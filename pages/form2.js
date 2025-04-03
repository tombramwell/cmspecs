"use client";
import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';
import jsPDF from "jspdf";


export default function Form() {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [reason, setReason] = useState('');
  const [keyMessaging, setKeyMessaging] = useState('');
  const [backgroundInfo, setBackgroundInfo] = useState('');
  const [eventsOffers, setEventsOffers] = useState('');
  const [imagesVideo, setImagesVideo] = useState('');
  const [quotes, setQuotes] = useState('');
  const [referencePoints, setReferencePoints] = useState('');
  const [additionalPoints, setAdditionalPoints] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const generatePDF = (formData) => {
    const pdf = new jsPDF();
    const margin = 20;
    const maxWidth = pdf.internal.pageSize.width - 2 * margin;
    let currentY = margin;
  
    // Function to add text to PDF with dynamic spacing, word wrapping, and different font styles
    const addTextWithStyles = (text, isBold) => {
      const fontType = isBold ? 'bold' : 'normal';
      pdf.setFont(undefined, fontType);
  
      const lines = pdf.splitTextToSize(text, maxWidth);
      
      for (const line of lines) {
        // Check if there's enough space for a new line, otherwise add a new page
        if (currentY + 10 > pdf.internal.pageSize.height - margin) {
          pdf.addPage();
          currentY = margin;
        }
        
        pdf.text(margin, currentY, line);
        currentY += 10; // Adjust this value based on your preferred line height
      }
  
      currentY += 5; // Add extra spacing between responses and next field name
      pdf.setFont(undefined, 'normal'); // Reset to normal font after adding the text
    };
  
  const imgData = 'https://i.imgur.com/OZu2qws.png'
  const imgWidth = 100;
  const imgHeight = 27;
  pdf.addImage(imgData, 'PNG', margin, currentY, imgWidth, imgHeight);
  currentY += imgHeight + 10;
  

  addTextWithStyles('Business name: ', true)
  addTextWithStyles(`${businessName}`, false)
  addTextWithStyles('Industry: ', true)
  addTextWithStyles(`${industry}`, false)
  addTextWithStyles('Target audience: ', true)
  addTextWithStyles(`${targetAudience}`, false)
  // addTextWithStyles('Reason for advertising: ', true)
  // addTextWithStyles(`${reason}`, false)
  addTextWithStyles('Key messaging: ', true)
  addTextWithStyles(`${keyMessaging}`, false)
  // addTextWithStyles('Background info: ', true)
  // addTextWithStyles(`${backgroundInfo}`, false)
  // addTextWithStyles('Events/Offers: ', true)
  // addTextWithStyles(`${eventsOffers}`, false)
  // addTextWithStyles('Images/Video: ', true)
  // addTextWithStyles(`${imagesVideo}`, false)
  // addTextWithStyles('Quotes: ', true)
  // addTextWithStyles(`${quotes}`, false)
  // addTextWithStyles('Reference points: ', true)
  // addTextWithStyles(`${referencePoints}`, false)
  addTextWithStyles('Additional info: ', true)
  addTextWithStyles(`${additionalPoints}`, false)
  // addTextWithStyles('Contact details: ', true)
  // addTextWithStyles(`${contactDetails}`, false)



  pdf.save(`Reach Content Marketing - ${businessName}.pdf`);

}


  return (
    <>
    <main className="min-h-screen pt-5">
    <div className="ml-10">
        <div id="bespokeForm">
          <small id="bespokeForm-help">
            <br />
          The following form has been designed to provide all of the information required to craft a quality Bespoke content marketing article that delivers exceptional results.<br />
Please provide as much information as possible. The writer may get in touch should any points of clarification be required, but this may delay the publication of the article.<br />
Once completed, click the Save button and a PDF will be downloaded to your device. Please email this, along with any images to be included, directly to your Reach account manager who will process it along with the Content Marketing booking.<br />
          </small>
        <div className="flex flex-column gap-2">
          <br />
          <label htmlFor="businessName">Business name</label>
          <small id="businessName-help">
              Provide your business name as it is to be referred to within the final article
          </small>
          <InputText id="businessName" aria-describedby="businessName-help" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="industry">Background</label>
          <small id="industry-help">
            <ul>
                <li>What industry does your business operate in?</li>
                <li>What is the story behind your business? How, why and when was it founded? </li>
                <li>What is unique about your business? What sets you apart from your competitors? </li>
            </ul>
          </small>
          <InputTextarea autoResize id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="targetAudience">Target audience and campaign goals</label>
          <small id="targetAudience-help">
            <ul>
                <li>Who is your ideal customer? What problems do you help them solve?</li>
                <li>What message do you want to convey to both your ideal customer and our readers through this campaign?</li>
                <li>Why are you investing in this campaign now? Are you launching a new product, increasing brand awareness, hosting an open day or other special event etc</li>
            </ul>
          </small>
          <InputTextarea autoResize value={targetAudience} aria-describedby="targetAudience-help" onChange={(e) => setTargetAudience(e.target.value)} rows={5} cols={30} />
        </div>
        {/* <div className="flex flex-column gap-2">
          <label htmlFor="reasoning">Reason for advertising</label>
          <InputTextarea autoResize value={reason} onChange={(e) => setReason(e.target.value)} rows={5} cols={30} />
        </div> */}
        <div className="flex flex-column gap-2">
          <label htmlFor="keyMessaging">Key messaging: What are the important things you want to say about your business?</label>
          <small id="keyMessaging-help">
              <ul>
                <li>What are your USPs? What makes you stand out from your competitors?</li>
                <li>What do your customers/clients like about your business?</li>
                <li>What about your business makes you most proud?</li>
                <li>Tell us something about your business that will really wow our readers. Is there an interesting, inspiring, incredible or totally unbelievable story about your business?</li>
              </ul>
          </small>
          <InputTextarea autoResize value={keyMessaging} aria-describedby="keyMessaging-help" onChange={(e) => setKeyMessaging(e.target.value)} rows={7} cols={30} />
        </div>
        {/* <div className="flex flex-column gap-2">
          <label htmlFor="backgroundInfo">Please provide some background information about your business</label>
          <small id="backgroundInfo-help">
            You can include business history, location(s), key directors&apos; or employees&apos; background, mission statements and anything else you feel it is important to include
          </small>
          <InputTextarea autoResize value={backgroundInfo} aria-describedby="backgroundInfo-help" onChange={(e) => setBackgroundInfo(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="eventsOffers">If applicable, are there any events or offers you&apos;d like us to cover?</label>
          <InputTextarea autoResize value={eventsOffers} onChange={(e) => setEventsOffers(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="imagesVideo">What images and/or video are you providing?</label>
          <small id="imagesVideo-help">
            Attach these elements to the email to your Reach sales contact. Here, please provide names and locations to be included in photo captions, along with any image credits that may need to be included
          </small>
          <InputTextarea autoResize value={imagesVideo} aria-describedby="imagesVideo-help" onChange={(e) => setImagesVideo(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="quotes">Please provide some words that you&apos;re happy for us to use as quotes to support the theme of the article</label>
          <small id="quotes-help">
            This can be attributed to the business owner or a relevant employee. Please provide the name and job role of anyone to be named as the quote provider
          </small>
          <InputTextarea autoResize value={quotes} aria-describedby="quotes-help" onChange={(e) => setQuotes(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="referencePoints">Other helpful points of reference</label>
          <small id="referencePoints-help">
            E.g. website, social media channels or previous articles that may be useful to form part of the writer&apos;s research
          </small>
          <InputTextarea autoResize value={referencePoints} aria-describedby="referencePoints-help" onChange={(e) => setReferencePoints(e.target.value)} rows={5} cols={30} />
        </div> */}
        <div className="flex flex-column gap-2">
          <label htmlFor="additionalPoints">Final details</label>
          <small id="additionalPoints-help">
            <ul>
            <li>Are there any specific calls to action you&apos;d like us to include?</li>
            <li>Alongside a link to your website, is there an email address or phone number you&apos;d like us to share?</li>
            </ul>
          </small>
          <InputTextarea autoResize value={additionalPoints} onChange={(e) => setAdditionalPoints(e.target.value)} rows={5} cols={30} />
        </div>
        {/* <div className="flex flex-column gap-2">
          <label htmlFor="contactDetails">Please provide your contact details should the writer need to contact you for any clarification</label>
          <InputTextarea autoResize value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} rows={5} cols={30} />
        </div> */}
        <div className="card flex justify-content-center">
            <Button label="Download" onClick={() => generatePDF()}  />
            <small>iOS users will need to &apos;Share&apos; the generated file</small>
        </div>
    </div>
    </div>
    </main>
    </>
  );
}


