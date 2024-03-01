import React, { useState, useEffect } from 'react';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function Form() {
  const [businessName, setBusinessName] = useState('');
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [reason, setReason] = useState('')

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
    </div>
    </div>
    </main>
    </>
  );
}


