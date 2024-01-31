import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TreeTable } from 'primereact/treetable';

export default function Home() {
  const data = [
    {"id": 1,
    "package": "Word count",
    "supplied": 450,
    "research": 450,
    "bespoke": 750,
    "restricted": 3000 },
    {"id": 2,
    "package": "Interview",
    "supplied": "No",
    "research": "No",
    "bespoke": "Yes",
    "restricted": "No"},
    {"id": 3,
    "package": "Images",
    "supplied": "3",
    "research": "3",
    "bespoke": "6",
    "restricted": "11"},
    {"id": 4,
    "package": "Video",
    "supplied": "Only with min. Advanced amplification",
    "research": "Only with min. Advanced amplification",
    "bespoke": "Video upload included",
    "restricted": "Video cannot be included in Restricted Sector bookings"},
    {"id": 5,
    "package": "URLs",
    "supplied": "All links to sit within final CTA paragraph",
    "research": "All links to sit within final CTA paragraph",
    "bespoke": "6 maximum",
    "restricted": "10 maximum"},
    {"id": 6,
    "package": "Affiliate links",
    "supplied": "N/A",
    "bespoke": "N/A",
    "research": "N/A",
    "restricted": "With legal agreement"},
    {"id": 7,
    "package": "Live for",
    "supplied": "No expiry",
    "research": "No expiry",
    "bespoke": "No expiry",
    "restricted": "3 months"},
    {"id": 8,
    "package": "Article cost",
    "supplied": "£400",
    "research": "£600",
    "bespoke": "£900",
    "restricted": "£3,500"},
    {"id": 9,
    "package": "Legal cost",
    "supplied": "N/A",
    "research": "N/A",
    "bespoke": "N/A",
    "restricted": "£750"},
    {"id": 10,
    "package": "Studio SLA",
    "supplied": "3 working days",
    "research": "3 working days",
    "bespoke": "3 working days",
    "restricted": "5 working days"},
    {"id": 11,
    "package": "Legal SLA",
    "supplied": "N/A",
    "research": "N/A",
    "bespoke": "N/A",
    "restricted": "5 working days"},
    {"id": 12,
    "package": "Proofing",
    "supplied": "2 days to provide amends, otherwise article is published and no further changes can be made",
    "research": "3 days to provide amends, otherwise article is published and no further changes can be made",
    "bespoke": "5 days in which to provide up to 2 sets of amends before publication",
    "restricted": "2 sets of amends, no fixed time limit due to nature of content and legal complexities"
    },
    {
      "id": 13,
      "package": "Minimum start date",
      "supplied": "5 working days",
      "research": "6 working days",
      "bespoke": "8 working days",
      "restricted": "10 working days (+proofing)" 
    }
    
  ]

  // const matrixData = [
  //   {"id": 0,
  //   "category": 'Elections',
  //   "content": 'No',
  //   "details": 'pi pi-fw pi-inbox'
  // }]

  const matrixData = [
    {
    id: '0',
    key: '0',
    label: 'Election',
    data: {
      category: ' Elections',
      content: 'No',
      details: 'N/A'
    },
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: '0-0',
        label: 'National Election',
        data: {
          category: 'National election',
          content: 'No',
          details: 'N/A'
        }
      },
      {
        key: '0-1',
        label: 'Local Election',
        data: {
          category: 'Local election',
          content: 'No',
          details: 'N/A'
        }
      }
    ]
  },
  {
  id: '1',
  key: '1',
  label: 'Smoking',
  data: {
    category: ' Smoking',
    content: 'No',
    details: 'N/A'
  },
  icon: 'pi pi-fw pi-inbox',
  children: [{
    key: '1-1',
    label: 'Tobacco products',
    data: {
    category: 'Tobacco products',
    content: 'No',
    details: 'N/A'
    },
  },
  { key: '1-2',
    label: 'Vaping',
    data: {
    category: 'Vaping',
    content: 'No',
    details: 'N/A'}
  }]
  },
  {
    id: '2',
    key: '2',
    label: 'Prescription-only medicines',
    data: {
      category: ' Prescription-only medicines',
      content: 'No',
      details: 'N/A'
    },
    icon: 'pi pi-fw pi-inbox',
    children: [{
      key: '2-1',
      label: 'Botox',
      data: {
      category: 'Botox',
      content: 'No',
      details: 'N/A'
      },
    },
    { key: '2-2',
      label: '"Skinny" jabs',
      data: {
      category: '"Skinny" jabs',
      content: 'No',
      details: 'N/A'}
    },
    { key: '2-3',
    label: 'Medicinal cannabis',
    data: {
    category: 'Medicinal cannabis',
    content: 'No',
    details: 'N/A'}
  },
  ]
  },
  {
    id: '3',
    key: '3',
    label: 'Adult services',
    data: {
      category: 'Adult services',
      content: 'No',
      details: 'N/A'
    }
  },
  {
    id: '4',
    key: '4',
    label: 'Essay-writing services',
    data: {
      category: 'Essay-writing services',
      content: 'No',
      details: 'N/A'
    }
  },
  {
    id: '5',
    key: '5',
    label: 'Gambling',
    data: {
      category: ' Gambling',
      content: 'Yes, but with very strict guidelines',
    },
    icon: 'pi pi-fw pi-inbox',
    children: [{
      key: '5-1',
      label: 'Bingo',
      data: {
      category: 'Bingo',
      content: 'Yes',
      details: [<div key='5-1'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      },
    },
    { key: '5-2',
      label: 'Bookmakers',
      data: {
      category: 'Bookmakers',
      content: 'Yes',
      details: [<div key='5-2'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
    }},
    { key: '5-3',
    label: 'Online casinos',
    data: {
    category: 'Online casinos',
    content: 'Yes',
    details: [<div key='5-3'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
    }},
    { key: '5-4',
    label: 'Brick and mortar casinos',
    data: {
    category: 'Brick and mortar casinos',
    content: 'Yes',
    details: [<div key='5-4'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
  }}
  ]
  },
  {
    id: '6',
    key: '6',
    label: 'Prizes',
    icon: 'pi pi-fw pi-inbox',
    data: {
      category: ' Prizes',
      content: 'Yes, but with very strict guidelines',
    //   details: ['* Name of the advertiser (not the agency)',<br />,
    // '* UK Gambling Commission registration number',<br />,'* Contact number of an officer of the company',<br />,'* Company address']
    },
    children: [{
      key: '6-1',
      label: 'Prize raffles',
      data: {
        category: 'Prize raffles',
        content: 'Yes',
        details: [<div key='6-1'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    },{
      key: '6-2',
      label: 'E-Gaming',
      data: {
        category: 'E-gaming (if prizes are involved)',
        content: 'Yes',
        details: [<div key='6-2'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    },
    {
      key: '6-3',
      label: 'Competitions',
      data: {
        category: 'Big-ticket competitions',
        content: 'Yes',
        details: [<div key='6-3'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    }]
  },
  {
    id: '7',
    key: '7',
    label: 'CBD',
    icon: 'pi pi-fw pi-inbox',
    data: {
      category: ' CBD',
      content: 'Yes, but with very strict guidelines',
    },
    children: [{
      key: '7-1',
      label: 'CBD - Medicine',
      data: {
        category: 'CBD - Medicine',
        content: 'Yes',
        details: [<div key='7-1'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    },
      {key: '7-2',
      label: 'CBD - Food',
      data: {
        category: 'CBD - Food',
        content: 'Yes',
        details: [<div key='7-2'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Does the client have a Novel Food Authorisation license?<br />* Does the product contain less than 0.02% THC?<br />* Can the product legally be sold within the UK?</div>] 
    }
  }]
},{
  id: '8',
  key: '8',
  label: 'Medical',
  icon: 'pi pi-fw pi-inbox',
  data: {
    category: ' Medical',
    content: 'Yes, but with very strict guidelines',
  },
  children: [{
    key: '8-1',
    label: 'HRT',
    data: {
      category: 'HRT',
      content: 'Yes',
      details: [<div key='8-1'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Can the product legally be sold within the UK?<br />* Are all claims relating to the product authorised on the Great Britain Nutrition and Health Claims (GB NHC) register?</div>] 
    }
  },{
    key: '8-2',
    label: 'Medicinal supplements',
    data: {
      category: 'Medicinal supplements',
      content: 'Yes',
      details: [<div key='8-2'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Can the product legally be sold within the UK?<br />* Are all claims relating to the product authorised on the Great Britain Nutrition and Health Claims (GB NHC) register?</div>] 
  }},
  {
    key: '8-3',
    label: 'Weightloss pills',
    data: {
      category: 'Weightloss pills',
      content: 'Yes',
      details: [<div key='8-3'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Can the product legally be sold within the UK?<br />* Are all claims relating to the product authorised on the Great Britain Nutrition and Health Claims (GB NHC) register?<br /><em>NB. The advertising rules state any claim made for the effectiveness of a weight-loss or slimming method or product should be backed by rigorous practical trials conducted on people. Testimonials that are not supported by trials do not constitute adequate evidence.
      Claims that specify a precise amount of weight-loss within a specific time period should be avoided. As should claims that state a weight-loss or slimming product can help you lose weight from a specific part of the body</em></div>] 
    }
  },
  {
    key: '8-4',
    label: 'Cosmetic dentistry',
    data: {
      category: 'Cosmetic dentistry',
      content: 'Yes',
      details: [<div key='8-4'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /></div>]
    }
  },
  {
    key: '8-5',
    label: 'Private hospitals',
    data: {
      category: 'Private hospitals',
      content: 'Yes',
      details: [<div key='8-5'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /></div>]
    }
  },
  {
    key: '8-6',
    label: 'Surgery (including hair transplants/weight loss)',
    data: {
      category: 'Surgery (including hair transplants/weight loss)',
      content: 'Yes',
      details: [<div key='8-6'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /></div>]
    }
  },
  {
    key: '8-7',
    label: 'Clinical trials',
    data: {
      category: 'Clinical trials',
      content: 'Yes',
      details: [<div key='8-6'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* Evidence of approval for the trial from the Medicines and Healthcare Products Regulatory Agency (MHRA)</div>]
    }
  }
]
},{
  id: '9',
  key: '9',
  label: 'Financial',
  icon: 'pi pi-fw pi-inbox',
  data: {
    category: ' Financial',
    content: 'Yes, but with very strict guidelines',
  },
  children: [{
   key: '9-1',
   label: 'Investment',
   data: {
    category: 'Investment',
    content: 'Yes',
    details: [<div key='9-1'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
   }
  },
  {
  key: '9-2',
  label: 'Loan provider',
  data: {
   category: 'Loan provider',
   content: 'Yes',
   details: [<div key='9-2'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-3',
  label: 'Buy-back scheme',
  data: {
   category: 'Buy-back scheme',
   content: 'Yes',
   details: [<div key='9-3'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-4',
  label: 'Pawnbroker',
  data: {
   category: 'Pawnbroker',
   content: 'Yes',
   details: [<div key='9-4'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-5',
  label: 'Car finance',
  data: {
   category: 'Car finance',
   content: 'Yes',
   details: [<div key='9-5'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-6',
  label: 'Property finance',
  data: {
   category: 'Property finance',
   content: 'Yes',
   details: [<div key='9-6'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-7',
  label: 'Get-rich-quick scheme',
  data: {
   category: 'Get-rich-quick scheme',
   content: 'Yes',
   details: [<div key='9-7'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-8',
  label: 'Crypto',
  data: {
   category: 'Crypto',
   content: 'Yes',
   details: [<div key='9-8'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* If the company promotes crypto gambling, the details from the Gambling section above must also be provided</div>]
  }
 },
]
},{
  id: '10',
  key: '10',
  label: 'Spiritual/Psychic services',
  icon: 'pi pi-fw pi-inbox',
  data: {
    category: ' Spiritual/Psychic services',
    content: 'Yes, but with very strict guidelines',
  },
  children: [{
    key: '10-1',
    label: 'Psychics', 
    data: {
      category: 'Psychics',
      content: 'Yes',
      details: [<div key='10-1'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
    }
  },
  {
    key: '10-2',
    label: 'Spiritualists', 
    data: {
      category: 'Spiritualists',
      content: 'Yes',
      details: [<div key='10-2'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
  }
},
{
  key: '10-3',
  label: 'Fortune tellers', 
  data: {
    category: 'Fortune tellers',
    content: 'Yes',
    details: [<div key='10-3'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
}
}, {
  key: '10-4',
  label: 'Astrologers', 
  data: {
    category: 'Astrologers',
    content: 'Yes',
    details: [<div key='10-4'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
}
}, {
  key: '10-5',
  label: 'Clairvoyants', 
  data: {
    category: 'Clairvoyants',
    content: 'Yes',
    details: [<div key='10-5'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
}
}
]
},{
  id: '11',
  key: '11',
  label: 'Alcohol',
  data: {
    category: 'Alcohol',
    content: 'Yes',
    details: [<div key='11'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: While a legal check is not required, the content must follow all of the <a href="https://www.asa.org.uk/advice-online/alcohol-general.html" target="_blank"><u>ASA Guidelines</u></a> on alcohol advertising</em></div>]
  }
},
{
  id: '12',
  key: '12',
  label: 'Fireworks',
  data: {
    category: 'Fireworks',
    content: 'Yes',
    details: [<div key='12'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* Evidence that the client has a valid UK licence to sell fireworks all year round</div>]
  }
}
]

  const packageTemplate = (rowData) => {
    return (
      <div>
        <p><strong>{rowData.package}</strong></p>
      </div>
    )
  }

  const suppliedTemplate = (rowData) => {
    var callTooltip =  "Usable content - eg. press release - must be provided"
    var imageTooltip = "Must adhere to image guidelines in Process tab below"
       
   
    return (
      (rowData.supplied == "No") ?
      <div>
        <Tooltip target=".suppliedCopy" className="bg-[#4CB4BE]" />
        <span className="suppliedCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.supplied}</p>
        </span>
      </div>
      :
      (rowData.supplied == "3") ?
      <div>
        <Tooltip target=".suppliedCopy" className="bg-[#4CB4BE]" />
        <span className="suppliedCopy" data-pr-tooltip={imageTooltip} data-pr-position='mouse'> 
        <p>{rowData.supplied}</p>
        </span>
      </div> 
      :
      <div>
        <p>{rowData.supplied}</p>
      </div>
    )
  }

  const researchTemplate = (rowData) => {
    var callTooltip =  "Content brief and minimum of 5 bullet points must be provided"
    var imageTooltip = "Must adhere to image guidelines in Process tab below"
    
   
    return (
      (rowData.research == "No") ?
      <div>
        <Tooltip target=".researchCopy" className="bg-[#4CB4BE]" />
        <span className="researchCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.research}</p>
        </span>
      </div> 
      :
      (rowData.research == "3") ?
      <div>
        <Tooltip target=".researchCopy" className="bg-[#4CB4BE]" />
        <span className="researchCopy" data-pr-tooltip={imageTooltip} data-pr-position='mouse'> 
        <p>{rowData.research}</p>
        </span>
      </div> 
      :
      <div>
        <p>{rowData.research}</p>
      </div>
    )
  }

  const bespokeTemplate = (rowData) => {
    var callTooltip =  "30min consultation call. Video calls available but must be arranged with client and link provided on ARF"
    var imageTooltip = "Must adhere to image guidelines in Process tab below"
   
    return (
      (rowData.bespoke == "Yes") ?
      <div>
        <Tooltip target=".bespokeCopy" className="bg-[#4CB4BE]" />
        <span className="bespokeCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.bespoke}</p>
        </span>
      </div> 
      :
      (rowData.bespoke == "6") ?
      <div>
        <Tooltip target=".bespokeCopy" className="bg-[#4CB4BE]" />
        <span className="bespokeCopy" data-pr-tooltip={imageTooltip} data-pr-position='mouse'> 
        <p>{rowData.bespoke}</p>
        </span>
      </div> 
      :
      <div>
        <p>{rowData.bespoke}</p>
      </div>
    )
  }

  const restrictedTemplate = (rowData) => {
    var callTooltip =  "Restricted Sector Brief must be provided"
    var imageTooltip = "Must adhere to image guidelines in Process tab below"
    var expiryTooltip = "Extension upsells can be purchased"
   
    return (
      (rowData.restricted == "No") ?
      <div>
        <Tooltip target=".restrictedCopy" className="bg-[#4CB4BE]" />
        <span className="restrictedCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.restricted}</p>
        </span>
      </div> 
      :
      (rowData.restricted == "11") ?
      <div>
        <Tooltip target=".restrictedCopy" className="bg-[#4CB4BE]" />
        <span className="restrictedCopy" data-pr-tooltip={imageTooltip} data-pr-position='mouse'> 
        <p>{rowData.restricted}</p>
        </span>
      </div> 
      :
      (rowData.restricted == "3 months") ?
      <div>
        <Tooltip target=".restrictedCopy" className="bg-[#4CB4BE]" />
        <span className="restrictedCopy" data-pr-tooltip={expiryTooltip} data-pr-position='mouse'> 
        <p>{rowData.restricted}</p>
        </span>
      </div> 
      :
      <div>
        <p>{rowData.restricted}</p>
      </div>
    )
  }

  return (
    <>
    <main className="min-h-screen pt-5">
    <div className="ml-10">
    <Accordion multiple activeIndex={[0]}>
      <AccordionTab header="Specifications">
            <DataTable value={data} className="pt-5 pb-5" showGridlines style={{minWidth: '50rem'}}>
                <Column field="package" frozen header=" " body={packageTemplate}></Column>
                <Column field="supplied" header="Supplied" body={suppliedTemplate}></Column>
                <Column field="research" header="Research" body={researchTemplate}></Column>
                <Column field="bespoke" header="Bespoke" body={bespokeTemplate}></Column>
                <Column field="restricted" header="Restricted" body={restrictedTemplate}></Column>
            </DataTable>
      </AccordionTab>
      <AccordionTab className="pt-5" header="Process">
      <div>
      <ul>
        <li>All SLAs begin from the point Studio receives all of the necessary assets OR a confirmed time slot for a client call</li>
        <li>A minimum of 48hrs notice must be provided for all client calls. Video calls are available, but must be arranged with the client and a link added to the ARF before processing to Studio</li>
        <li>If a Content Marketing ARF is uploaded and doesn&#39;t follow the specifications above or assets are missing, it <strong>will</strong> be put onto Query. The SLA does not begin until the Query is resolved</li>
        <li>It is the salesperson or CST team member&#39;s responsibility to ensure all client-supplied assets have been uploaded</li>
        <li>No member of the Studio team should be chased prior to the SLAs listed above</li>
        <li>Once an article is approved and has been published, no further changes can be made. From there, a Content Marketing Amends package would need to be processed to facilitate any changes</li>
        <li>Each article published must be at least 90% unique. This means that some quotes could be used across articles, but if a client wishes to &#34;re-use&#34; previously-published content, a CM Amends package should be booked, rather than a new article</li>
      </ul>
      <u><strong>IMAGES</strong></u>
      <ul>
        <li>Client logos cannot be included in content marketing artices</li>
        <li>Images cannot contain overlaid text</li>
        <li>Display ads and posters cannot be used as images within articles</li>
        <li>Captions and image credits should be supplied with all images</li>
        <li>Images should be landscape, in a 3:2 ratio and no less than 1,200px. JPEG is the preferred format, PNG cannot be used</li>
      </ul>
      <u><strong>COMPETITIONS</strong></u>
      <ul>
        <li>Before any competiton booking is processed, approval must be sought via <a href="mailto:mark.burrow@reachplc.com"><u>Mark Burrow</u></a>. Include full prize details and the intended publication site(s)</li>
        <li>Once approved, the <a href="https://docs.google.com/document/d/1yddfKNHW5LHdaiTZL4LvHuZvIt9reTha/edit?usp=sharing&ouid=106703888925425801381&rtpof=true&sd=true" target="_blank"><u>Prize Provision Document</u></a> must be sent to the client and confirmation received that they agree to the terms </li>
        <li>The <a href="https://data.reachplc.com/221644616938059" target="_blank"><u>Competition Request Jotform</u></a> can then be submitted and should contain all of the necessary details to facilitate the competition</li>
        <li>If data capture is part of the package,  <a href="mailto:dave.rad@reachplc.com"><u>Dave Rad</u></a> must be contacted to discuss the necessary agreement</li>
        <li>A Content Marketing ARF should then be created and processed to Studio. It should be clear via the package option and campaign brief that the booking relates to a competition </li>
      </ul>
      </div>
      </AccordionTab>
      <AccordionTab className="pt-5" header="Legal Matrix">
        <div className="pt-5 pb-5"><a><br />The below is a non-exhaustive list of the industries that can only be progressed as Restricted Sector packages, if at all. The table is intended for the salesperson to determine the necessary package at the point of pitching and confirm the details that must be provided in order to progress the booking. Any booking received that does not contain the necessary information in the 'details required' section will be rejected.</a></div>
        <TreeTable value={matrixData} tableStyle={{ minWidth: '50rem'}}>
          <Column field="category" header="Category" expander></Column>
          <Column field="content" header="Is Content Marketing allowed?"></Column>
          <Column field="details" header="Details required"></Column>
        </TreeTable>
      </AccordionTab>
    </Accordion>
    </div>

    </main>
    </>
  );
}
