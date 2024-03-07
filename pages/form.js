"use client";
import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from 'primereact/button';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from 'file-saver';


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

  const handleDownloadPDF = async () => {
      const element = document.getElementById("bespokeForm");

      if (element) {
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/png");
        const fileName = `${businessName}`+".pdf";
  
        const pdf = new jsPDF("l", "pt", "a4");
        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase())) {
          // var blob = pdf.output();
          // // window.open(URL.createObjectURL(new Blob([blob], { type: "application/pdf" })));
          // const a = document.createElement('a');
          // a.href = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
          // a.download = fileName;
          
          // // For Safari on iOS
          // if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
          //   const downloadMessage = "Press and hold the link to download the PDF.";
          //   alert(downloadMessage);
          // } else {
          //   // For other browsers
          //   a.style.display = 'none';
          //   document.body.appendChild(a);
          //   a.click();
          //   document.body.removeChild(a);
          // }
          var blob = pdf.output(document.getElementById("bespokeForm"));
          var file = new File([blob], fileName, {type: "application/pdf"});
          saveAs(file);

      } else {

        pdf.html(element, {
          
          callback: function () {
            pdf.save(fileName);
          },
        });
      }
    }
  }

  return (
    <>
    <main className="min-h-screen pt-5">
    <div className="ml-10">
        <div id="bespokeForm" className="m-5">
        <div className="flex flex-column gap-2">
          <label htmlFor="businessName">Business name</label>
          <InputText id="businessName" aria-describedby="businessName-help" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
          <small id="businessName-help">
              Provide your business name as it is to be referred to within the final article
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="industry">Industry</label>
          <InputText id="industry" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="targetAudience">Target audience</label>
          <InputTextarea autoResize value={targetAudience} aria-describedby="targetAudience-help" onChange={(e) => setTargetAudience(e.target.value)} rows={5} cols={30} />
          <small id="targetAudience-help">
              What can you tell us about the people you want to target?
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="reasoning">Reason for advertising</label>
          <InputTextarea autoResize value={reason} onChange={(e) => setReason(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="keyMessaging">Key messaging: What are the important things you want to say about your business?</label>
          <InputTextarea autoResize value={keyMessaging} aria-describedby="keyMessaging-help" onChange={(e) => setKeyMessaging(e.target.value)} rows={7} cols={30} />
          <small id="keyMessaging-help">
              <ul>
                <li>What are your USPs? Have you won any awards?</li>
                <li>What makes you stand out from your competitors?</li>
                <li>What do your customers/clients like about your business?</li>
                <li>What about your business makes you most proud?</li>
              </ul>
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="backgroundInfo">Please provide some background information about your business</label>
          <InputTextarea autoResize value={backgroundInfo} aria-describedby="backgroundInfo-help" onChange={(e) => setBackgroundInfo(e.target.value)} rows={5} cols={30} />
          <small id="backgroundInfo-help">
            You can include business history, location(s), key directors&apos; or employees&apos; background, mission statements and anything else you feel it is important to include
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="eventsOffers">If applicable, are there any events or offers you&apos;d like us to cover?</label>
          <InputTextarea autoResize value={eventsOffers} onChange={(e) => setEventsOffers(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="imagesVideo">What images and/or video are you providing?</label>
          <InputTextarea autoResize value={imagesVideo} aria-describedby="imagesVideo-help" onChange={(e) => setImagesVideo(e.target.value)} rows={5} cols={30} />
          <small id="imagesVideo-help">
            Attach these elements to the email to your Reach sales contact. Here, please provide names and locations to be included in photo captions, along with any image credits that may need to be included
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="quotes">Please provide some words that you&apos;re happy for us to use as quotes to support the theme of the article</label>
          <InputTextarea autoResize value={quotes} aria-describedby="quotes-help" onChange={(e) => setQuotes(e.target.value)} rows={5} cols={30} />
          <small id="quotes-help">
            This can be attributed to the business owner or a relevant employee. Please provide the name and job role of anyone to be named as the quote provider
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="referencePoints">Other helpful points of reference</label>
          <InputTextarea autoResize value={referencePoints} aria-describedby="referencePoints-help" onChange={(e) => setReferencePoints(e.target.value)} rows={5} cols={30} />
          <small id="referencePoints-help">
            E.g. website, social media channels or previous articles that may be useful to form part of the writer&apos;s research
          </small>
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="additionalPoints">Is there anything else that hasn&apos;t been covered that you&apos;d like to be included in this article?</label>
          <InputTextarea autoResize value={additionalPoints} onChange={(e) => setAdditionalPoints(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="flex flex-column gap-2">
          <label htmlFor="contactDetails">Please provide your contact details should the writer need to contact you for any clarification</label>
          <InputTextarea autoResize value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} rows={5} cols={30} />
        </div>
        <div className="card flex justify-content-center">
            <Button label="Save to device" onClick={() => handleDownloadPDF()}  />
        </div>
    </div>
    </div>
    </main>
    </>
  );
}


