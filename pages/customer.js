import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { TreeTable } from 'primereact/treetable';
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { InputText } from "primereact/inputtext";
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function Home() {
  const [clientNameValue, setClientNameValue] = useState('')

  const icon = (<i className="pi pi-search"></i>)
  const data = [
    {"id": 1,
    "package": "Maximum word count",
    "supplied": 500,
    "research": 500,
    "bespoke": 750,
    "restricted": 3000 },
    {"id": 2,
    "package": "Assets required",
    "supplied": "Press release or usable content",
    "research": "Content brief and minimum of 5 bullet points",
    "bespoke": "Bespoke Questionnaire",
    "restricted": "Restricted Sector Brief"},
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
    {"id": 7,
    "package": "Live for",
    "supplied": "No expiry",
    "research": "No expiry",
    "bespoke": "No expiry",
    "restricted": "3 months"},
      {
      "id": 12,
      "package": "Amends",
      "supplied": "1 set",
      "research": "2 sets",
      "bespoke": "2 sets",
      "restricted": "2 sets"
    },
    {"id": 13,
    "package": "Proofing",
    "supplied": "2 days to provide amends, otherwise article is published and no further changes can be made",
    "research": "3 days to provide amends, otherwise article is published and no further changes can be made",
    "bespoke": "5 days to provide amends, otherwise article is published and no further changes can be made",
    "restricted": "No fixed time limit due to nature of content and legal complexities"
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
      content: 'Restricted Sector',
    },
    icon: 'pi pi-fw pi-inbox',
    children: [{
      key: '5-1',
      label: 'Bingo',
      data: {
      category: 'Bingo',
      content: 'Restricted Sector',
      details: [<div key='5-1'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      },
    },
    { key: '5-2',
      label: 'Bookmakers',
      data: {
      category: 'Bookmakers',
      content: 'Restricted Sector',
      details: [<div key='5-2'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
    }},
    { key: '5-3',
    label: 'Online casinos',
    data: {
    category: 'Online casinos',
    content: 'Restricted Sector',
    details: [<div key='5-3'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
    }},
    { key: '5-4',
    label: 'Brick and mortar casinos',
    data: {
    category: 'Brick and mortar casinos',
    content: 'Restricted Sector',
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
      content: 'Restricted Sector',
    //   details: ['* Name of the advertiser (not the agency)',<br />,
    // '* UK Gambling Commission registration number',<br />,'* Contact number of an officer of the company',<br />,'* Company address']
    },
    children: [{
      key: '6-1',
      label: 'Prize raffles',
      data: {
        category: 'Prize raffles',
        content: 'Restricted Sector',
        details: [<div key='6-1'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    },{
      key: '6-2',
      label: 'E-Gaming',
      data: {
        category: 'E-gaming (if prizes are involved)',
        content: 'Restricted Sector',
        details: [<div key='6-2'>* Name of the advertiser (not the agency)<br />* UK Gambling Commission registration number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    },
    {
      key: '6-3',
      label: 'Competitions',
      data: {
        category: 'Big-ticket competitions',
        content: 'Restricted Sector',
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
      content: 'Restricted Sector',
    },
    children: [{
      key: '7-1',
      label: 'CBD - Medicine',
      data: {
        category: 'CBD - Medicine',
        content: 'Restricted Sector',
        details: [<div key='7-1'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address</div>]
      }
    },
      {key: '7-2',
      label: 'CBD - Food',
      data: {
        category: 'CBD - Food',
        content: 'Restricted Sector',
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
    content: 'Restricted Sector',
  },
  children: [{
    key: '8-1',
    label: 'HRT',
    data: {
      category: 'HRT',
      content: 'Restricted Sector',
      details: [<div key='8-1'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Can the product legally be sold within the UK?<br />* Are all claims relating to the product authorised on the Great Britain Nutrition and Health Claims (GB NHC) register?</div>] 
    }
  },{
    key: '8-2',
    label: 'Medicinal supplements',
    data: {
      category: 'Medicinal supplements',
      content: 'Restricted Sector',
      details: [<div key='8-2'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Can the product legally be sold within the UK?<br />* Are all claims relating to the product authorised on the Great Britain Nutrition and Health Claims (GB NHC) register?</div>] 
  }},
  {
    key: '8-3',
    label: 'Weightloss pills',
    data: {
      category: 'Weightloss pills',
      content: 'Restricted Sector',
      details: [<div key='8-3'>* Name of the advertiser (not the agency)<br />* MHRA product license number<br />* Contact number of an officer of the company<br />* Company address<br /><em>The answer to the following questions must be yes:</em><br />* Can the product legally be sold within the UK?<br />* Are all claims relating to the product authorised on the Great Britain Nutrition and Health Claims (GB NHC) register?<br /><em>NB. The advertising rules state any claim made for the effectiveness of a weight-loss or slimming method or product should be backed by rigorous practical trials conducted on people. Testimonials that are not supported by trials do not constitute adequate evidence.
      Claims that specify a precise amount of weight-loss within a specific time period should be avoided. As should claims that state a weight-loss or slimming product can help you lose weight from a specific part of the body</em></div>] 
    }
  },
  {
    key: '8-4',
    label: 'Cosmetic dentistry',
    data: {
      category: 'Cosmetic dentistry',
      content: 'Restricted Sector',
      details: [<div key='8-4'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /></div>]
    }
  },
  {
    key: '8-5',
    label: 'Private hospitals',
    data: {
      category: 'Private medical facilities (inc. hospitals)',
      content: 'Restricted Sector',
      details: [<div key='8-5'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /></div>]
    }
  },
  {
    key: '8-6',
    label: 'Surgery (inc. hair transplants/weight loss)',
    data: {
      category: 'Surgery (inc. hair transplants/weight loss/tattoo removal)',
      content: 'Restricted Sector',
      details: [<div key='8-6'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /></div>]
    }
  },
  {
    key: '8-7',
    label: 'Clinical trials',
    data: {
      category: 'Clinical trials',
      content: 'Restricted Sector',
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
    content: 'Restricted Sector',
  },
  children: [{
   key: '9-1',
   label: 'Investment',
   data: {
    category: 'Investment',
    content: 'Restricted Sector',
    details: [<div key='9-1'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
   }
  },
  {
  key: '9-2',
  label: 'Loan provider',
  data: {
   category: 'Loan provider',
   content: 'Restricted Sector',
   details: [<div key='9-2'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-3',
  label: 'Buy-back scheme',
  data: {
   category: 'Buy-back scheme',
   content: 'Restricted Sector',
   details: [<div key='9-3'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-4',
  label: 'Pawnbroker',
  data: {
   category: 'Pawnbroker',
   content: 'Restricted Sector',
   details: [<div key='9-4'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-5',
  label: 'Car finance',
  data: {
   category: 'Car finance',
   content: 'Restricted Sector',
   details: [<div key='9-5'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-6',
  label: 'Property finance',
  data: {
   category: 'Property finance',
   content: 'Restricted Sector',
   details: [<div key='9-6'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-7',
  label: 'Get-rich-quick scheme',
  data: {
   category: 'Get-rich-quick scheme',
   content: 'Restricted Sector',
   details: [<div key='9-7'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br />* FCA Financial Services Register reference number</div>]
  }
 },
 {
  key: '9-8',
  label: 'Crypto',
  data: {
   category: 'Crypto',
   content: 'Restricted Sector',
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
    content: 'Restricted Sector',
  },
  children: [{
    key: '10-1',
    label: 'Psychics', 
    data: {
      category: 'Psychics',
      content: 'Restricted Sector',
      details: [<div key='10-1'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
    }
  },
  {
    key: '10-2',
    label: 'Spiritualists', 
    data: {
      category: 'Spiritualists',
      content: 'Restricted Sector',
      details: [<div key='10-2'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
  }
},
{
  key: '10-3',
  label: 'Fortune tellers', 
  data: {
    category: 'Fortune tellers',
    content: 'Restricted Sector',
    details: [<div key='10-3'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
}
}, {
  key: '10-4',
  label: 'Astrologers', 
  data: {
    category: 'Astrologers',
    content: 'Restricted Sector',
    details: [<div key='10-4'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: We cannot make any claims in these features</em></div>]
}
}, {
  key: '10-5',
  label: 'Clairvoyants', 
  data: {
    category: 'Clairvoyants',
    content: 'Restricted Sector',
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
    content: 'Bespoke',
    details: [<div key='11'>* Name of the advertiser (not the agency)<br />* Contact number of an officer of the company<br />* Company address<br /><em>NB: While a legal check is not required, the content must follow all of the <a href="https://www.asa.org.uk/advice-online/alcohol-general.html" target="_blank"><u>ASA Guidelines</u></a> on alcohol advertising</em></div>]
  }
},
{
  id: '12',
  key: '12',
  label: 'Fireworks',
  data: {
    category: 'Fireworks',
    content: 'Bespoke',
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
        <Tooltip target=".suppliedCopy" className="bg-[#3D5161] text-white" />
        <span className="suppliedCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.supplied}</p>
        </span>
      </div>
      :
      (rowData.supplied == "3") ?
      <div>
        <Tooltip target=".suppliedCopy" className="bg-[#3D5161] text-white" />
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
        <Tooltip target=".researchCopy" className="bg-[#3D5161] text-white" />
        <span className="researchCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.research}</p>
        </span>
      </div> 
      :
      (rowData.research == "3") ?
      <div>
        <Tooltip target=".researchCopy" className="bg-[#3D5161] text-white" />
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
        <Tooltip target=".bespokeCopy" className="bg-[#3D5161] text-white" />
        <span className="bespokeCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.bespoke}</p>
        </span>
      </div> 
      :
      (rowData.bespoke == "6") ?
      <div>
        <Tooltip target=".bespokeCopy" className="bg-[#3D5161] text-white" />
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
        <Tooltip target=".restrictedCopy" className="bg-[#3D5161] text-white" />
        <span className="restrictedCopy" data-pr-tooltip={callTooltip} data-pr-position='mouse'> 
        <p>{rowData.restricted}</p>
        </span>
      </div> 
      :
      (rowData.restricted == "11") ?
      <div>
        <Tooltip target=".restrictedCopy" className="bg-[#3D5161] text-white" />
        <span className="restrictedCopy" data-pr-tooltip={imageTooltip} data-pr-position='mouse'> 
        <p>{rowData.restricted}</p>
        </span>
      </div> 
      :
      (rowData.restricted == "3 months") ?
      <div>
        <Tooltip target=".restrictedCopy" className="bg-[#3D5161] text-white" />
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
        <div id="packagesTable" className="m-5">
            <DataTable value={data} className="pt-5 pb-5" showGridlines style={{minWidth: '50rem'}}>
                <Column field="package" frozen header=" " body={packageTemplate}></Column>
                <Column field="supplied" header="Supplied" body={suppliedTemplate}></Column>
                <Column field="research" header="Research" body={researchTemplate}></Column>
                <Column field="bespoke" header="Bespoke" body={bespokeTemplate}></Column>
                <Column field="restricted" header="Restricted" body={restrictedTemplate}></Column>
            </DataTable>
        </div>
      <div id="contentMarketing" className="m-5">
        <h2>Content Marketing</h2>
        <p><em>In a world where everything is &quot;content&quot;, what is content marketing?</em></p>
        <p>Put simply, content marketing is all about creating and distributing content that provides value to the reader.</p>
        <p>Articles that they find relevant and engaging will help to attract and retain their attention, fostering brand loyalty and helping to position the clients we work with as the experts in their field.</p>
        <p>The core premise is you are able to deliver your message in our voice. When coupled with the access we can provide to the unparalleled advantages of the Reach network of regional and national publications, it can deliver incredible results - when done properly.</p>
        <p>Successful content marketing isn&apos;t about providing a business overview or pitching specific products and services.</p>
        <p>It should focus on providing truly relevant and useful content that our audience can use to help them solve their issues - ultimately driving profitable customer action by converting the reader into your consumer.</p>
     </div>
      <div id="supplied" className="m-5">
        <h2>Supplied</h2>
        <Accordion>
        <AccordionTab header="Headline">
        {/* <h3>Headline</h3> */}
        <p>Aim for 60-80 characters long, maximum 100. The headline should accurately reflect what the article is about. It should not include excessive punctuation or ALL CAPS</p>
        </AccordionTab>
        <AccordionTab header="Lead text">
        <p>This provides extra information, includes keywords, and should make readers want to read the full article. It should be different from the headline and contain a geographical reference if applicable</p>
        </AccordionTab>
        <AccordionTab header="Byline">
        <p>Add the name of your company in the byline section</p>
        </AccordionTab>
        <AccordionTab header="Body copy">
        <p>Maximum of 500 words in total. Aim for every paragraph to be one or two sentences long - this makes the content more readable on mobile devices and helps with Google indexing. The intro line is recommended to be brief - a maximum of 100 words. Break down the text with suitable subheadings where necessary. These can include keywords</p>
        <br /> Top tips:
        <ul>
          <li>Identify the target audience and ensure you are effectively communicating with them</li>
          <li>Use clear and concise language and make sure your spelling and punctuation are accurate</li>
          <li>Ensure your writing flows smoothly and communicates your message effectively</li>
        </ul>
        </AccordionTab>
        <AccordionTab header="Images">
        <ul>
          <li>A maximum of 3 images can be included in the article</li>
          <li>Images must be clean, text-free and in a 3:2 landscape ratio</li>
          <li>Include an image credit where appropriate and a caption of up to eight words for every image</li>
          <li>Written permission must be held from all subjects featured in images</li>
          <li>By providing the images you are confirming that you hold the copyright and permission to use them for commercial purposes</li>
        </ul>
        </AccordionTab>
        <AccordionTab header="Call to Action">
        <p>This is the final paragraph at the foot of the article. Typically bolded, it will contain the contact details and is the only place in which links can be included in Supplied articles. It should be a clear signpost to readers on how to get in touch, i.e. via your website or social media channels</p>
        </AccordionTab>
        </Accordion>
      </div>
      <div id="research" className="m-5">
        <h2>Research</h2>
        <p>A Research article will be created by one of our team of highly-skilled writers. To produce the best possible final article, we require a content brief that explains your reason for advertising and highlights the key points you wish to be included.</p> 
        <p>There should be a minimum of 5 bullet points that provide all of the information we require, plus a link to your website so that we can gather the necessary background information.</p>
        <p>Feel free to provide a line or so of copy that we can attribute to yourself - as well as your full name and job title - as a quote.</p>
        <p>If you have any images that you would like us to include, please provide them - though they must follow the guidelines in the Images section of the Supplied specification above.</p>
        <p>Don&apos;t worry if you do not have any to supply, we will select from our extensive range of stock images to find the perfect accompaniment to the article.</p>
      </div>
      <div id="bespoke" className="m-5">
        <h2>Bespoke</h2>
        <p>The following form has been designed to provide all of the information required to craft a quality Bespoke content marketing article that delivers exceptional results.</p>
        <p>Please provide as much information as possible. The writer may get in touch should any points of clarification be required, but this may delay the publication of the article.</p>
        <p>If you have any images that you would like us to include, please provide them - though they must follow the guidelines in the Images section of the Supplied specification above.</p>
        <p>Once completed, click the Save button and a PDF will be downloaded to your device. Please email this, along with any images to be included, directly to your Reach account manager who will process it along with the Content Marketing booking.</p>
      </div>
    </div>
    </main>
    </>
  );
}


