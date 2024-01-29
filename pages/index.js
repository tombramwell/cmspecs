import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tooltip } from 'primereact/tooltip';
import { Accordion, AccordionTab } from 'primereact/accordion';


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
      <AccordionTab header="Specification">
            <DataTable value={data} className="pt-5 pb-5" showGridlines style={{minWidth: '50rem'}}>
                <Column field="package" frozen header=" " body={packageTemplate}></Column>
                <Column field="supplied" header="Supplied" body={suppliedTemplate}></Column>
                <Column field="research" header="Research" body={researchTemplate}></Column>
                <Column field="bespoke" header="Bespoke" body={bespokeTemplate}></Column>
                <Column field="restricted" header="Restricted" body={restrictedTemplate}></Column>
            </DataTable>
      </AccordionTab>
      <AccordionTab className="pt-5" header="Process">
      <div className="pt-5 pb-5">
      <ul>
        <li>All SLAs begin from the point Studio receives all of the necessary assets OR a confirmed time slot for a client call</li>
        <li>If a Content Marketing ARF is uploaded and doesn't follow the specifications above or assets are missing, it <strong>will</strong> be put onto Query</li>
        <li>It is the salesperson or CST team member's responsibility to ensure all client-supplied assets have been uploaded</li>
        <li>No member of the Studio team should be chased prior to the SLAs listed above</li>
        <li>Once an article is approved and has been published, no further changes can be made. From there, a Content Marketing Amends package would need to be processed to facilitate any changes</li>
        <li>Each article published must be at least 90% unique. This means that some quotes could be included in two or more articles, but if a client wishes to "re-use" previously-published content, a CM Amends package should be booked, rather than a new article package</li>
      </ul>
      <u><strong>Images</strong></u>
      <ul>
        <li>Client logos cannot be included in content marketing artices</li>
        <li>Images cannot contain overlaid text</li>
        <li>Display ads and posters cannot be used as images within articles</li>
        <li>Captions and image credits should be supplied with all images</li>
        <li>Images should be landscape, in a 3:2 ratio and no less than 1,200px. JPEG is the preferred format, PNG cannot be used</li>
      </ul>
      </div>
      </AccordionTab>
      <AccordionTab className="pt-5" header="Legal Matrix">

      </AccordionTab>
    </Accordion>
    </div>

    </main>
    </>
  );
}
